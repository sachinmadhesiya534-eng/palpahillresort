"use client";

import { db, storage } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";

export default function AdminAddGallery() {
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return alert("Please select an image file");
    if (!description) return alert("Please add a description");

    setIsUploading(true);

    try {
      // 1. Upload photo to Firebase Storage under 'gallery' folder
      const storageRef = ref(
        storage,
        `gallery/${imageFile.name}_${Date.now()}`,
      );
      const snapshot = await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // 2. Save description & image URL to Firestore
      await addDoc(collection(db, "gallery"), {
        description,
        imageUrl,
        createdAt: new Date(),
      });

      alert("Gallery image uploaded successfully!");

      // Reset form fields
      setDescription("");
      setImageFile(null);
      const fileInput = document.getElementById(
        "gallery-image",
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error uploading gallery item: ", error);
      alert("Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Upload Gallery Image
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image Description / Caption
          </label>
          <textarea
            placeholder="e.g., Stunning view of the sunset from our infinity pool"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black h-24 resize-none"
            required
          />
        </div>

        {/* File Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Photo (JPEG/PNG)
          </label>
          <input
            id="gallery-image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0])
                setImageFile(e.target.files[0]);
            }}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isUploading}
          className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors ${
            isUploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {isUploading ? "Uploading Image..." : "Publish to Public Gallery"}
        </button>
      </form>
    </div>
  );
}

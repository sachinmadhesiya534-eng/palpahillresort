"use client"; // Required for handling state and form submission

import { db, storage } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";

export default function AdminAddRestaurant() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Veg");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return alert("Please upload a dish image");
    if (!name || !price) return alert("Please fill out all fields");

    setIsUploading(true);

    try {
      // 1. Upload the physical jpeg/png file to Firebase Storage
      const storageRef = ref(
        storage,
        `restaurant/${imageFile.name}_${Date.now()}`,
      );
      const snapshot = await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // 2. Save text data + category + image URL string to Firestore
      await addDoc(collection(db, "restaurant"), {
        name,
        price: Number(price),
        category,
        imageUrl,
        createdAt: new Date(),
      });

      alert("Menu item added successfully!");

      // Reset Form fields cleanly
      setName("");
      setPrice("");
      setCategory("Veg");
      setImageFile(null);
      const fileInput = document.getElementById(
        "dish-image",
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error adding menu item: ", error);
      alert("Failed to add item to database.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Add Restaurant Menu Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dish Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dish Name
          </label>
          <input
            type="text"
            placeholder="e.g., Palpa Thakali Khana Set"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price (Rs.)
          </label>
          <input
            type="number"
            placeholder="e.g., 450"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        {/* Category Dropdown Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black bg-white"
          >
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Beverage">Beverage</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>

        {/* Image File Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dish Photo (JPEG/PNG)
          </label>
          <input
            id="dish-image"
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
          className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors duration-200 ${
            isUploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isUploading ? "Saving Menu Item..." : "Add to Live Menu"}
        </button>
      </form>
    </div>
  );
}

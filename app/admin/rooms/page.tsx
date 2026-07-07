// Example: inside your admin room creation component
"use client";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";

export default function AdminAddRoom() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return alert("Please upload an image");

    try {
      // 1. Upload image to Firebase Storage
      const storageRef = ref(storage, `rooms/${imageFile.name}_${Date.now()}`);
      const snapshot = await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // 2. Save text details + image URL to Firestore
      await addDoc(collection(db, "rooms"), {
        title,
        price: Number(price),
        imageUrl, // The public URL link to display
        createdAt: new Date(),
      });

      alert("Room added successfully!");
      setTitle("");
      setPrice("");
      setImageFile(null);
    } catch (error) {
      console.error("Error adding room: ", error);
    }
  };

  // ... your form JSX return layout with inputs goes here
}

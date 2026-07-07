"use client";

import React from "react";

export default function BookingPage() {
  // Replace these with your actual resort contact numbers
  // Note: WhatsApp requires the country code without the '+' or '00' prefix for API links
  const WHATSAPP_NUMBER = "9779800000000"; // e.g., 977 for Nepal + your 10 digit number
  const PHONE_NUMBER = "+977-9800000000";

  // Pre-filled template message for WhatsApp convenience
  const messageTemplate = encodeURIComponent(
    "Namaste Palpa Hill Resort! I would like to inquire about room availability and make a booking reservation. Please let me know the next steps.",
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${messageTemplate}`;
  const callUrl = `tel:${PHONE_NUMBER}`;

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl min-h-[70vh] flex flex-col justify-center">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-6">
        {/* Header Badges & Titles */}
        <div className="space-y-2">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Easy Reservations
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Book Your Stay With Us
          </h1>
          <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
            Connect directly with our host desk via WhatsApp or phone call to
            finalize your dates and customize your packages.
          </p>
        </div>

        <hr className="border-gray-100 my-4" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          {/* WhatsApp Redirect Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            {/* SVG WhatsApp Icon */}
            <svg
              className="w-6 h-6 fill-current text-white group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.296 1.498 4.808 1.499 5.482 0 9.94-4.46 9.943-9.942.001-2.654-1.033-5.148-2.915-7.032C16.6 1.797 14.113.765 11.46.765 5.98.765 1.52 5.226 1.517 10.707c-.001 1.606.435 3.176 1.262 4.568L1.871 21.1l5.952-1.562zm10.724-4.832c-.304-.152-1.797-.886-2.051-.978-.253-.092-.438-.138-.621.138-.184.277-.712.886-.873 1.071-.16.185-.322.208-.626.056-.304-.152-1.282-.472-2.443-1.508-.903-.805-1.512-1.8-1.689-2.105-.177-.304-.019-.469.133-.62.137-.136.304-.354.456-.531.152-.177.202-.304.304-.507.102-.203.051-.38-.025-.533-.076-.152-.621-1.498-.85-2.049-.224-.54-.452-.466-.621-.475-.16-.008-.344-.01-.529-.01-.184 0-.485.069-.739.346-.254.277-.971.949-.971 2.313 0 1.363.993 2.68 1.115 2.848.122.168 1.954 2.984 4.735 4.181.661.285 1.178.455 1.58.583.664.211 1.269.181 1.747.11.533-.08 1.797-.733 2.051-1.442.254-.709.254-1.316.177-1.442-.076-.127-.278-.203-.582-.355z" />
            </svg>
            Book via WhatsApp
          </a>

          {/* Direct Phone Call Button */}
          <a
            href={callUrl}
            className="flex items-center justify-center gap-3 bg-stone-900 hover:bg-stone-800 text-white font-medium px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            {/* SVG Phone Icon */}
            <svg
              className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.815 4.815l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.01 18 2 12.99 2 7V3z" />
            </svg>
            Call Front Desk
          </a>
        </div>

        {/* Informational Footer Box */}
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 text-left max-w-md mx-auto">
          <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
            📌 Check-In Notice
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Standard check-in time is 12:00 PM. Please state special dietary
            preferences (Veg/Non-Veg) during your chat for a personalized dining
            arrangement.
          </p>
        </div>
      </div>
    </div>
  );
}

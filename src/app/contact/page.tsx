"use client";

export default function Contact() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/contact-ai.jpg)" }}
    >
      {/* Overlay */}
      <div className="min-h-screen w-full flex items-center justify-center bg-black bg-opacity-80">
        
        <div className="bg-slate-900 border border-pink-500 rounded-xl p-6 w-full max-w-sm text-center">

          <h1 className="text-3xl font-bold text-pink-500 mb-4">
            Contact Us
          </h1>

          <p className="text-pink-400 text-lg font-semibold mb-2">
            Phone: 0365065353
          </p>

          <p className="text-blue-400 text-lg font-semibold mb-2">
            Email: mrmuhammadawais098@gmail.com
          </p>

          <p className="text-green-400 text-lg font-semibold mb-4">
            Location: Pakistan, Punjab, Chiniot
          </p>

          <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 p-2 rounded bg-black text-white border border-pink-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 rounded bg-black text-white border border-pink-500"
          />

          <textarea
            placeholder="Message"
            rows={3}
            className="w-full mb-4 p-2 rounded bg-black text-white border border-pink-500"
          />

          <button className="w-full bg-pink-600 text-white py-2 rounded font-semibold">
            Send
          </button>

        </div>
      </div>
    </div>
  );
}

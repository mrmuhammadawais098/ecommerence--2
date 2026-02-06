export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/about-ai.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/75 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-8">
            About Owais
          </h1>

          <p className="text-pink-300 mb-6 text-lg md:text-xl font-medium drop-shadow-lg">
            🤖 We are building an AI-driven e-commerce platform focused on
            innovation and people.
          </p>

          <p className="text-blue-400 mb-6 text-xl md:text-2xl font-semibold drop-shadow-lg">
            ⚡ Our AI systems help users discover products faster and smarter.
          </p>

          <p className="text-green-400 mb-6 text-xl md:text-2xl font-semibold drop-shadow-lg">
            💎 Human-centered AI ensures quality, trust, and satisfaction.
          </p>

          <p className="text-purple-400 text-xl md:text-2xl font-semibold drop-shadow-lg">
            🚀 Blending technology and creativity to shape the future of digital shopping.
          </p>

        </div>
      </div>
    </div>
  );
}

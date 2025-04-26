export default function About() {
  return (
    <section>
      <div className="max-w-3xl mx-auto bg-black/60 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-800">
          About Us
        </h1>

        <div className="prose prose-lg prose-p:text-gray-900 prose-li:text-gray-900">
          <p className="mb-4">
            Welcome to <strong>SafeSeek</strong>, an intelligent and user-friendly text classification tool designed to promote safe and respectful communication online.
            With the power of the <strong>Perspective API</strong>, our platform helps identify and label text content based on sentiment and tone—instantly.
          </p>

          <p className="mb-4">
            Whether you’re a developer, content creator, educator, or just a conscious netizen, our service helps you avoid harmful language and ensure the tone of your message is appropriate.
          </p>

          <p className="mb-2 font-semibold">Our classification system detects:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><span className="text-green-600 font-medium">Positive</span> – Encouraging, supportive, or neutral in tone</li>
            <li><span className="text-red-600 font-medium">Negative</span> – Abusive, hateful, or toxic comments</li>
            <li><span className="text-yellow-600 font-medium">Neutral</span> – Informative or plain content without strong sentiment</li>
          </ul>

          <p className="mb-0">
            It’s fast, reliable, and built with a vision of a cleaner internet. Use the demo on our homepage to test messages in real time and see how we classify them.
          </p>
        </div>
      </div>
    </section>
  );
}

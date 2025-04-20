

export default function About() {
  return (
    <div className="max-w-3xl mx-auto hgt">
      <h1 className="text-3xl font-bold mb-6">About Our Text Classification Service</h1>
      <div className="prose prose-lg">
        <p className="mb-4">
          Welcome to our advanced text classification system, powered by the Perspective API. Our service helps users analyze and understand the sentiment and tone of text content quickly and accurately.
        </p>
        <p className="mb-4">
          Using state-of-the-art machine learning algorithms, we can classify text into three categories:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Positive - Indicated by a green dot</li>
          <li>Negative - Indicated by a red dot</li>
          <li>Neutral - Indicated by a yellow dot</li>
        </ul>
        <p>
          This tool is perfect for content creators, social media managers, and anyone who needs to understand the emotional impact of their written content.
        </p>
      </div>
    </div>
  );
}
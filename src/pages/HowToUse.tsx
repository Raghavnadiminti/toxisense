export default function HowToUse() {
    return (
      <section className="bg-black/60 text-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-800">
          How to Use SafeSeek
        </h2>
        <ul className="list-decimal pl-6 space-y-4 text-lg">
          <li>
            Type or paste your text in the <strong>sample text box</strong> on the homepage to test for toxicity.
          </li>
          <li>
            Click on <strong>“Analyze”</strong> to see whether the text is Positive, Neutral, or Negative.
          </li>
          <li>
            Toxic content is flagged using <strong>Perspective API</strong> — same tech powers our browser extension.
          </li>
          <li>
            To stay safe online, <strong>download our extension</strong> by clicking the Download button at the bottom right.
          </li>
          <li>
            Once installed, the extension will <strong>automatically block websites</strong> if your search input contains toxic words.
          </li>
        </ul>
      </section>
    );
  }
  
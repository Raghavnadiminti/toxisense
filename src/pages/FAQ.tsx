export default function FAQ() {
    return (
      <section className="bg-black/60 text-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">❓ What is SafeSeek?</h3>
            <p>SafeSeek is a tool and browser extension that helps identify and block toxic text using Google's Perspective API.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">❓ How does the extension work?</h3>
            <p>It checks your search input for toxic words and prevents pages from loading if anything harmful is detected.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">❓ Is my data stored or tracked?</h3>
            <p>No. We do not store or track any personal data. Everything runs locally for privacy and safety.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">❓ How do I install the extension?</h3>
            <p>Click the download button at the bottom right and follow your browser’s instructions to add it manually.</p>
          </div>
        </div>
      </section>
    );
  }
  
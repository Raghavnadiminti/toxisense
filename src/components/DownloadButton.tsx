

export default function DownloadButton() {
  const handleDownload = () => {
    // Implement download functionality here
    console.log('Download clicked');
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-200 z-50"
    >
      Download
    </button>
  );
}
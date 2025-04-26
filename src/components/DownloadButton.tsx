export default function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/dti.zip';       
    link.download = 'dti.zip';   
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-200 z-50"
    >
      Download
    </button>
  );
}

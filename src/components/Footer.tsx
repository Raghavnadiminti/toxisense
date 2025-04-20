export default function Footer() {
    return (
      <footer className="text-white py-6 mt-20 bg-gradient-to-r from-black-600 via-black-500 to-black-500 shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base font-medium">
            © {new Date().getFullYear()} ToxiSense AI. All rights reserved.
          </p>
          <p className="text-xs mt-1">
            Built with ❤️ by Team Algorix
          </p>
        </div>
      </footer>
    );
  }
  
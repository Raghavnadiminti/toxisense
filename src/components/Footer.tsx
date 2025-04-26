import footerBg from '../assets/Meteor.svg';


export default function Footer() {
  return (
    <footer
      className="text-white py-8 mt-20 shadow-inner bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#home" className="text-white-700 hover:text-white-900 transition-colors duration-300">Home</a>
          <a href="#about" className="text-white-700 hover:text-white-900 transition-colors duration-300">About Us</a>
          <a href="#contact" className="text-white-700 hover:text-white-900 transition-colors duration-300">Contact Us</a>
        </div>

        {/* Footer Text */}
        <p className="text-sm sm:text-base font-medium">
          © {new Date().getFullYear()} SafeSeek. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with ❤️ by Team Algorix
        </p>
      </div>
    </footer>
  );
}

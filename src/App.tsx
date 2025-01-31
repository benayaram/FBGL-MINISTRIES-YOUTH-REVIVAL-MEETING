import React, { useState, useEffect } from 'react';
import {
  Church,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const themeColors = [
    ['#f4851d', '#ffb20e', '#f6ee21'],
    ['#f6ee21', '#f4851d', '#ffb20e'],
    ['#ffb20e', '#f6ee21', '#f4851d'],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % themeColors.length);
    }, 7000); // Change colors every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    window.open('https://forms.gle/rWVaFw98iHBGwQv86', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const currentColors = themeColors[colorIndex];

  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(135deg, ${currentColors[0]} 0%, ${currentColors[1]} 50%, ${currentColors[2]} 100%)`,
        transition: 'background 2s ease-in-out',
      }}
    >
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://static.wixstatic.com/media/75bf8a_441ce0f4eca346c78eb9c9abe2f49f55~mv2.jpeg/v1/crop/x_0,y_36,w_500,h_464/fill/w_155,h_144,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IAFB%20Logo.jpeg"
                alt="FBGL Ministries Logo"
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-2 text-white font-bold hover:text-[#f6ee21] transition-colors">
                FBGL Ministries
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-[#f6ee21] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('details')}
                className="text-white hover:text-[#f6ee21] transition-colors"
              >
                Event Details
              </button>
              <button
                onClick={() => scrollToSection('connect')}
                className="text-white hover:text-[#f6ee21] transition-colors"
              >
                Connect
              </button>
              <button
                onClick={handleRegister}
                className="bg-[#f4851d] hover:bg-[#f6ee21] text-white hover:text-black px-4 py-2 rounded-full transition-all transform hover:scale-105"
              >
                Register Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#f6ee21] transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-[#f6ee21] transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('details')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-[#f6ee21] transition-colors"
                >
                  Event Details
                </button>
                <button
                  onClick={() => scrollToSection('connect')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-[#f6ee21] transition-colors"
                >
                  Connect
                </button>
                <button
                  onClick={handleRegister}
                  className="block w-full text-left px-3 py-2 text-white hover:text-[#f6ee21] transition-colors"
                >
                  Register Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <div
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyXtYiCJt_8oH29ZxLpfDtadmbDNsop0lfXWocZoS1AP5eYEuw_1bQI6AYepRLh_3WrxW3ySKFKtneeLF0eRA_f-PSqDc_DpzUnmXjVXgYu9-PiKXEoGQv_70DtkC0L3mWKDAFpOjWOKPmjLwoiuUmr32kB_KZlMaFT6Ksq3tNBrRAeflWmWr68O5NCtA/s1080/WhatsApp%20Image%202025-01-31%20at%2010.26.28_6a40cf3a.jpg"
            alt="Church Background"
            className="w-full h-full object-cover"
            style={{
              transform: 'translateY(var(--scroll-offset, 0))',
              transition: 'transform 0.5s ease-out',
            }}
          />
        </div>

        {/* Glassmorphism Hero Content */}
        <div className="relative z-10 p-8 backdrop-blur-lg bg-white/30 rounded-xl shadow-2xl max-w-4xl mx-4 hover:bg-white/40 transition-all duration-300">
          <div className="flex items-center justify-center mb-8">
            <img
              src="https://static.wixstatic.com/media/75bf8a_441ce0f4eca346c78eb9c9abe2f49f55~mv2.jpeg/v1/crop/x_0,y_36,w_500,h_464/fill/w_155,h_144,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IAFB%20Logo.jpeg"
              alt="FBGL Ministries Logo"
              className="w-32 h-32 rounded-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4 hover:text-[#f6ee21] transition-colors">
            FBGL MINISTRIES
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white text-center mb-8 hover:text-[#f6ee21] transition-colors">
            Youth Revival Meeting
          </h2>
        </div>
      </div>

      {/* Event Details Section */}
      <div id="details" className="py-16 px-4">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/30 rounded-xl p-8 shadow-2xl hover:bg-white/40 transition-all duration-300">
          <h3 className="text-3xl font-bold text-white mb-8 text-center hover:text-[#f6ee21] transition-colors">
            Event Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
              <Calendar className="w-8 h-8 text-white" />
              <div>
                <h4 className="text-xl font-semibold text-white">Date</h4>
                <p className="text-white">January 31, 2025</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
              <Clock className="w-8 h-8 text-white" />
              <div>
                <h4 className="text-xl font-semibold text-white">Time</h4>
                <p className="text-white">6:00 PM</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
              <MapPin className="w-8 h-8 text-white" />
              <div>
                <h4 className="text-xl font-semibold text-white">Location</h4>
                <p className="text-white">Singavaram</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
              <Church className="w-8 h-8 text-white" />
              <div>
                <h4 className="text-xl font-semibold text-white">Ministry</h4>
                <p className="text-white">FBGL Ministries</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleRegister}
              className="bg-[#f4851d] hover:bg-[#f6ee21] text-white hover:text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div id="connect" className="pb-16 px-4">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/30 rounded-xl p-8 shadow-2xl hover:bg-white/40 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 text-center hover:text-[#f6ee21] transition-colors">
            Connect With Us
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="https://www.fbglministries.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-[#f6ee21] transition-colors hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Website</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.benayaram.fbglministriesapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-[#f6ee21] transition-colors hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Download App</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold text-lg mb-4 hover:text-[#f6ee21] transition-colors">
                Contact Us
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:fbglministries2016@gmail.com"
                  className="flex items-center justify-center md:justify-start text-white hover:text-[#f6ee21] transition-colors hover:scale-105"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>fbglministries2016@gmail.com</span>
                </a>
                <a
                  href="tel:+917780634778"
                  className="flex items-center justify-center md:justify-start text-white hover:text-[#f6ee21] transition-colors hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 77806 34778</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-white font-bold text-lg mb-4 hover:text-[#f6ee21] transition-colors">
                Quick Links
              </h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-white hover:text-[#f6ee21] transition-colors hover:scale-105"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('details')}
                  className="block w-full text-white hover:text-[#f6ee21] transition-colors hover:scale-105"
                >
                  Event Details
                </button>
                <button
                  onClick={() => scrollToSection('connect')}
                  className="block w-full text-white hover:text-[#f6ee21] transition-colors hover:scale-105"
                >
                  Connect
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-right">
              <h4 className="text-white font-bold text-lg mb-4 hover:text-[#f6ee21] transition-colors">
                Follow Us
              </h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://www.facebook.com/rjosiah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f6ee21] transition-colors hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/josiahraju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f6ee21] transition-colors hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@RevRAJUJOSIAH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f6ee21] transition-colors hover:scale-110"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white hover:text-[#f6ee21] transition-colors">
              © {new Date().getFullYear()} FBGL Ministries. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full bg-cricket-field py-3 border-t border-cricket-light shadow-cricket">
      <div className="container mx-auto text-center">
        <p className="text-white text-sm font-medium">
          © {currentYear} Cricket Team Manager. All rights reserved | Developed by{' '}
          <span className="text-cricket-light hover:text-white transition-colors font-semibold">
            Moiz Khatri
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
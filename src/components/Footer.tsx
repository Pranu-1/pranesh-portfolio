import React from 'react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-xl font-bold font-display text-white">S.Pranesh</a>
          <span className="text-sm text-white/50 mt-1">Websites • Automation • AI • Growth</span>
        </div>

        <div className="text-sm text-white/40">
          &copy; {year} S. Pranesh. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}

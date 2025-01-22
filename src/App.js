import React from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';


function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header / Nav */}
      <header className="bg-gray-50 text-[#B8B29B] py-6 px-8 flex justify-between items-center sticky top-0 z-50 shadow-md">
        {/* Logo / Company Name */}
        <div className="text-2xl font-semibold tracking-tight">
          SPG Holiday Company
        </div>
        
        {/* Navigation Links */}
        <nav className="space-x-8 text-bold">
          <a className="text-lg hover:text-gray-600 transition" href="#home">Home</a>
          <a className="text-lg hover:text-gray-600 transition" href="#about">About</a>
          <a className="text-lg hover:text-gray-600 transition" href="#services">Services</a>
          

        </nav>
      </header>

      {/* Main sections (all in one page) */}
      <main className="flex-1 bg-gray-100">
        <Home id="home" />
        <About id="about" />
        <Services id="services" />
        
      </main>

      {/* Footer */}
      <footer className="bg-[#B8B29B] text-[#4A4A4A] py-8 text-center">
  <div className="max-w-2xl mx-auto">
    <p className="text-lg mb-4">
      SPG Holiday Company &copy; {new Date().getFullYear()}
    </p>
    <p className="text-md mb-4">
      Shop No. 17, Ground Floor, SLF Mall, Sec. 30-33, Faridabad - 121003 (HR)
    </p>
    <p className="text-md mb-4">
      <strong>Phone:</strong> 0129-4005488, 8851268014, +91-9560264377
    </p>
    <p className="text-md">
      <strong>Email:</strong> spgholidaycompany@gmail.com
    </p>
  </div>
</footer>

    </div>
  );
}

export default App;

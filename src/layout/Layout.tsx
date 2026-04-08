import React, { useState } from 'react';
import { FaPlay, FaDownload, FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showToast, setShowToast] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-purple-900 fixed top-0 left-0 w-full p-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <FaPlay className="mr-2" /> {/* Ikon play */}
          <h1 className="text-xl font-bold">Vodey Streaming</h1> {/* Ukuran teks diperkecil dari text-2xl ke text-xl */}
        </div>
        <a
          href="https://viplay.top/"
          className="bg-purple-800 text-white px-3 py-1 rounded flex items-center space-x-2 hover:bg-purple-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUpload /> {/* Ikon upload */}
          <span>Upload</span>
        </a>
      </header>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-900 text-white p-3 rounded-lg shadow-lg flex items-center justify-between space-x-4 w-[90%] max-w-3xl">
          <div className="flex items-center space-x-3">
            <FaDownload size={24} className="text-white" /> {/* Ikon APK */}
            <span className="font-semibold">Install DoobStream Apk</span>
          </div>
          <Link
            to="https://github.com/AgungDevlop/Viral/raw/refs/heads/main/DoobStream.apk"
            className="bg-purple-800 text-white px-3 py-1 rounded font-medium hover:bg-purple-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install
          </Link>
          <button onClick={() => setShowToast(false)} className="text-white ml-2 text-xl font-bold">
            ×
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 bg-gray-900 text-white pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 p-4 text-white text-center">
        <p>© 2024 DoobStream. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

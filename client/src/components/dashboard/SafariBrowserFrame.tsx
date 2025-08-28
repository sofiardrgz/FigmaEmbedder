import { ReactNode } from 'react';

interface SafariBrowserFrameProps {
  children: ReactNode;
  url?: string;
}

export default function SafariBrowserFrame({ children, url = "app.lakenleecreative.com" }: SafariBrowserFrameProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-2xl max-w-7xl mx-auto" data-testid="safari-frame">
      {/* Browser Window */}
      <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600">
        {/* Safari Top Bar */}
        <div className="bg-gray-600 border-b border-gray-500 px-4 py-3" data-testid="safari-toolbar">
          <div className="flex items-center justify-between">
            {/* Traffic Lights */}
            <div className="flex items-center space-x-2" data-testid="traffic-lights">
              <div className="w-3 h-3 bg-red-500 rounded-full" data-testid="close-button"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full" data-testid="minimize-button"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full" data-testid="maximize-button"></div>
            </div>
            
            {/* Address Bar */}
            <div className="flex-1 max-w-md mx-4" data-testid="address-bar-container">
              <div className="bg-gray-500 border border-gray-400 rounded-md px-3 py-1.5 text-sm text-gray-200" data-testid="address-bar">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" data-testid="secure-icon">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span data-testid="url-text">{url}</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-1" data-testid="nav-buttons">
              <button className="p-1.5 rounded hover:bg-gray-500 transition-colors" data-testid="back-button">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-1.5 rounded hover:bg-gray-500 transition-colors" data-testid="forward-button">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="p-1.5 rounded hover:bg-gray-500 transition-colors" data-testid="refresh-button">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="bg-background" data-testid="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}
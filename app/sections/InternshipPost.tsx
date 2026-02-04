'use client';
import { DM_Sans, Lato } from "next/font/google";
import { useState } from "react";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["100", "300", "400", "700"],
});

type ButtonState = "apply" | "applied" | "no-subscription" | "incomplete-profile";

const InternshipPost = () => {
  const [activeMenu, setActiveMenu] = useState("Internships");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Change this to see different button states: "apply" | "applied" | "no-subscription" | "incomplete-profile"
  const [buttonState, setButtonState] = useState<ButtonState>("apply");

  const menuItems = [
    "Home",
    "Profile",
    "Internships",
    "My applications",
    "Subscription",
    "My score card"
  ];

  const renderButton = () => {
    switch (buttonState) {
      case "apply":
        return (
          <div className="bg-gray-100 px-4 md:px-8 py-4 md:py-6 rounded-b-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-gray-700">
                #applicants: 5 | if you apply your rank among exiting applicant would be: 3
              </p>
              <button className="w-full md:w-auto bg-gray-800 hover:bg-gray-900 text-white px-8 md:px-12 py-3 md:py-4 rounded-xl font-medium text-base md:text-lg transition-colors flex items-center justify-center gap-2">
                Apply <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        );
      
      case "applied":
        return (
          <div className="bg-gray-100 px-4 md:px-8 py-4 md:py-6 rounded-b-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-gray-700">
                #applicants: 5 | Your rank: 3
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 w-full md:w-auto">
                <button className="w-full md:w-auto bg-gray-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-xl font-medium text-base md:text-lg cursor-not-allowed">
                  already applied
                </button>
                <div className="text-base md:text-lg font-semibold">
                  Status: <span className="text-gray-700">APPLIED</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "no-subscription":
        return (
          <div className="bg-gray-100 px-4 md:px-8 py-4 md:py-6 rounded-b-lg">
            <button className="w-full bg-gray-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-xl font-medium text-base md:text-lg cursor-not-allowed">
              Subscription not active
            </button>
          </div>
        );
      
      case "incomplete-profile":
        return (
          <div className="bg-gray-100 px-4 md:px-8 py-4 md:py-6 rounded-b-lg">
            <button className="w-full bg-gray-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-xl font-medium text-sm md:text-lg cursor-not-allowed">
              complete your profile to start applying to internships
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`flex h-screen w-full ${dm_sans.className} bg-zinc-50`}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-zinc-800 text-white p-2 rounded-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Left menu */}
      <div className={`${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:relative w-56 bg-zinc-800 text-white p-6 flex flex-col h-full z-40 transition-transform duration-300 ease-in-out`}>
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => {
                setActiveMenu(item);
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-blue-400 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-white text-black overflow-auto p-4 md:p-8">
        <div className="bg-white rounded-lg w-full shadow-lg">
          {/* Header */}
          <div className="bg-gray-100 px-4 md:px-8 py-4 md:py-6 rounded-t-lg">
            <h1 className="text-xl md:text-3xl font-bold mb-2">Internship Details</h1>
            <p className="text-xs md:text-sm text-gray-600 italic">Job id : sflkfsdk f2432348974</p>
          </div>

          {/* Content */}
          <div className="p-4 md:p-8 space-y-3">
            {/* Title */}
            <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] gap-2 md:gap-4 py-3 bg-gray-100 px-4 rounded">
              <div className="font-semibold">Title</div>
              <div>Algorithms Research</div>
            </div>

            {/* Domain / Field of work */}
            <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] gap-2 md:gap-4 py-3 bg-white px-4">
              <div className="font-semibold">Domain / Field of work</div>
              <div>ML/AI</div>
            </div>

            {/* Work type */}
            <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] gap-2 md:gap-4 py-3 bg-gray-100 px-4 rounded">
              <div className="font-semibold">Work type</div>
              <div>Part-time Internship</div>
            </div>

            {/* Work mode type */}
            <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] gap-2 md:gap-4 py-3 bg-white px-4">
              <div className="font-semibold">Work mode type</div>
              <div className="text-sm md:text-base">In-office / remote / remote, but in Delhi City / Field work in Delhi</div>
            </div>

            {/* Working days per week & Duration */}
            <div className="flex flex-col md:grid md:grid-cols-[250px_1fr_250px_1fr] gap-2 md:gap-4 py-3 bg-gray-100 px-4 rounded">
              <div className="font-semibold">Working days per week</div>
              <div>4 days per week</div>
              <div className="font-semibold mt-2 md:mt-0">Duration of work</div>
              <div>2 months</div>
            </div>

            {/* Application Deadline */}
            <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] gap-2 md:gap-4 py-3 bg-white px-4">
              <div className="font-semibold">Application Deadline</div>
              <div>5-Jan-2026</div>
            </div>

            {/* Work start date & Number of positions */}
            <div className="flex flex-col md:grid md:grid-cols-[250px_1fr_250px_1fr] gap-2 md:gap-4 py-3 bg-gray-100 px-4 rounded">
              <div className="font-semibold">Work start date</div>
              <div>10-Jan-2026</div>
              <div className="font-semibold mt-2 md:mt-0">Number of positions</div>
              <div>2</div>
            </div>

            {/* Stipend */}
            <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] gap-2 md:gap-4 py-3 bg-white px-4">
              <div className="font-semibold">Stipend</div>
              <div>5000 per month</div>
            </div>

            {/* Skills requirements */}
            <div className="py-3 bg-gray-100 px-4 rounded">
              <div className="font-semibold mb-2">Skills requirements</div>
              <div className="flex flex-wrap gap-2 text-sm md:text-base">
                <span className="text-blue-600">Assessment score requirement :</span>
                <span className="text-blue-600">Research ethics, ML / AI, Data Structures, Mathematical modeling, Probability & Stats</span>
              </div>
            </div>

            {/* Role / work description */}
            <div className="py-3 bg-white px-4">
              <div className="font-semibold mb-3">Role / work description</div>
              <div className="min-h-[200px] md:min-h-[250px] bg-gray-50 rounded p-4">
                {/* Empty text area for description */}
              </div>
            </div>
          </div>

          {/* Bottom button section */}
          {renderButton()}
        </div>
      </div>

      {/* Button State Selector for Demo */}
      <div className="fixed bottom-4 right-4 bg-white p-3 md:p-4 rounded-lg shadow-lg z-20">
        <p className="text-xs font-semibold mb-2">Demo: Change State</p>
        <select 
          value={buttonState}
          onChange={(e) => setButtonState(e.target.value as ButtonState)}
          className="text-xs border border-gray-300 rounded px-2 py-1 w-full"
        >
          <option value="apply">Apply</option>
          <option value="applied">Already Applied</option>
          <option value="no-subscription">No Subscription</option>
          <option value="incomplete-profile">Incomplete Profile</option>
        </select>
      </div>
    </div>
  );
};

export default InternshipPost;

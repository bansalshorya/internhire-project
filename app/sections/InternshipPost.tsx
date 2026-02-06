'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import { Menu, LogOut } from "lucide-react";
import { DM_Sans, Lato } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


// Custom Icon Components
const Menu = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none"
    className={className}
  >
    <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LogOut = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none"
    className={className}
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" 
      fill="currentColor"
    />
  </svg>
);

const CloseIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none"
    className={className}
  >
    <path 
      d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" 
      fill="currentColor"
    />
  </svg>
);

const lato = Lato({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["100", "300", "400", "700"],
});

type ButtonState = "apply" | "applied" | "no-subscription" | "incomplete-profile";

const InternshipPost = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Change this to see different button states: "apply" | "applied" | "no-subscription" | "incomplete-profile"
  const [buttonState, setButtonState] = useState<ButtonState>("apply");

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
    <div className={`flex min-h-screen bg-gray-50 text-black ${dm_sans.className}`}>
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
      >
        <Menu size={24} />
      </button>

      {/* ===== SIDEBAR ===== */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static w-60 min-h-screen bg-gray-100 p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out z-40`}
      >
        <div>
          <h1 className="text-xl font-bold">InternHire</h1>
          <p className="text-sm text-gray-500 mb-6">Candidate</p>

          <nav className="flex flex-col gap-2 text-sm">
            <Link
              href="/loged/candidate"
              className={`px-3 py-2 rounded ${
                pathname === "/loged/candidate" ? "bg-gray-300" : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/loged/candidate/profile"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/loged/candidate/profile")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Profile
            </Link>

            <Link
              href="/loged/candidate/internships"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/loged/candidate/internships")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Internships
            </Link>

            <Link
              href="/loged/candidate/applications"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/loged/candidate/applications")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              My applications
            </Link>

            <Link
              href="/loged/candidate/Subscription"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/loged/candidate/Subscription")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Subscription
            </Link>

            <Link
              href="/loged/candidate/ScoreCard"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/loged/candidate/ScoreCard")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              My score card
            </Link>
          </nav>
        </div>

        {/* Bottom buttons */}
        <div className="flex justify-between items-center">
          <button onClick={() => setOpen(true)} className="text-gray-600">
            <Menu />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <LogOut />
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Popup menu */}
      {open && (
        <div className="fixed bottom-20 left-4 lg:left-10 bg-white p-6 rounded-xl shadow-lg w-64 z-50">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-3 text-gray-600 hover:text-gray-800"
          >
            <CloseIcon size={20} />
          </button>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Shipping Policy</a>
            </li>
            <li>
              <a href="">Refund Policy</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8">
        <div className="bg-white rounded-xl shadow-sm">
          {/* Header */}
          <div className="bg-gray-100 px-4 md:px-8 py-4 md:py-6 rounded-t-xl">
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
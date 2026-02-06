'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DM_Sans } from "next/font/google";
import { useState } from "react";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Custom Icon Components
const MenuIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
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

const LogOutIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
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

type DraftProps = {
  title: string;
  org: string;
  involvement: string;
  type: string;
  location: string;
  stipend: string;
};

type PostedInternshipProps = {
  title: string;
  org: string;
  involvement: string;
  type: string;
  location: string;
  stipend: string;
  applicants: number;
};

const HomePage = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // State toggle between different view............
  const [profileComplete, setProfileComplete] = useState(false);
  const [hasPostedInternship, setHasPostedInternship] = useState(true);
  
  //  data
  const drafts: DraftProps[] = [
    {
      title: "Title",
      org: "@ Company name",
      involvement: "Part-time",
      type: "",
      location: "Chennai",
      stipend: "7k"
    }
  ];

  const postedInternships: PostedInternshipProps[] = [
    {
      title: "Title",
      org: "@ Company name",
      involvement: "Part-time",
      type: "Internship",
      location: "Chennai",
      stipend: "7k",
      applicants: 44
    }
  ];

  return (
    <div className={`flex min-h-screen bg-gray-50 text-black ${dm_sans.className}`}>
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
      >
        <MenuIcon size={24} />
      </button>

      {/* ===== SIDEBAR === */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static w-60 min-h-screen bg-gray-100 p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out z-40`}
      >
        <div>
          <h1 className="text-xl font-bold">InternHire</h1>
          <p className="text-sm text-gray-500 mb-6">Recruiter</p>

          <nav className="flex flex-col gap-2 text-sm">
            <Link
              href="/recruiter/home"
              className={`px-3 py-2 rounded ${
                pathname === "/recruiter/home" ? "bg-gray-300" : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/recruiter/profile"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/recruiter/profile")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Profile
            </Link>

            <Link
              href="/recruiter/new-internship"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/recruiter/new-internship")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              + new internship
            </Link>

            <Link
              href="/recruiter/your-drafts"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/recruiter/your-drafts")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Your Drafts
            </Link>

            <Link
              href="/recruiter/posted-internships"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/recruiter/posted-internships")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Posted internships
            </Link>

            <Link
              href="/recruiter/subscription"
              className={`px-3 py-2 rounded ${
                pathname.startsWith("/recruiter/subscription")
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              Subscription
            </Link>
          </nav>
        </div>

        {/* Bottom buttons */}
        <div className="flex justify-between items-center">
          <button onClick={() => setOpen(true)} className="text-gray-600">
            <MenuIcon />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <LogOutIcon />
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
        <div className="space-y-6">
          {/* Profile Completion Banner - Show if profile not complete */}
          {!profileComplete && (
            <div className="bg-yellow-400 p-4 lg:p-6 rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg lg:text-xl font-bold mb-1">Complete Profile</h2>
                <p className="text-sm lg:text-base">complete your profile to start posting internships</p>
              </div>
              <button className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full transition-colors text-sm lg:text-base whitespace-nowrap font-medium">
                go to profile →
              </button>
            </div>
          )}

          {/* Post Internship Banner - Show if profile complete but no internship posted */}
          {profileComplete && !hasPostedInternship && (
            <div className="bg-yellow-400 p-4 lg:p-6 rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg lg:text-xl font-bold mb-1">Post your first internship requirement</h2>
              </div>
              <button className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full transition-colors text-sm lg:text-base whitespace-nowrap font-medium">
                add new internship →
              </button>
            </div>
          )}

          {/* Drafts Section */}
          {drafts.length > 0 && (
            <div className="bg-white p-4 lg:p-8 rounded-xl shadow-sm">
              <h2 className="text-xl lg:text-2xl font-bold mb-6">Drafts</h2>

              {/* Table Header - Hidden on mobile */}
              <div className="hidden lg:grid grid-cols-6 gap-4 px-4 py-3 font-semibold text-sm border-b border-gray-200">
                <div>Title</div>
                <div>Org</div>
                <div>Involvement</div>
                <div>Type</div>
                <div>Location</div>
                <div>Stipend (₹ pm)</div>
              </div>

              {/* Draft Items */}
              <div className="space-y-4 lg:space-y-0">
                {drafts.map((draft, idx) => (
                  <div key={idx}>
                    {/* Mobile Card Layout */}
                    <div className="lg:hidden p-4 bg-gray-50 rounded-lg space-y-2">
                      <h3 className="font-semibold text-lg">{draft.title}</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div><span className="font-medium">Org:</span> {draft.org}</div>
                        <div><span className="font-medium">Involvement:</span> {draft.involvement}</div>
                        <div><span className="font-medium">Type:</span> {draft.type || "-"}</div>
                        <div><span className="font-medium">Location:</span> {draft.location}</div>
                        <div className="col-span-2"><span className="font-medium">Stipend:</span> {draft.stipend}</div>
                      </div>
                    </div>

                    {/* Desktop Table Layout */}
                    <div className="hidden lg:grid grid-cols-6 gap-4 px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="font-medium">{draft.title}</div>
                      <div className="text-gray-600">{draft.org}</div>
                      <div>{draft.involvement}</div>
                      <div>{draft.type || "-"}</div>
                      <div>{draft.location}</div>
                      <div>{draft.stipend}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-colors text-sm lg:text-base font-medium">
                  show more drafts →
                </button>
              </div>
            </div>
          )}

          {/* Posted Live Internships Section */}
          {postedInternships.length > 0 && (
            <div className="bg-white p-4 lg:p-8 rounded-xl shadow-sm">
              <h2 className="text-xl lg:text-2xl font-bold mb-6">Posted live internships</h2>

              {/* Table Header - Hidden on mobile */}
              <div className="hidden lg:grid grid-cols-7 gap-4 px-4 py-3 font-semibold text-sm border-b border-gray-200">
                <div>Title</div>
                <div>Org</div>
                <div>Involvement</div>
                <div>Type</div>
                <div>Location</div>
                <div>Stipend (₹ pm)</div>
                <div>Applicants</div>
              </div>

              {/* Posted Internship Items */}
              <div className="space-y-4 lg:space-y-0">
                {postedInternships.map((internship, idx) => (
                  <div key={idx}>
                    {/* Mobile Card Layout */}
                    <div className="lg:hidden p-4 bg-gray-50 rounded-lg space-y-2">
                      <h3 className="font-semibold text-lg">{internship.title}</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div><span className="font-medium">Org:</span> {internship.org}</div>
                        <div><span className="font-medium">Type:</span> {internship.type}</div>
                        <div><span className="font-medium">Involvement:</span> {internship.involvement}</div>
                        <div><span className="font-medium">Location:</span> {internship.location}</div>
                        <div><span className="font-medium">Stipend:</span> {internship.stipend}</div>
                        <div><span className="font-medium">Applicants:</span> {internship.applicants}</div>
                      </div>
                    </div>

                    {/* Desktop Table Layout */}
                    <div className="hidden lg:grid grid-cols-7 gap-4 px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="font-medium">{internship.title}</div>
                      <div className="text-gray-600">{internship.org}</div>
                      <div>{internship.involvement}</div>
                      <div>{internship.type}</div>
                      <div>{internship.location}</div>
                      <div>{internship.stipend}</div>
                      <div>{internship.applicants}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-colors text-sm lg:text-base font-medium">
                  show more live →
                </button>
              </div>
            </div>
          )}

          {/* Demo................................................................*/}
          <div className="fixed bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg z-20 space-y-2">
            <p className="text-xs font-semibold mb-2">Demo Controls:</p>
            <button
              onClick={() => setProfileComplete(!profileComplete)}
              className="w-full text-xs bg-blue-500 text-white px-3 py-2 rounded"
            >
              Toggle Profile: {profileComplete ? "Complete" : "Incomplete"}
            </button>
            <button
              onClick={() => setHasPostedInternship(!hasPostedInternship)}
              className="w-full text-xs bg-green-500 text-white px-3 py-2 rounded"
            >
              Toggle Posted: {hasPostedInternship ? "Yes" : "No"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
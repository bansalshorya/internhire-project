'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Menu, LogOut } from "lucide-react";
import { DM_Sans, Lato } from "next/font/google";
import { useState } from "react";

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

type ApplicationProps = {
  title: string;
  involvement: string;
  type: string;
  location: string;
  positions: number;
  applicants: number;
  yourRank: number;
  connect: string | null;
  status: "Accepted" | "Shortlisted" | "Rejected" | "Closed" | "Applied" | "Hired";
};

const applications: ApplicationProps[] = [
  {
    title: "Infosis",
    involvement: "Part-time",
    type: "Internship",
    location: "Chennai",
    positions: 4,
    applicants: 4,
    yourRank: 0,
    connect: "chat",
    status: "Accepted"
  },
  {
    title: "Company X",
    involvement: "Part-time",
    type: "Internship",
    location: "Delhi",
    positions: 5,
    applicants: 65,
    yourRank: 60,
    connect: "chat (1)",
    status: "Shortlisted"
  },
  {
    title: "Company Y",
    involvement: "Part-time",
    type: "Internship",
    location: "Madras",
    positions: 2,
    applicants: 34,
    yourRank: 29,
    connect: "chat",
    status: "Rejected"
  },
  {
    title: "Company Z",
    involvement: "Part-time",
    type: "Job",
    location: "Mumbai",
    positions: 6,
    applicants: 8,
    yourRank: 4,
    connect: "chat",
    status: "Closed"
  },
  {
    title: "Company A",
    involvement: "Full-time",
    type: "Internship",
    location: "Chennai",
    positions: 2,
    applicants: 7,
    yourRank: 2,
    connect: null,
    status: "Applied"
  },
];

const CandidateApplications = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  
  // Dialog form states
  const [companyName, setCompanyName] = useState("");
  const [timeCommitment, setTimeCommitment] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [matchedResults, setMatchedResults] = useState<ApplicationProps[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    // Show modal when user starts typing
    if (e.target.value.length > 0) {
      setShowApplicationModal(true);
    }
  };
  
  const handleClear = () => {
    setSearchText("");
    setShowApplicationModal(false);
  };

  const closeModal = () => {
    setShowApplicationModal(false);
    setSearchText("");
    setCompanyName("");
    setTimeCommitment("");
    setSelectedType("");
    setLocationInput("");
    setMatchedResults([]);
  };

  const handleSearch = () => {
    // Search for matching applications based on dialog inputs
    const results = applications.filter(app => {
      const matchesCompany = !companyName || 
        app.title.toLowerCase().includes(companyName.toLowerCase());
      
      const matchesCommitment = !timeCommitment || 
        app.involvement.toLowerCase().includes(timeCommitment.toLowerCase());
      
      const matchesType = !selectedType || 
        app.type.toLowerCase() === selectedType.toLowerCase();
      
      const matchesLocation = !locationInput || 
        app.location.toLowerCase().includes(locationInput.toLowerCase());

      return matchesCompany && matchesCommitment && matchesType && matchesLocation;
    });

    setMatchedResults(results);
  };

  const filterOptions = ["All", "Accepted", "Shortlisted", "Rejected", "Closed", "Applied"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "text-green-600";
      case "Shortlisted":
        return "text-blue-600";
      case "Rejected":
        return "text-red-600";
      case "Closed":
        return "text-gray-600";
      case "Applied":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  // Filter applications based on search text and active filter
  const filteredApplications = applications.filter(app => {
    const matchesSearch = searchText === '' || 
      app.title.toLowerCase().includes(searchText.toLowerCase()) ||
      app.location.toLowerCase().includes(searchText.toLowerCase());

    const matchesFilter = activeFilter === 'All' || app.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

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
        <div className="bg-white p-4 lg:p-8 rounded-xl shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">My Applications</h1>

          {/* Filter buttons */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <form onSubmit={e => e.preventDefault()} className="relative md:flex mb-6">
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Search"
              className="w-full rounded-md bg-gray-100
                        py-2 px-10 text-sm text-black
                        focus:outline-none focus:border focus:border-gray-400"
            />

            {/* Search icon */}
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            {/* Clear icon */}
            {searchText && (
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2
                          text-gray-400 cursor-pointer hover:text-black"
                onClick={handleClear}
              >
                ✕
              </span>
            )}
          </form>

          {/* Table Header - Hidden on mobile */}
          <div className={`mt-12 text-center hidden lg:flex font- rounded-t-lg px-4 py-2 font-semibold text-black 
                          ${lato.className}`}>
            <div className="flex-[2]">Title</div>
            <div className="flex-1">Involvement</div>
            <div className="flex-1">Type</div>
            <div className="flex-1">Location</div>
            <div className="flex-[0.6]">#Position</div>
            <div className="flex-[0.6]">#Applicants</div>
            <div className="flex-[0.6]">Your rank</div>
            <div className="flex-[0.6]">Connect</div>
            <div className="flex-1">Status</div>
          </div>

          {/* Table Rows - Mobile Card Layout / Desktop Table */}
          <div className="text-center flex flex-col border border-gray-200 rounded-lg overflow-hidden text-black">
            {filteredApplications.map((app, idx) => (
              <div
                key={idx}
                className={`${
                  idx % 2 !== 0 ? "bg-white" : "bg-gray-200/50"
                } last:border-0 hover:bg-gray-100 transition-colors`}
              >
                {/* Mobile Card Layout */}
                <div className="lg:hidden p-4 space-y-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{app.title}</h3>
                    <span className={`font-semibold text-sm ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div><span className="font-medium">Involvement:</span> {app.involvement}</div>
                    <div><span className="font-medium">Type:</span> {app.type}</div>
                    <div><span className="font-medium">Location:</span> {app.location}</div>
                    <div><span className="font-medium">Positions:</span> {app.positions}</div>
                    <div><span className="font-medium">Applicants:</span> {app.applicants}</div>
                    <div><span className="font-medium">Your rank:</span> {app.yourRank || "-"}</div>
                  </div>
                  {app.connect && (
                    <button className="text-blue-600 hover:underline text-sm mt-2">
                      {app.connect}
                    </button>
                  )}
                </div>

                {/* Desktop Table Layout */}
                <div className="hidden lg:flex items-center px-4 py-3 md:px-6 md:py-3">
                  <div className="flex-[2] font-medium text-left">{app.title}</div>
                  <div className="flex-1">{app.involvement}</div>
                  <div className="flex-1">{app.type}</div>
                  <div className="flex-1">{app.location}</div>
                  <div className="flex-[0.6]">{app.positions}</div>
                  <div className="flex-[0.6]">{app.applicants}</div>
                  <div className="flex-[0.6]">{app.yourRank || "-"}</div>
                  <div className="flex-[0.6]">
                    {app.connect ? (
                      <button className="text-blue-600 hover:underline">
                        {app.connect}
                      </button>
                    ) : (
                      "-"
                    )}
                  </div>
                  <div className={`flex-1 font-semibold ${getStatusColor(app.status)}`}>
                    {app.status}
                  </div>
                </div>
              </div>
            ))}

            {filteredApplications.length === 0 && (
              <div className="px-4 py-6 text-center text-gray-500">No applications found.</div>
            )}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-gray-300/80 flex items-center justify-center p-4 md:p-8 z-50">
          <div className="bg-gray-200 rounded-3xl p-6 md:p-8 w-full max-w-4xl max-h-[90vh] overflow-auto relative shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl font-bold hover:text-gray-600 transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center pr-8">
              Search Application
            </h2>

            {/* Form Fields */}
            <div className="space-y-4 md:space-y-6">
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                placeholder="Time Commitment (e.g., Full-time, Part-time)"
                value={timeCommitment}
                onChange={(e) => setTimeCommitment(e.target.value)}
                className="w-full md:w-3/4 mx-auto block px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Type</option>
                <option value="internship">Internship</option>
                <option value="job">Job</option>
                <option value="freelance">Freelance</option>
                <option value="contract">Contract</option>
              </select>

              <div className="flex gap-3 md:gap-4 items-center pt-4 md:pt-8">
                <input
                  type="text"
                  placeholder="Location"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                  onClick={handleSearch}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-colors flex items-center justify-center"
                >
                  <span className="text-xl md:text-2xl">→</span>
                </button>
              </div>
            </div>

            {/* Search Results Section */}
            {matchedResults.length > 0 && (
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-400">
                <h3 className="text-lg md:text-xl font-bold mb-4">Matching Applications:</h3>
                <div className="space-y-3 md:space-y-4 max-h-64 overflow-y-auto">
                  {matchedResults.map((app, idx) => (
                    <div
                      key={idx}
                      className="p-3 md:p-4 bg-white rounded-2xl hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-base md:text-lg">{app.title}</h4>
                        <span className={`font-semibold text-sm ${getStatusColor(app.status)}`}>
                          {app.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs md:text-sm text-gray-600">
                        <div><span className="font-medium">Type:</span> {app.type}</div>
                        <div><span className="font-medium">Involvement:</span> {app.involvement}</div>
                        <div><span className="font-medium">Location:</span> {app.location}</div>
                        <div><span className="font-medium">Positions:</span> {app.positions}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Results Message */}
            {matchedResults.length === 0 && (companyName || timeCommitment || selectedType || locationInput) && (
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-400 text-center">
                <p className="text-gray-600 text-base md:text-lg">No matching applications found</p>
                <p className="text-gray-500 text-xs md:text-sm mt-2">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateApplications;
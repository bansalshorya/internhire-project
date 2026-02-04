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
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeMenu, setActiveMenu] = useState("My applications");
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const menuItems = [
    "Home",
    "Profile",
    "Internships",
    "My applications",
    "Subscription",
    "My score card"
  ];

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

      {/* Right content */}
      <div className="flex-1 flex flex-col bg-white text-black overflow-auto relative">
        <div className="p-4 md:p-8 w-full pt-16 md:pt-8">
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
              className="w-full rounded-md bg-zinc-100
                        py-2 px-10 text-sm text-black
                        focus:outline-none focus:border focus:border-zinc-400"
            />

            {/* Search icon */}
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
              🔍
            </span>

            {/* Clear icon */}
            {searchText && (
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2
                          text-zinc-400 cursor-pointer hover:text-black"
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
          <div className="text-center flex flex-col border border-zinc-200 rounded-lg overflow-hidden text-black">
            {filteredApplications.map((app, idx) => (
              <div
                key={idx}
                className={`${
                  idx % 2 !== 0 ? "bg-white" : "bg-zinc-200/50"
                } last:border-0 hover:bg-zinc-100 transition-colors`}
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
    </div>
  );
};

export default CandidateApplications;

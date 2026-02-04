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

type InternshipProps = {
  title: string;
  org: string;
  involvement: string;
  type: string;
  location: string;
  stipend: string;
  units: "k" | "l" | "" | "cr";
  tags: string[];
};

const internships: InternshipProps[] = [
  { 
    title: "Frontend Development Internship", 
    org: "Tech Solutions Inc.", 
    involvement: "Part-time", 
    type: "Internship", 
    location: "Chennai", 
    stipend: "25", 
    units: "k",
    tags: ["part time", "internship", "chennai"]
  },
  { 
    title: "Social Media Marketing Intern", 
    org: "Digital Agency", 
    involvement: "Part-time", 
    type: "Internship", 
    location: "Delhi", 
    stipend: "15", 
    units: "k",
    tags: ["part time", "internship", "social media marketing", "in delhi"]
  },
  { 
    title: "Content Writing Internship", 
    org: "Media House", 
    involvement: "Full-time", 
    type: "Internship", 
    location: "Mumbai", 
    stipend: "20", 
    units: "k",
    tags: ["full time", "internship", "mumbai"]
  },
  { 
    title: "Graphic Design Intern", 
    org: "Creative Studio", 
    involvement: "Part-time", 
    type: "Internship", 
    location: "Bengaluru", 
    stipend: "18", 
    units: "k",
    tags: ["part time", "internship", "bengaluru"]
  },
  { 
    title: "Data Analytics Trainee", 
    org: "Analytics Corp", 
    involvement: "Full-time", 
    type: "Internship", 
    location: "Hyderabad", 
    stipend: "30", 
    units: "k",
    tags: ["full time", "internship", "hyderabad"]
  },
];

const ExploreInternshipsWithFilters = () => {
  const [searchText, setSearchText] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["in delhi", "part time", "internship", "social media marketing"]);
  const [activeMenu, setActiveMenu] = useState("Internships");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);
  const handleClear = () => setSearchText("");

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const menuItems = [
    "Home",
    "Profile",
    "Internships",
    "My applications",
    "Subscription",
    "My score card"
  ];

  // Filter internships based on search text and active filters
  const filteredInternships = internships.filter(intern => {
    const matchesSearch = searchText === '' || 
      intern.title.toLowerCase().includes(searchText.toLowerCase()) ||
      intern.org.toLowerCase().includes(searchText.toLowerCase()) ||
      intern.location.toLowerCase().includes(searchText.toLowerCase());

    const matchesFilters = activeFilters.length === 0 || activeFilters.every(filter =>
      intern.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
    );

    return matchesSearch && matchesFilters;
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
      <div className="flex-1 flex flex-col bg-white text-black overflow-auto">
        <div className="p-4 md:p-8 w-full pt-16 md:pt-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Available internships</h1>

          {/* Search Bar with Filters */}
          <form onSubmit={e => e.preventDefault()} className="relative mb-6">
            <div className="w-full rounded-md bg-zinc-100 py-2 px-3 md:px-10 text-sm text-black focus-within:border focus-within:border-zinc-400 flex items-center flex-wrap gap-2 min-h-[40px]">
              {/* Search icon */}
              <span className="text-zinc-400 text-base">🔍</span>

              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Search"
                className="flex-1 bg-transparent outline-none min-w-[80px] text-sm"
              />

              {/* Active filter tags */}
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="inline-flex items-center gap-1 px-2 md:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                >
                  <span className="max-w-[100px] md:max-w-none truncate">{filter}</span>
                  <button
                    type="button"
                    onClick={() => removeFilter(filter)}
                    className="hover:bg-blue-200 rounded-full p-0.5 transition-colors flex-shrink-0"
                  >
                    ✕
                  </button>
                </span>
              ))}

              {/* Clear icon */}
              {searchText && (
                <span
                  className="text-zinc-400 cursor-pointer hover:text-black ml-auto flex-shrink-0"
                  onClick={handleClear}
                >
                  ✕
                </span>
              )}
            </div>
          </form>

          {/* Table Header - Hidden on mobile */}
          <div className={`mt-8 md:mt-12 text-center hidden lg:flex rounded-t-lg px-4 py-2 font-semibold text-black 
                          ${lato.className}`}>
            <div className="flex-[1.5]">Title</div>
            <div className="flex-1">Org</div>
            <div className="flex-1">Involvement</div>
            <div className="flex-1">Type</div>
            <div className="flex-1">Location</div>
            <div className="flex-1">Stipend (₹ pm)</div>
          </div>

          {/* Table Rows - Mobile Card Layout / Desktop Table */}
          <div className="text-center flex flex-col border border-zinc-200 rounded-lg overflow-hidden text-black">
            {filteredInternships.map((intern, idx) => (
              <div
                key={idx}
                className={`${
                  idx % 2 !== 0 ? "bg-white" : "bg-zinc-200/50"
                } last:border-0 hover:bg-zinc-100 transition-colors cursor-pointer`}
              >
                {/* Mobile Card Layout */}
                <div className="lg:hidden p-4 space-y-2">
                  <h3 className="font-semibold text-lg mb-2">{intern.title}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div><span className="font-medium">Org:</span> {intern.org}</div>
                    <div><span className="font-medium">Type:</span> {intern.type}</div>
                    <div><span className="font-medium">Involvement:</span> {intern.involvement}</div>
                    <div><span className="font-medium">Location:</span> {intern.location}</div>
                    <div className="col-span-2">
                      <span className="font-medium">Stipend:</span> ₹{intern.stipend}{intern.units} pm
                    </div>
                  </div>
                </div>

                {/* Desktop Table Layout */}
                <div className="hidden lg:flex items-center px-4 py-3 md:px-6 md:py-3">
                  <div className="flex-[1.5] font-medium">{intern.title}</div>
                  <div className="flex-1">{intern.org}</div>
                  <div className="flex-1">{intern.involvement}</div>
                  <div className="flex-1">{intern.type}</div>
                  <div className="flex-1">{intern.location}</div>
                  <div className="flex-1">{intern.stipend}{intern.units}</div>
                </div>
              </div>
            ))}

            {filteredInternships.length === 0 && (
              <div className="px-4 py-6 text-center text-gray-500">No internships found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreInternshipsWithFilters;

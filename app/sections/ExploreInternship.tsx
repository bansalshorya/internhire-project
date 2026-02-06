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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["in delhi", "part time", "internship", "social media marketing"]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);
  const handleClear = () => setSearchText("");

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

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
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Available internships</h1>

          {/* Search Bar with Filters */}
          <form onSubmit={e => e.preventDefault()} className="relative mb-6">
            <div className="w-full rounded-md bg-gray-100 py-2 px-3 md:px-10 text-sm text-black focus-within:border focus-within:border-gray-400 flex items-center flex-wrap gap-2 min-h-[40px]">
              {/* Search icon */}
              <span className="text-gray-400 text-base">🔍</span>

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
                  className="text-gray-400 cursor-pointer hover:text-black ml-auto flex-shrink-0"
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
          <div className="text-center flex flex-col border border-gray-200 rounded-lg overflow-hidden text-black">
            {filteredInternships.map((intern, idx) => (
              <div
                key={idx}
                className={`${
                  idx % 2 !== 0 ? "bg-white" : "bg-gray-200/50"
                } last:border-0 hover:bg-gray-100 transition-colors cursor-pointer`}
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
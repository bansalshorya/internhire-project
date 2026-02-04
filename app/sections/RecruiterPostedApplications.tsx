'use client';
import { DM_Sans, Lato } from "next/font/google";
import { useState } from "react";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  style:["italic"],
  weight: ["100", "300", "400", "700"],
});

type DraftProps = {
  title: string;
  org: string;
  involvement: string;
  type: string;
  locations: string[];
  stipend: string;
  units: "k" | "l" | "" | "cr";
  applicants:number;
};

const drafts: DraftProps[] = [
  { title: "Frontend Development Internship", org: "Tech Solutions Inc.", involvement: "Full-time", type: "Internship", locations: ["Bengaluru", "Remote"], stipend: "25", units: "k" ,applicants:10},
  { title: "AI Research Assistant", org: "AI Labs", involvement: "Part-time", type: "Research", locations: ["Hyderabad"], stipend: "0", units: "" ,applicants:13},
  { title: "Marketing & Outreach Intern", org: "GreenEarth NGO", involvement: "Full-time", type: "Internship", locations: ["Mumbai", "Remote"], stipend: "10", units: "k",applicants:68 },
  { title: "Product Management Trainee", org: "InnovateX Pvt. Ltd.", involvement: "Full-time", type: "Trainee", locations: ["Chennai"], stipend: "1.2", units: "l" ,applicants:77},
  { title: "Business Strategy Intern", org: "Global Ventures", involvement: "Part-time", type: "Internship", locations: ["Delhi", "Remote"], stipend: "3", units: "l" ,applicants:8},
];

const RecruiterPostedApplications = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);
  const handleClear = () => setSearchText("");

  // Filter drafts based on search text
  const filteredDrafts = drafts.filter(d =>
    d.title.toLowerCase().includes(searchText.toLowerCase()) ||
    d.org.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={`flex h-screen w-full ${dm_sans.className} bg-zinc-50`}>
      {/* Left menu */}
      <div className="w-56 bg-zinc-800 text-white p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-400 cursor-pointer">Drafts</li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Right content */}
      <div className="flex-1 flex flex-col bg-white text-black overflow-auto">
        <div className="p-8 w-full">
            <h1 className="text-3xl font-bold mb-6">Posted Internships (Live)</h1>

            {/* Search Bar */}
            <form onSubmit={e => e.preventDefault()} className="relative md:flex mb-6">
                <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Search drafts..."
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

            {/* Table Header */}
            <div className={`mt-12 text-center hidden md:flex font- rounded-t-lg px-4 py-2 font-semibold text-black 
                            ${lato.className}`}>
                <div className="flex-[1.5]">Title</div>
                <div className="flex-1">Org</div>
                <div className="flex-1">Involvement</div>
                <div className="flex-1">Type</div>
                <div className="flex-1">Location</div>
                <div className="flex-1">Stipend (₹)</div>
                <div className="flex-[0.6]">Applicants</div>
            </div>

            {/* Table Rows */}
            <div className="text-center flex flex-col border border-zinc-200 rounded-lg overflow-hidden text-black">
                {filteredDrafts.map((draft, idx) => (
                <div
                    key={idx}
                    className={`flex flex-col items-center md:flex-row px-4 py-3 md:px-6 md:py-3 ${
                    idx % 2 !== 0 ? "bg-white" : "bg-zinc-200/50"
                    } last:border-0`}
                >
                    <div className="flex-[1.5] font-medium">{draft.title}</div>
                    <div className="flex-1">{draft.org}</div>
                    <div className="flex-1">{draft.involvement}</div>
                    <div className="flex-1">{draft.type}</div>
                    <div className="flex-1">{draft.locations.join(", ")}</div>
                    <div className="flex-1">{draft.stipend}{draft.units}</div>
                    <div className="flex-[0.6] flex items-center justify-center font-extrabold group cursor-pointer text-black">
                        <button className="flex items-center border-b active:scale-95">
                            <span>{draft.applicants}</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                            →
                            </span>
                        </button>
                    </div>

                    
                </div>
                ))}

                {filteredDrafts.length === 0 && (
                <div className="px-4 py-6 text-center text-gray-500">No drafts found.</div>
                )}
            </div>
            </div>
        </div>
    </div>
    );
};

export default RecruiterPostedApplications;

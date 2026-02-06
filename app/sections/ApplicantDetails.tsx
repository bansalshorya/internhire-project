"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import { Menu, LogOut } from "lucide-react";


export default function ApplicantDetailsPage() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");


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
      <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

  const data = [
    {
      domain: "Work ethics / professional ethics",
      sub: "Personal Integrity & Character Ethics",
      score: 200,
      percentile: 92.493,
      rank: 234,
    },
    {
      domain: "Consulting",
      sub: "Strategy Consulting",
      score: 58,
      percentile: 75.231,
      rank: 158,
    },
    {
      domain: "Business Management",
      sub: "Strategic Management",
      score: 500,
      percentile: 94.295,
      rank: 34,
    },
    {
      domain: "Finance",
      sub: "Corporate Finance",
      score: 288,
      percentile: 88.309,
      rank: 83,
    },
    {
      domain: "Finance",
      sub: "FinTech (Financial Technology)",
      score: 148,
      percentile: 95.284,
      rank: 45,
    },
  ];

  const filtered = data.filter(
    (d) =>
      d.domain.toLowerCase().includes(search.toLowerCase()) ||
      d.sub.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 text-black">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
      >
        <Menu size={24} />
      </button>

      {/* ===== SIDEBAR ===== */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static w-60 min-h-screen bg-gray-100 p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out z-40`}
      >
        <div>
          <h1 className="text-xl font-bold">InternHire</h1>
          <p className="text-sm text-gray-500 mb-6">Recruiter</p>

          <nav className="flex flex-col gap-2 text-sm">
            <Link
              href="/loged/recruiter"
              className={`px-3 py-2 rounded ${pathname === "/loged/recruiter" ? "bg-gray-300" : ""
                }`}
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/loged/recruiter/profile"
              className={`px-3 py-2 rounded ${pathname.startsWith("/loged/recruiter/profile")
                ? "bg-gray-300"
                : ""
                }`}
              onClick={() => setSidebarOpen(false)}
            >
              Profile
            </Link>

            <Link
              href="/loged/recruiter/new-internship"
              className={`px-3 py-2 rounded ${pathname.startsWith("/loged/recruiter/new-internship")
                ? "bg-gray-300"
                : ""
                }`}
              onClick={() => setSidebarOpen(false)}
            >
              + new Internship
            </Link>

            <Link
              href="/loged/recruiter/drafts"
              className={`px-3 py-2 rounded ${pathname.startsWith("/loged/recruiter/drafts")
                ? "bg-gray-300"
                : ""
                }`}
              onClick={() => setSidebarOpen(false)}
            >
              Your Drafts
            </Link>

            <Link
              href="/loged/recruiter/posted-internships"
              className={`px-3 py-2 rounded ${pathname.startsWith("/loged/recruiter/posted-internships")
                ? "bg-gray-300"
                : ""
                }`}
              onClick={() => setSidebarOpen(false)}
            >
              Posted Internships
            </Link>

            <Link
              href="/loged/recruiter/subscription"
              className={`px-3 py-2 rounded ${pathname.startsWith("/loged/recruiter/subscription")
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
          {/* ===== HEADER ===== */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8 gap-3">
            <div className="flex items-center gap-3">
              <button className="text-blue-500 text-sm flex items-center gap-1">
                ← back
              </button>
              <h1 className="text-xl lg:text-2xl font-bold">
                Applicant's details
              </h1>
            </div>
            <p className="text-xs lg:text-sm text-gray-600">
              applied on : 06-jan-2026
            </p>
          </div>

          {/* ===== INFO SECTION ===== */}
          <div className="space-y-3 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-50 p-3 lg:p-4 rounded gap-2">
              <span className="font-medium">Name</span>
              <span>sdkdj</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-3 lg:p-4 gap-2">
              <span className="font-medium">College</span>
              <span>IIT M</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-50 p-3 lg:p-4 rounded gap-2">
              <span className="font-medium">Course, Year</span>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                <span>B.Tech, CSE , 3rd Year</span>
                <span className="text-xs lg:text-sm text-gray-600">
                  Currently a student : yes, Completing in 2026
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-2 p-3 lg:p-4 gap-2">
              <span className="font-medium">X :</span>
              <span className="font-medium">XII :</span>
            </div>
            <div className="bg-gray-50 p-3 lg:p-4 rounded">
              <span className="font-medium">Experience :</span>
            </div>
          </div>

          {/* ===== SCORE ID ===== */}
          <p className="text-blue-400 text-xs lg:text-sm mb-4 italic">
            score id : akdjhrwekfojw
          </p>

          {/* ===== OVERALL SCORE ===== */}
          <div className="bg-gray-50 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8">
            <h2 className="font-semibold text-lg lg:text-xl mb-4 lg:mb-0">
              Overall Score
            </h2>
            <div className="flex flex-col lg:flex-row lg:justify-end gap-6 lg:gap-16 text-center">
              <div>
                <p className="text-xl lg:text-2xl font-bold">91.032</p>
                <p className="text-xs text-gray-500">(score)</p>
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-bold">91.032</p>
                <p className="text-xs text-gray-500">(Percentile)</p>
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-bold">#128</p>
                <p className="text-xs text-gray-500">(rank)</p>
              </div>
            </div>
          </div>

          {/* ===== SEARCH ===== */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="🔍 Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-50 border-0 text-sm"
            />
          </div>

          {/* ===== TABLE SECTION ===== */}
          <h3 className="font-semibold text-base lg:text-lg mb-4">
            Detailed score / ranks in domains and sub-domains
          </h3>

          {/* Desktop Table */}
          <div className="hidden lg:block text-sm overflow-x-auto">
            <div className="grid grid-cols-5 font-medium pb-3 mb-2 border-b italic min-w-[800px]">
              <span>Domain</span>
              <span>Sub-Domain</span>
              <span>Score</span>
              <span>Percentile</span>
              <span>Rank</span>
            </div>

            {filtered.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-5 py-4 border-b hover:bg-gray-50 items-center min-w-[800px]"
              >
                <span className="font-medium">{row.domain}</span>
                <span>{row.sub}</span>
                <span>{row.score}</span>
                <span>{row.percentile}</span>
                <span className="flex items-center gap-2">
                  {row.rank} <span className="text-lg">→</span>
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {filtered.map((row, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="font-medium text-sm">{row.domain}</div>
                <div className="text-xs text-gray-600">{row.sub}</div>
                <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                  <div>
                    <div className="text-gray-500">Score</div>
                    <div className="font-semibold">{row.score}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Percentile</div>
                    <div className="font-semibold">{row.percentile}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Rank</div>
                    <div className="font-semibold">{row.rank}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

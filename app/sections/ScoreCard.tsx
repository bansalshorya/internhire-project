"use client";
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

export default function ScoreCard() {
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState("My score card");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Profile",
    "Internships",
    "My applications",
    "Subscription",
    "My score card"
  ];

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
              className={`hover:text-blue-400 cursor-pointer ${
                activeMenu === item ? 'text-blue-400' : ''
              }`}
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
          {/* ===== HEADER ===== */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 md:mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">
                Industry Readiness - Score Card
              </h1>
              <p className="text-sm text-gray-500">score_id : sdfkj3920248ks</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <button className="bg-zinc-800 hover:bg-zinc-900 text-white px-4 md:px-5 py-2 md:py-3 rounded-full text-sm transition-colors">
                Download →
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-900 text-white px-4 md:px-5 py-2 md:py-3 rounded-full text-sm transition-colors">
                Share score card →
              </button>
            </div>
          </div>

          {/* ===== INFO TABLE ===== */}
          <div className="border border-zinc-200 rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 text-sm">
              <div className="sm:col-span-2 bg-zinc-100 p-3 md:p-4 border-b border-zinc-200 sm:grid sm:grid-cols-2">
                <span className="font-medium">Name</span>
                <span className="text-gray-700">skdj</span>
              </div>
              <div className="sm:col-span-2 p-3 md:p-4 border-b border-zinc-200 sm:grid sm:grid-cols-2">
                <span className="font-medium">College</span>
                <span className="text-gray-700">IIT M</span>
              </div>
              <div className="sm:col-span-2 bg-zinc-100 p-3 md:p-4 border-b border-zinc-200 sm:grid sm:grid-cols-2">
                <span className="font-medium">Course, Year</span>
                <span className="text-gray-700">B.Tech, CSE, 3rd Year</span>
              </div>
              <div className="sm:col-span-2 p-3 md:p-4 sm:grid sm:grid-cols-2">
                <span className="font-medium">Currently a student</span>
                <span className="text-gray-700">yes</span>
              </div>
            </div>
          </div>

          {/* ===== OVERALL SCORE ===== */}
          <div className="bg-zinc-100 border border-zinc-200 rounded-xl p-4 md:p-6 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <h2 className="font-semibold text-lg md:text-xl">Overall Score</h2>
              <div className="flex gap-6 md:gap-10 justify-around md:justify-end">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold">91.032</p>
                  <p className="text-xs text-gray-500">(score)</p>
                </div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold">91.032</p>
                  <p className="text-xs text-gray-500">(Percentile)</p>
                </div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold">#128</p>
                  <p className="text-xs text-gray-500">(rank)</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== SEARCH ===== */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md bg-zinc-100 py-3 px-10 text-sm text-black focus:outline-none focus:border focus:border-zinc-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
              🔍
            </span>
            {search && (
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 cursor-pointer hover:text-black"
                onClick={() => setSearch("")}
              >
                ✕
              </span>
            )}
          </div>

          {/* ===== TABLE ===== */}
          <h3 className="font-semibold mb-4 text-base md:text-lg">
            Detailed score / ranks in domains and sub-domains
          </h3>

          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <div className={`text-center font-semibold rounded-t-lg px-4 py-3 text-black bg-zinc-100 border border-zinc-200 ${lato.className}`}>
              <div className="grid grid-cols-5 gap-4">
                <div className="text-left">Domain</div>
                <div className="text-left">Sub-Domain</div>
                <div>Score</div>
                <div>Percentile</div>
                <div>Rank</div>
              </div>
            </div>

            <div className="border border-t-0 border-zinc-200 rounded-b-lg overflow-hidden">
              {filtered.map((row, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 !== 0 ? "bg-white" : "bg-zinc-200/50"
                  } hover:bg-zinc-100 transition-colors`}
                >
                  <div className="grid grid-cols-5 gap-4 px-4 py-3 text-sm items-center text-center">
                    <div className="text-left">{row.domain}</div>
                    <div className="text-left">{row.sub}</div>
                    <div>{row.score}</div>
                    <div>{row.percentile}</div>
                    <div className="font-semibold">{row.rank} →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {filtered.map((row, i) => (
              <div
                key={i}
                className="border border-zinc-200 rounded-lg p-4 hover:bg-zinc-50 transition-colors"
              >
                <h4 className="font-semibold text-base mb-2">{row.domain}</h4>
                <p className="text-sm text-gray-600 mb-3">{row.sub}</p>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Score</p>
                    <p className="font-semibold">{row.score}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Percentile</p>
                    <p className="font-semibold">{row.percentile}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Rank</p>
                    <p className="font-semibold">{row.rank} →</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No results found for "{search}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

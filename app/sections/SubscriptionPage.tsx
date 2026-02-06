"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import { Menu, LogOut } from "lucide-react";
import { DM_Sans, Lato } from "next/font/google";

const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const lato = Lato({
    subsets: ["latin"],
    style: ["italic"],
    weight: ["100", "300", "400", "700"],
});

interface ReferReport {
    email: string;
    directRegistrations: number;
    directSubscriptions: number;
    indirectRegistrations: number;
    indirectSubscriptions: number;
}

export default function SubscriptionPage() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // 🔹 STATES
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const [referCode, setReferCode] = useState<string>("");
    const [discountApplied, setDiscountApplied] = useState<boolean>(false);
    const [walletAmount] = useState<number>(0);
    const [userReferCode] = useState<string>("SDIFGN2390M");

    // 🔹 REFER REPORT DATA
    const [referReport] = useState<ReferReport>({
        email: "abc...@gmail.com",
        directRegistrations: 45,
        directSubscriptions: 20,
        indirectRegistrations: 800,
        indirectSubscriptions: 600
    });

    const ORIGINAL_PRICE: number = 1999;
    const DISCOUNT_PRICE: number = 500;
    const FINAL_PRICE: number = discountApplied ? DISCOUNT_PRICE : ORIGINAL_PRICE;


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


    // 🔹 APPLY REFER / COUPON CODE
    const handleApplyCode = (): void => {
        const code = referCode.trim().toUpperCase();

        if (code === "TEST500") {
            setDiscountApplied(true);
            alert("Test discount applied!");
            return;
        }

        if (code.length > 3) {
            setDiscountApplied(true);
            alert("Valid code applied!");
        } else {
            alert("Invalid code");
        }
    };

    // 🔹 PURCHASE
    const handlePurchase = (): void => {
        alert(`Payment of ₹${FINAL_PRICE} successful (simulated)`);
        setIsSubscribed(true);
    };

    // 🔹 WITHDRAW
    const handleWithdraw = (): void => {
        if (walletAmount < 250) {
            alert("Minimum ₹250 required to withdraw");
        } else {
            alert("Withdraw request sent");
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
                className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 fixed lg:static w-60 min-h-screen bg-gray-100 p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out z-40`}
            >
                <div>
                    <h1 className="text-xl font-bold">InternHire</h1>
                    <p className="text-sm text-gray-500 mb-6">Candidate</p>

                    <nav className="flex flex-col gap-2 text-sm">
                        <Link
                            href="/loged/candidate"
                            className={`px-3 py-2 rounded ${pathname === "/loged/candidate" ? "bg-gray-300" : ""
                                }`}
                            onClick={() => setSidebarOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            href="/loged/candidate/profile"
                            className={`px-3 py-2 rounded ${pathname.startsWith("/loged/candidate/profile")
                                    ? "bg-gray-300"
                                    : ""
                                }`}
                            onClick={() => setSidebarOpen(false)}
                        >
                            Profile
                        </Link>

                        <Link
                            href="/loged/candidate/internships"
                            className={`px-3 py-2 rounded ${pathname.startsWith("/loged/candidate/internships")
                                    ? "bg-gray-300"
                                    : ""
                                }`}
                            onClick={() => setSidebarOpen(false)}
                        >
                            Internships
                        </Link>

                        <Link
                            href="/loged/candidate/applications"
                            className={`px-3 py-2 rounded ${pathname.startsWith("/loged/candidate/applications")
                                    ? "bg-gray-300"
                                    : ""
                                }`}
                            onClick={() => setSidebarOpen(false)}
                        >
                            My applications
                        </Link>

                        <Link
                            href="/loged/candidate/Subscription"
                            className={`px-3 py-2 rounded ${pathname.startsWith("/loged/candidate/Subscription")
                                    ? "bg-gray-300"
                                    : ""
                                }`}
                            onClick={() => setSidebarOpen(false)}
                        >
                            Subscription
                        </Link>

                        <Link
                            href="/loged/candidate/ScoreCard"
                            className={`px-3 py-2 rounded ${pathname.startsWith("/loged/candidate/ScoreCard")
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
            <div className="flex-1 flex flex-col bg-white text-black overflow-hidden relative">
                <div className="flex-1 overflow-auto">
                    <div className="p-4 md:p-8 w-full pt-16 md:pt-8 min-h-full flex flex-col">
                        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Subscription</h1>

                        {/* ================== IF SUBSCRIBED =========== */}
                        {isSubscribed ? (
                            <div className="space-y-4 md:space-y-6 flex-1">
                                {/* Active Subscription Card */}
                                <div className="bg-zinc-100 border border-zinc-200 p-4 md:p-6 rounded-xl hover:bg-zinc-50 transition-colors">
                                    <h2 className="text-lg md:text-xl font-semibold mb-2">Your subscription is active</h2>
                                    <p className="text-sm md:text-base text-gray-600">
                                        Industry Readiness score • Unlimited assessments • Explore and apply to internships
                                    </p>
                                </div>

                                {/* Refer Code Card */}
                                <div className="bg-zinc-100 border border-zinc-200 p-4 md:p-6 rounded-xl hover:bg-zinc-50 transition-colors">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                        <div>
                                            <h2 className="text-base md:text-lg font-semibold mb-1">
                                                Your Refer code: {userReferCode}
                                            </h2>
                                            <p className="text-sm text-gray-600">
                                                Refer and get incentive • When anyone you referred subscribes to our platform, you get affiliate commission.
                                            </p>
                                        </div>
                                        <button className="bg-zinc-800 hover:bg-zinc-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-full transition-colors text-sm md:text-base whitespace-nowrap">
                                            Share refer link →
                                        </button>
                                    </div>
                                </div>

                                {/* Wallet Card */}
                                <div className="bg-zinc-100 border border-zinc-200 p-4 md:p-6 rounded-xl hover:bg-zinc-50 transition-colors">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                        <div>
                                            <h2 className="text-base md:text-lg font-semibold mb-1">
                                                Your wallet: ₹{walletAmount}
                                            </h2>
                                            <p className="text-sm text-gray-600">
                                                Any affiliate incentive that you get will be added to your wallet within 48 hours.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <button
                                                onClick={handleWithdraw}
                                                className="bg-gray-400 hover:bg-gray-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full transition-colors text-sm md:text-base whitespace-nowrap"
                                            >
                                                Withdraw →
                                            </button>
                                            <span className="text-xs text-gray-500">min 250 required to withdraw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* =========== NOT SUBSCRIBED ================ */
                            <div className="bg-zinc-100 border border-zinc-200 p-4 md:p-8 rounded-xl space-y-6">
                                {/* Refer Code Input Section */}
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                        <input
                                            type="text"
                                            placeholder="Type refer / coupon code"
                                            value={referCode}
                                            onChange={(e) => setReferCode(e.target.value)}
                                            className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                                        />
                                        <button
                                            onClick={handleApplyCode}
                                            className="bg-zinc-800 hover:bg-zinc-900 text-white px-6 py-3 rounded-full transition-colors text-sm md:text-base whitespace-nowrap"
                                        >
                                            Apply →
                                        </button>
                                    </div>
                                    {discountApplied && (
                                        <div className="text-green-600 font-semibold text-sm md:text-base">
                                            ✓ Discount applied!
                                        </div>
                                    )}
                                </div>

                                {/* Subscription Details */}
                                <div className="space-y-4 pt-4 border-t border-zinc-300">
                                    <h2 className="text-xl md:text-2xl font-semibold">Get Subscription</h2>

                                    <button
                                        onClick={handlePurchase}
                                        className="bg-yellow-400 hover:bg-yellow-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-colors"
                                    >
                                        ₹{FINAL_PRICE} for 1 year →
                                    </button>

                                    <div className={`space-y-3 text-sm md:text-base ${lato.className}`}>
                                        <p className="text-gray-700">
                                            ( ₹1999 for 1 year ) OR ( ₹500 for 1 year if you use refer code / coupon code )
                                        </p>

                                        <div className="space-y-2 pt-2">
                                            <p>
                                                <strong className="text-black">What you get:</strong>
                                                <span className="text-gray-700"> Industry Readiness score • Unlimited assessments • Explore and apply to internships</span>
                                            </p>
                                            <p>
                                                <strong className="text-black">When you use a refer code:</strong>
                                                <span className="text-gray-700"> The person who referred you gets commission</span>
                                            </p>
                                            <p>
                                                <strong className="text-black">When you use a coupon code:</strong>
                                                <span className="text-gray-700"> Discount only, no commission</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/*  REFER REPORT  */}
                {isSubscribed && (
                    <div className="border-t border-zinc-200 bg-white p-4 md:p-6">
                        <div className="bg-zinc-100 border border-zinc-200 p-4 md:p-6 rounded-xl hover:bg-zinc-50 transition-colors">
                            <h2 className="text-base md:text-lg font-semibold mb-4">
                                Your refer report{" "}
                                <span className="text-gray-600 font-normal text-sm">
                                    ({referReport.email} | refer code : {userReferCode})
                                </span>
                            </h2>
                            <div className="space-y-2 text-sm md:text-base">
                                <p>
                                    <span className="font-semibold">• Direct</span>
                                    <span className="text-gray-700"> : {referReport.directRegistrations} registrations | {referReport.directSubscriptions} subscriptions</span>
                                </p>
                                <p>
                                    <span className="font-semibold">• Indirect</span>
                                    <span className="text-gray-700"> : {referReport.indirectRegistrations} registrations | {referReport.indirectSubscriptions} subscriptions</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
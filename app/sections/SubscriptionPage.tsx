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

interface ReferReport {
    email: string;
    directRegistrations: number;
    directSubscriptions: number;
    indirectRegistrations: number;
    indirectSubscriptions: number;
}

export default function SubscriptionPage() {
    // 🔹 STATES
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const [referCode, setReferCode] = useState<string>("");
    const [discountApplied, setDiscountApplied] = useState<boolean>(false);
    const [walletAmount] = useState<number>(0);
    const [userReferCode] = useState<string>("SDIFGN2390M");
    const [activeMenu, setActiveMenu] = useState<string>("Subscription");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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

    const menuItems: string[] = [
        "Home",
        "Profile",
        "Internships",
        "My applications",
        "Subscription",
        "My score card"
    ];

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
            <div className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
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
                            className={`hover:text-blue-400 cursor-pointer ${activeMenu === item ? 'text-blue-400' : ''
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
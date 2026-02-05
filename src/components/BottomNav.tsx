import { Link, useLocation } from "react-router-dom";
import { Mail, BookOpen } from "lucide-react";

export default function BottomNav() {
    const location = useLocation();

    const isLetterActive = location.pathname === "/";
    const isScrapbookActive = location.pathname === "/scrapbook";

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-100 backdrop-blur-md border-t border-border h-20 bg-background/95"
        >
            <div className="w-full md:max-w-2xl md:mx-auto h-full">
                <div className="flex justify-center items-center px-6 h-full gap-8 md:gap-16">
                    {/* Letter Tab */}
                    <Link
                        to="/"
                        className={`flex flex-col items-center justify-center p-2 group transition-all border-b-3 ${isLetterActive ? 'border-primary text-primary' : 'border-transparent text-secondary'}`}
                    >
                        <Mail
                            className="mb-1 w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:scale-110"
                            fill={isLetterActive ? "currentColor" : "none"}
                        />
                        <p className="text-sm md:text-base font-bold leading-normal tracking-wide">Letter</p>
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-8 bg-border" />

                    {/* Scrapbook Tab */}
                    <Link
                        to="/scrapbook"
                        className={`flex flex-col items-center justify-center p-2 group transition-all border-b-3 ${isScrapbookActive ? 'border-primary text-primary' : 'border-transparent text-secondary'}`}
                    >
                        <BookOpen
                            className="mb-1 w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:scale-110"
                            fill={isScrapbookActive ? "currentColor" : "none"}
                        />
                        <p className="text-sm md:text-base font-bold leading-normal tracking-wide">Scrapbook</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
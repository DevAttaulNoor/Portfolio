import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router"
import { Routes } from "../../../constants/Routes"
import NavlinkData from "../../../assets/data/NavLinks.json"

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-30 ${isScrolled ? "text-white bg-customPurple-100 shadow-lg" : "bg-transparent"}`}>
            <div className="max-w-innerContainer w-full grid grid-cols-5 p-3 mx-auto sm:px-6 md:px-8 lg:px-10 transition-all duration-300">
                <Link to={Routes.HOME.path} className="flex items-center gap-2">
                    <div className="h-14 w-14">
                        <img
                            src="/images/universal/aunLogo.png"
                            alt="logo of aundev"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <h5 className="text-xl">DevAun</h5>
                </Link>

                <div className="col-span-3 flex items-center justify-center gap-3">
                    {NavlinkData.map((data) => (
                        <NavLink
                            key={data.id}
                            to={Routes[data.path].path}
                            className={({ isActive }) =>
                                `${isActive ? "before:w-full" : "before:w-0"} px-2 navlinkStyle`
                            }
                        >
                            {Routes[data.path].title}
                        </NavLink>
                    ))}
                </div>

                <Link
                    to={
                        "https://drive.google.com/file/d/1g0dmt_okr4hj7qP5hBu-NQL4iBK2kWZb/view?usp=sharing"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-end gap-2"
                >
                    <div className="h-14 w-14">
                        <img
                            src="/images/universal/resume.png"
                            alt="icon of a pen and a note book"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <h5 className="text-xl">Resume</h5>
                </Link>
            </div>
        </header>
    )
}

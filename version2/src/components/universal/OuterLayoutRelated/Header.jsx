import { Link, NavLink } from "react-router"
import { Routes } from "../../../constants/Routes"
import NavlinkData from "../../../assets/data/NavLinks.json"

export const Header = () => {
    return (
        <header className="mx-auto grid w-full max-w-innerContainer grid-cols-5 px-3 py-4 sm:px-6 md:px-8 lg:px-10">
            <Link to={Routes.HOME.path} className="flex items-center gap-2">
                <div className="h-16 w-16">
                    <img
                        src="/images/universal/aunLogo.png"
                        alt="logo of aundev"
                        className="h-full w-full object-contain"
                    />
                </div>

                <p>DevAun</p>
            </Link>

            <div className="col-span-3 flex items-center justify-center gap-6">
                {NavlinkData.map((data) => (
                    <NavLink
                        key={data.id}
                        to={Routes[data.path].path}
                        className={({ isActive }) =>
                            `${isActive ? "before:w-full" : "before:w-0"} navlinkStyle`
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
                <div className="h-16 w-16">
                    <img
                        src="/images/universal/resume.png"
                        alt="icon of a pen and a note book"
                        className="h-full w-full object-contain"
                    />
                </div>

                <p>Resume</p>
            </Link>
        </header>
    )
}

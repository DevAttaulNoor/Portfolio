import { Link, NavLink } from "react-router"
import { Routes } from "../../../constants/Routes"
import { ReactIcons } from "../../../constants/ReactIcons"
import { SkillInfinteCarousel } from "../Carousel/SkillInfinteCarousel"
import SocialLinkData from "../../../assets/data/SocialLinks.json"
import NavlinksData from "../../../assets/data/NavLinks.json"
import PersonalInfoData from "../../../assets/data/PersonalInfo.json"

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="flex flex-col overflow-hidden">
            <SkillInfinteCarousel />

            <footer className="relative mx-auto grid w-full max-w-innerContainer grid-cols-5 gap-20 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 xl:py-8 2xl:py-10">
                <div className="col-span-2 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <Link to={Routes.HOME.path} className="h-16 w-16">
                            <img
                                src="/images/universal/aunLogo.png"
                                alt="logo of aundev"
                                className="h-full w-full object-contain"
                            />
                        </Link>

                        <h5 className="text-2xl font-medium">DevAun</h5>
                    </div>

                    <p className="font-light opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem beatae tenetur quod impedit modi, provident
                        culpa voluptas optio quis velit itaque, deleniti
                        cupiditate neque fuga minus obcaecati cumque voluptatum
                        iure.
                    </p>

                    <div className="flex items-center gap-2">
                        {SocialLinkData.map((data) => (
                            <Link
                                key={data.id}
                                to={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-customPurple-default p-2.5 text-lg text-white"
                            >
                                {ReactIcons[data.icon]}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h5 className="text-2xl font-medium text-customPurple-default">
                        Navigation
                    </h5>

                    {NavlinksData.map((data) => (
                        <NavLink
                            key={data.id}
                            to={Routes[data.path].path}
                            className={({ isActive }) =>
                                `${isActive ? "before:w-full" : "before:w-0"} navlinkStyle font-light opacity-70`
                            }
                        >
                            {Routes[data.path].title}
                        </NavLink>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    <h5 className="text-2xl font-medium text-customPurple-default">
                        Legal
                    </h5>

                    <p className="navlinkStyle font-light opacity-70">
                        {"Faqs"}
                    </p>
                    <p className="navlinkStyle font-light opacity-70">
                        {"Terms & Conditions"}
                    </p>
                    <p className="navlinkStyle font-light opacity-70">
                        {"Privacy Policy"}
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h5 className="text-2xl font-medium text-customPurple-default">
                        Contact
                    </h5>

                    <p className="navlinkStyle font-light opacity-70">
                        {PersonalInfoData[0].number}
                    </p>
                    <p className="navlinkStyle font-light opacity-70">
                        {PersonalInfoData[0].email}
                    </p>
                    <p className="navlinkStyle font-light opacity-70">
                        {PersonalInfoData[0].address}
                    </p>
                </div>

                <div className="absolute -bottom-40 -right-28 -z-10 opacity-10">
                    <img
                        src="/images/universal/aunLogo.png"
                        alt="logo of aundev"
                        className="h-96 w-96"
                    />
                </div>
            </footer>

            <p className="bg-customPurple-default py-1 text-center text-white">
                © Copyright {year} AunDev. All Rights Reserved.
            </p>
        </div>
    )
}

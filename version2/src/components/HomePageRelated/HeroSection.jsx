import { ReactIcons } from "../../constants/ReactIcons"
import { Svgs } from "../../constants/Svgs"
import { PrimaryBtn } from "../universal/Buttons/PrimaryBtn"

export const HeroSection = () => {
    return (
        <div className="mx-auto flex w-full max-w-innerContainer items-center justify-between px-3 sm:px-6 md:px-8 lg:px-10">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3.5">
                    <h5 className="text-xl font-medium">
                        <span className="text-customPurple-default">-</span>
                        {""} Hello
                    </h5>

                    <h1 className="text-4xl font-semibold">
                        My Name is {""}
                        <span className="text-customPurple-default underline underline-offset-4">
                            Atta ul Noor
                        </span>
                    </h1>

                    <h1 className="text-4xl font-semibold">
                        I'am a professional Web App Developer
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <PrimaryBtn
                        btnIcon={ReactIcons.RIGHT_ARROW}
                        btnText={"Portfolio"}
                    />

                    <PrimaryBtn btnIcon={""} btnText={"Hire me"} />
                </div>
            </div>

            <div className="relative">
                <span>{Svgs.HEROSECTION_BLOB({ className: "w-[520px]" })}</span>

                <div className="absolute left-1/2 top-1/2 w-[32rem] -translate-x-1/2 -translate-y-1/2 object-contain">
                    <img
                        src="images/hero.png"
                        alt="hero of aundev"
                        className="h-full w-full"
                    />
                </div>
            </div>
        </div>
    )
}

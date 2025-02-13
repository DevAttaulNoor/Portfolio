import { motion } from "motion/react"
import { MainTitle } from "@components/universal/Titles/MainTitle"
import { DetailSection } from "../components/universal/DetailSectionRelated/DetailSection"
import skillsData from '../assets/data/Skills.json'

const Skills = () => {
    return (
        <>
            <section className="w-full text-center px-3 my-6 sm:px-6 sm:my-10 md:px-8 md:my-12 lg:px-10 lg:my-14 xl:my-16 2xl:my-[72px]">
                <MainTitle
                    titleText={"My Skills"}
                />
            </section>

            <section className="basicSpaceBtwSectionStyle mx-auto w-full max-w-outerContainer bg-customPurple-default">
                <div className="mx-auto flex w-full max-w-innerContainer flex-col gap-8 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 xl:py-7 2xl:py-8">
                    <DetailSection
                        detailSectionContainerStyle="text-white items-center"
                        titleWithDash={{
                            titleDashStyle: "bg-customGreen-default",
                            titleText: "Skills",
                        }}
                        mainTitle={{
                            titleText: "My",
                            titleSpanText: "Skills",
                            titleSpanTextStyle: "text-customGreen-default",
                        }}
                    />

                    <div className="flex flex-wrap justify-center gap-8">
                        {skillsData.map((data) => (
                            <div className="w-60 h-60 flex flex-col items-center justify-center rounded-full text-white bg-customPurple-100">
                                <motion.img
                                    src={data?.logo}
                                    alt={`logo of ${data.text}`}
                                    // animate={{ rotate: 360 }}
                                    // transition={{ duration: 10, repeat: Infinity, ease: "linear", }}
                                    className="w-40 cursor-pointer"
                                />

                                {data.text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
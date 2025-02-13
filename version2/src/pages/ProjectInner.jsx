import { motion } from "motion/react"
import { useLocation } from "react-router"
import { ImageDetailCard } from "@components/universal/Cards/ImageDetailCard"
import { DetailSection } from "@components/universal/DetailSectionRelated/DetailSection"
import { ImageSection } from "@components/universal/DetailSectionRelated/ImageSection"
import { DetailSectionLayout } from "@layouts/DetailSectionLayout"
import { InnerLayout } from "@layouts/InnerLayout"
import { MainTitle } from "@components/universal/Titles/MainTitle"
import projectData from "../assets/data/Projects.json"

const ProjectInner = () => {
    const location = useLocation();
    const selectedprojectData = projectData.find((data) => data.path === location.pathname)
    const otherprojectData = projectData.filter((data) => data.path !== location.pathname)

    return (
        <>
            <section className="w-full text-center px-3 my-6 sm:px-6 sm:my-10 md:px-8 md:my-12 lg:px-10 lg:my-14 xl:my-16 2xl:my-[72px]">
                <MainTitle
                    titleText={`Project - ${selectedprojectData.title}`}
                />
            </section>

            <section className="basicSpaceBtwSectionStyle mx-auto w-full max-w-outerContainer bg-customPurple-default">
                <div className="mx-auto flex w-full max-w-innerContainer flex-col gap-8 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 xl:py-7 2xl:py-8">
                    <DetailSectionLayout
                        additionalStyleClass={"text-white"}
                        leftSection={
                            <DetailSection
                                mainTitle={{
                                    titleSpanText: selectedprojectData.title,
                                    titleSpanTextStyle: 'text-customGreen-default'
                                }}
                                description={{
                                    descriptionText: selectedprojectData.description
                                }}
                            />
                        }

                        rightSection={
                            <ImageSection />
                        }
                    />

                    <DetailSection
                        description={{
                            descriptionStyle: 'text-white',
                            descriptionText:
                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi excepturi nemo ad reprehenderit accusantium quos dolore dolorem explicabo ex at, neque dignissimos voluptatem delectus assumenda atque in eaque aperiam sequi.",
                        }}
                    />

                    <DetailSection
                        description={{
                            descriptionStyle: 'text-white',
                            descriptionText:
                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi excepturi nemo ad reprehenderit accusantium quos dolore dolorem explicabo ex at, neque dignissimos voluptatem delectus assumenda atque in eaque aperiam sequi.",
                        }}
                    />

                    <section className="flex flex-col items-center justify-center gap-8">
                        <MainTitle
                            titleSpanText="Tech Stack"
                            titleSpanTextStyle="text-customGreen-default"
                        />

                        <div className="flex flex-wrap justify-center gap-8">
                            {selectedprojectData.tech.map((data, index) => (
                                <div key={index} className="w-36 h-36 flex flex-col items-center justify-center rounded-full text-white bg-customPurple-100">
                                    <motion.img
                                        src={data?.logo}
                                        alt={`logo of ${data.name}`}
                                        // animate={{ rotate: 360 }}
                                        // transition={{ duration: 10, repeat: Infinity, ease: "linear", }}
                                        className="w-20 cursor-pointer"
                                    />

                                    {data.name}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            <InnerLayout>
                <section className="basicSpaceBtwSectionStyle flex flex-col items-center justify-center gap-8">
                    <DetailSection
                        detailSectionContainerStyle={"items-center"}
                        titleWithDash={{
                            titleDashStyle: "bg-customPurple-100",
                            titleText: "View Projects",
                        }}
                        mainTitle={{
                            titleText: "View",
                            titleSpanText: "Other Projects",
                        }}
                    />

                    <div className="grid grid-cols-3 gap-10">
                        {otherprojectData.slice(0, 6).map((data) => (
                            <ImageDetailCard
                                key={data.id}
                                imageData={data.images[0]}
                                title={data.title}
                                link={data.path}
                            />
                        ))}
                    </div>
                </section>
            </InnerLayout>
        </>
    )
}

export default ProjectInner
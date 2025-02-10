import { MainTitle } from "@components/universal/Titles/MainTitle"
import { ProjectCard } from "@components/HomePageRelated/ProjectCard"
import { ContactSection } from "@components/HomePageRelated/ContactSection"
import { DetailSection } from "@components/universal/DetailSectionRelated/DetailSection"
import { SkillInfinteCarousel } from "@components/universal/Carousel/SkillInfinteCarousel"
import projectData from "../assets/data/Projects.json"

const Projects = () => {
    return (
        <>
            <section className="w-full text-center px-3 my-6 sm:px-6 sm:my-10 md:px-8 md:my-12 lg:px-10 lg:my-14 xl:my-16 2xl:my-[72px]">
                <MainTitle
                    titleText={'Projects'}
                />
            </section>

            <section className="basicSpaceBtwSectionStyle mx-auto w-full max-w-outerContainer bg-customPurple-default">
                <div className="mx-auto flex w-full max-w-innerContainer flex-col gap-8 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 xl:py-7 2xl:py-8">
                    <DetailSection
                        detailSectionContainerStyle="text-white items-center"
                        titleWithDash={{
                            titleDashStyle: "bg-customGreen-default",
                            titleText: "Projects",
                        }}
                        mainTitle={{
                            titleText: "My",
                            titleSpanText: "Latest Projects",
                            titleSpanTextStyle: "text-customGreen-default",
                        }}
                    />

                    {projectData.map((data) => (
                        <ProjectCard
                            key={data.id}
                            image={{
                                src: data.images[0].src,
                                alt: data.images[0].alt,
                            }}
                            detailSection={{
                                buttonData: data.tech,
                                title: data.title,
                                description: data.description,
                            }}
                        />
                    ))}
                </div>
            </section>

            <SkillInfinteCarousel additionalStyleClass="basicSpaceBtwSectionStyle" />

            <ContactSection />
        </>
    )
}

export default Projects
import { ReactIcons } from "@constants/ReactIcons"
import { Carousel } from "@components/universal/Carousel/Carousel"
import { MainTitle } from "@components/universal/Titles/MainTitle"
import { ProjectCard } from "@components/HomePageRelated/ProjectCard"
import { ContactSection } from "@components/HomePageRelated/ContactSection"
import { DetailSection } from "@components/universal/DetailSectionRelated/DetailSection"
import projectData from "../assets/data/Projects.json"
import SkillsData from "../assets/data/Skills.json"

export const Projects = () => {
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

            <section className="basicSpaceBtwSectionStyle w-full bg-customGreen-default py-3">
                <Carousel
                    speed={3500}
                    pagination={false}
                    autoplay={{ delay: 1 }}
                    SwiperContainerClass="infinteCarousel"
                >
                    {SkillsData.map((data) => (
                        <div
                            key={data.id}
                            className="flex items-center justify-around"
                        >
                            <span className="text-3xl">
                                {ReactIcons.STAR}
                            </span>
                            <p className="text-center text-2xl font-medium">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </section>

            <ContactSection />
        </>
    )
}

import { ProjectCard } from "./ProjectCard"
import { PrimaryBtn } from "../universal/Buttons/PrimaryBtn"
import { DetailSection } from "../universal/DetailSectionRelated/DetailSection"
import projectData from "../../assets/data/Projects.json"

export const ProjectSection = () => {
    return (
        <section className="basicSpaceBtwSectionStyle mx-auto w-full max-w-outerContainer bg-customPurple-default">
            <div className="mx-auto flex w-full max-w-innerContainer flex-col gap-8 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 xl:py-7 2xl:py-8">
                <div className="flex items-center justify-between">
                    <DetailSection
                        detailSectionContainerStyle="text-white"
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

                    <PrimaryBtn btnText={"View All"} />
                </div>

                {projectData.slice(0, 3).map((data) => (
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
    )
}

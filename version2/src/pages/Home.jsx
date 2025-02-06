import { HeroSection } from "../components/HomePageRelated/HeroSection"
import { Carousel } from "../components/universal/Carousel/Carousel"
import { ReactIcons } from "../constants/ReactIcons"
import { InnerLayout } from "../layouts/InnerLayout"
import { EducationSection } from "../components/HomePageRelated/EducationSection"
import { WorkSection } from "../components/HomePageRelated/WorkSection"
import { ProjectSection } from "../components/HomePageRelated/ProjectSection"
import { DetailSectionLayout } from "../layouts/DetailSectionLayout"
import { ImageSection } from "../components/universal/DetailSectionRelated/ImageSection"
import { DetailSection } from "../components/universal/DetailSectionRelated/DetailSection"
import { ContactSection } from "../components/HomePageRelated/ContactSection"
import SkillsData from "../assets/data/Skills.json"

export const Home = () => {
    return (
        <>
            <HeroSection />

            <section className="basicSpaceBtwSectionStyle w-full bg-customPurple-100 py-3">
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
                            <span className="text-3xl text-white">
                                {ReactIcons.STAR}
                            </span>
                            <p className="text-center text-2xl font-medium text-white">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </section>

            <InnerLayout>
                {/* About Me Section */}
                <DetailSectionLayout
                    additionalStyleClass={"basicSpaceBtwSectionStyle"}
                    leftSection={<ImageSection />}
                    rightSection={
                        <DetailSection
                            titleWithDash={{
                                titleDashStyle: "bg-customPurple-100",
                                titleText: "About me",
                            }}
                            mainTitle={{
                                titleText: "Who is",
                                titleSpanText: "Atta ul Noor?",
                            }}
                            description={{
                                descriptionText:
                                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi excepturi nemo ad reprehenderit accusantium quos dolore dolorem explicabo ex at, neque dignissimos voluptatem delectus assumenda atque in eaque aperiam sequi.",
                            }}
                            btns={{
                                btnStyleClass: "w-fit",
                                btnText: "View my CV",
                            }}
                        />
                    }
                />

                <EducationSection />
            </InnerLayout>

            <ProjectSection />

            <InnerLayout>
                <WorkSection />
            </InnerLayout>

            {/* Contact Us Section */}
            <ContactSection />
        </>
    )
}

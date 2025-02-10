import { HeroSection } from "../components/HomePageRelated/HeroSection"
import { InnerLayout } from "../layouts/InnerLayout"
import { EducationSection } from "../components/HomePageRelated/EducationSection"
import { WorkSection } from "../components/HomePageRelated/WorkSection"
import { ProjectSection } from "../components/HomePageRelated/ProjectSection"
import { DetailSectionLayout } from "../layouts/DetailSectionLayout"
import { ImageSection } from "../components/universal/DetailSectionRelated/ImageSection"
import { DetailSection } from "../components/universal/DetailSectionRelated/DetailSection"
import { ContactSection } from "../components/HomePageRelated/ContactSection"
import { SkillInfinteCarousel } from "../components/universal/Carousel/SkillInfinteCarousel"

const Home = () => {
    return (
        <>
            <HeroSection />

            <SkillInfinteCarousel additionalStyleClass="basicSpaceBtwSectionStyle" />

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

export default Home
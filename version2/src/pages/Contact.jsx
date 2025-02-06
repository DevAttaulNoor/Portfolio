import { ContactSection } from "@components/HomePageRelated/ContactSection"
import { MainTitle } from "@components/universal/Titles/MainTitle"

export const Contact = () => {
    return (
        <>
            <section className="w-full text-center px-3 my-6 sm:px-6 sm:my-10 md:px-8 md:my-12 lg:px-10 lg:my-14 xl:my-16 2xl:my-[72px]">
                <MainTitle
                    titleText={"Let's Connect"}
                />
            </section>

            {/* Contact Us Section */}
            <ContactSection />
        </>
    )
}
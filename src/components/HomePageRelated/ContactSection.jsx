import { ContactForm } from "../universal/Forms/ContactForm"
import { DetailSection } from "../universal/DetailSectionRelated/DetailSection"
import { DetailSectionLayout } from "../../layouts/DetailSectionLayout"
import { ReactIcons } from "../../constants/ReactIcons"
import personalInfoData from "../../assets/data/PersonalInfo.json"

export const ContactSection = () => {
    return (
        <section className="basicSpaceBtwSectionStyle mx-auto w-full max-w-outerContainer bg-customPurple-default">
            <div className="mx-auto flex w-full max-w-innerContainer flex-col gap-8 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 xl:py-7 2xl:py-8">
                <DetailSectionLayout
                    leftSection={
                        <DetailSection
                            detailSectionContainerStyle="text-white"
                            titleWithDash={{
                                titleDashStyle: "bg-customGreen-default",
                                titleText: "Contact Us",
                            }}
                            mainTitle={{
                                titleText: "Let's",
                                titleSpanText: "Connect",
                                titleSpanTextStyle: "text-customGreen-default",
                            }}
                            description={{
                                descriptionText:
                                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi excepturi nemo ad reprehenderit accusantium quos dolore dolorem explicabo ex at.",
                            }}
                            children={
                                <>
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full bg-white p-3 text-customPurple-default">
                                            {ReactIcons.PHONE}
                                        </span>
                                        <p>{personalInfoData[0].number}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full bg-white p-3 text-customPurple-default">
                                            {ReactIcons.EMAIL}
                                        </span>
                                        <p>{personalInfoData[0].email}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full bg-white p-3 text-customPurple-default">
                                            {ReactIcons.LOCATION}
                                        </span>
                                        <p>{personalInfoData[0].address}</p>
                                    </div>
                                </>
                            }
                        />
                    }
                    rightSection={<ContactForm />}
                />
            </div>
        </section>
    )
}

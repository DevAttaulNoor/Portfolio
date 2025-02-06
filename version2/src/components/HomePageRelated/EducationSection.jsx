import { DetailCard } from "../universal/Cards/DetailCard"
import { DetailSection } from "../universal/DetailSectionRelated/DetailSection"
import educationData from "../../assets/data/Education.json"

export const EducationSection = () => {
    return (
        <section className="basicSpaceBtwSectionStyle flex flex-col items-center justify-center gap-8">
            <DetailSection
                detailSectionContainerStyle={"items-center"}
                titleWithDash={{
                    titleDashStyle: "bg-customPurple-100",
                    titleText: "Education",
                }}
                mainTitle={{
                    titleText: "My",
                    titleSpanText: "Education",
                }}
                description={{
                    descriptionStyle: "w-2/3 text-center",
                    descriptionText:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi excepturi nemo ad reprehenderit accusantium quos dolore dolorem explicabo ex at.",
                }}
            />

            <div className="flex w-[60%] flex-col gap-3">
                {educationData.map((data) => (
                    <div
                        key={data.id}
                        className="grid grid-cols-[1fr_1fr_4fr] items-center gap-5"
                    >
                        <h1 className="mx-auto text-3xl font-semibold">
                            {data.level}
                        </h1>

                        <div className="mx-auto h-[2px] w-full rounded-full bg-customPurple-default"></div>

                        <DetailCard
                            detailCardData={{
                                year: {
                                    from: data.year.from,
                                    to: data.year.to,
                                },
                                name: data.name,
                                description: data.description,
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

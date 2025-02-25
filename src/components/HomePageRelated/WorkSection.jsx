import React from "react"
import { DetailCard } from "../universal/Cards/DetailCard"
import { DetailSection } from "../universal/DetailSectionRelated/DetailSection"
import workData from "../../assets/data/Work.json"

export const WorkSection = () => {
    return (
        <section className="basicSpaceBtwSectionStyle flex flex-col items-center justify-center gap-8">
            <DetailSection
                detailSectionContainerStyle={"items-center"}
                titleWithDash={{
                    titleDashStyle: "bg-customPurple-100",
                    titleText: "Work",
                }}
                mainTitle={{
                    titleText: "My",
                    titleSpanText: "Work",
                }}
                description={{
                    descriptionStyle: "w-2/3 text-center",
                    descriptionText:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi excepturi nemo ad reprehenderit accusantium quos dolore dolorem explicabo ex at.",
                }}
            />

            <div className="flex w-[60%] flex-col gap-3">
                {workData.map((data) => (
                    <div
                        key={data.id}
                        className="grid grid-cols-[1fr_1fr_4fr] items-center gap-5"
                    >
                        {data.designation.map((elem, index) => (
                            <React.Fragment key={index}>
                                <h1 className="mx-auto text-3xl font-semibold">
                                    {data.company}
                                </h1>

                                <div className="mx-auto h-[2px] w-full rounded-full bg-customPurple-default"></div>

                                <DetailCard
                                    detailCardData={{
                                        year: {
                                            from: elem.time.from,
                                            to: elem.time.to,
                                        },
                                        name: elem.title,
                                        description: elem.description,
                                    }}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

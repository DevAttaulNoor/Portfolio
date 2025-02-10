import { Carousel } from "./Carousel"
import { ReactIcons } from "../../../constants/ReactIcons"
import SkillsData from "../../../assets/data/Skills.json"

export const SkillInfinteCarousel = ({ additionalStyleClass = '' }) => {
    return (
        <section className={`${additionalStyleClass} w-full bg-customGreen-default py-4`}>
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
                        <span className="text-4xl">
                            {ReactIcons.STAR}
                        </span>
                        <p className="text-center text-3xl font-medium">
                            {data.text}
                        </p>
                    </div>
                ))}
            </Carousel>
        </section >
    )
}

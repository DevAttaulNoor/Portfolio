import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/effect-coverflow"
import "../../../assets/style/customCarousel.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode, Pagination } from "swiper/modules"

export const Carousel = ({
    children,
    SwiperContainerClass = "",
    spaceBetween = 0,
    slidesPerView = 7,
    loop = true,
    speed = 1000,
    freeMode = false,
    autoplay = { delay: 2000, reverseDirection: false },
    pagination = { clickable: true },
    direction = "horizontal",
    breakpoints = {
        0: { slidesPerView: 1 },
        451: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1025: { slidesPerView: 4 },
        1325: { slidesPerView: 5 },
        1580: { slidesPerView: 6 },
    },
}) => {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            loop={loop}
            speed={speed}
            direction={direction}
            freeMode={freeMode}
            autoplay={autoplay}
            pagination={pagination}
            breakpoints={breakpoints}
            modules={[FreeMode, Autoplay, Pagination]}
            className={`${SwiperContainerClass}`}
        >
            {children.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
    )
}

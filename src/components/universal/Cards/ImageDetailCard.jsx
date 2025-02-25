import { Link } from "react-router"

export const ImageDetailCard = ({ imageData, title, link }) => {
    return (
        <Link
            to={link}
            className="flex flex-col gap-3"
        >
            <img
                src={imageData.src}
                alt={imageData.alt}
                className="rounded-3xl"
            />

            <h1 className="text-2xl font-semibold">{title}</h1>
        </Link>
    )
}

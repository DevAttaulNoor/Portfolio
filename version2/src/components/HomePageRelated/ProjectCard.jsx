import { Link } from "react-router"

export const ProjectCard = ({ detailSection, image }) => {
    return (
        <div className="flex w-full items-center justify-between gap-10 rounded-[3rem] bg-customPurple-100 p-6 text-white odd:flex-row-reverse">
            <div className="w-1/2 rounded-[2rem] object-contain">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-[2rem]"
                />
            </div>

            <div className="flex w-1/2 flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                    {detailSection.buttonData.map((elem, index) => (
                        <button
                            key={index}
                            className="rounded-full bg-customGreen-default px-4 py-2 font-medium text-black"
                        >
                            {elem.name}
                        </button>
                    ))}
                </div>

                <h1 className="text-3xl font-medium">{detailSection.title}</h1>

                <p className="text-lg opacity-70">
                    {detailSection.description}
                </p>

                <Link to={"/"}>View details</Link>
            </div>
        </div>
    )
}

export const ImageSection = ({ image }) => {
    return (
        <div className="h-full w-full rounded-xl">
            {image ? (
                <img src={image.src} alt={image.alt} className="" />
            ) : (
                <div className="h-full w-full rounded-xl bg-slate-400"></div>
            )}
        </div>
    )
}

export const DetailCard = ({ detailCardData }) => {
    return (
        <div className="flex w-full flex-col gap-3 rounded-xl bg-customPurple-100 p-5 text-white shadow-xl">
            <h5 className="text-xl font-semibold text-customGreen-default">
                {detailCardData.year.from} - {detailCardData.year.to}
            </h5>

            <h2 className="text-2xl font-semibold">{detailCardData.name}</h2>

            <p className="text-lg font-medium opacity-70">
                {detailCardData.description}
            </p>
        </div>
    )
}

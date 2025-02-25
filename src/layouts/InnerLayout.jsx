export const InnerLayout = ({ children }) => {
    return (
        <div className="relative z-20 w-full">
            <div className="innerLayoutStyle">{children}</div>
        </div>
    )
}

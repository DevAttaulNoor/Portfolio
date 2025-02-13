import { InnerLayout } from "../../layouts/InnerLayout"

export const Error = ({ errorData }) => {
    return (
        <InnerLayout>
            Error {errorData?.error?.message}
        </InnerLayout>
    )
}

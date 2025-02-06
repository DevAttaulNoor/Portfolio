import { InnerLayout } from "../../layouts/InnerLayout"

export const Error = ({ errorData }) => {
    return (
        <InnerLayout>
            <div>Error {errorData.error.message}</div>
        </InnerLayout>
    )
}

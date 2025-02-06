import { Outlet } from "react-router"
import { Header } from "../components/universal/OuterLayoutRelated/Header"
import { Footer } from "../components/universal/OuterLayoutRelated/Footer"

export const OuterLayout = ({ children }) => {
    return (
        <main className="outerLayoutStyle">
            <div>
                <Header />
                {children ? children : <Outlet />}
            </div>
            <Footer />
        </main>
    )
}

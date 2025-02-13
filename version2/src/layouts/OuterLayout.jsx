import { useEffect } from "react";
import { Outlet, useLocation } from "react-router"
import { Header } from "../components/universal/OuterLayoutRelated/Header"
import { Footer } from "../components/universal/OuterLayoutRelated/Footer"

export const OuterLayout = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);

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

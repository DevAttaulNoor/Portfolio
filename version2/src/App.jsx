import { Suspense } from "react"
import {
    createBrowserRouter,
    RouterProvider,
    useRouteError,
} from "react-router-dom"
import { Routes } from "./constants/Routes"
import { OuterLayout } from "./layouts/OuterLayout"

import { Error } from "./pages/general/Error"
import { Loading } from "./pages/general/Loading"
import { Home } from "./pages/Home"
import { Skills } from "./pages/Skills"
import { Experience } from "./pages/Experience"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"

const ErrorBoundary = () => {
    const errorData = useRouteError()
    console.log(errorData)
    return (
        <OuterLayout>
            <Error errorData={errorData} />
        </OuterLayout>
    )
}

const routes = createBrowserRouter([
    {
        element: <OuterLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            { path: Routes.HOME.path, element: <Home /> },
            { path: Routes.SKILLS.path, element: <Skills /> },
            { path: Routes.EXPERIENCE.path, element: <Experience /> },
            { path: Routes.PROJECTS.path, element: <Projects /> },
            { path: Routes.CONTACT.path, element: <Contact /> },
        ],
    },
])

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={routes} />
        </Suspense>
    )
}

export default App

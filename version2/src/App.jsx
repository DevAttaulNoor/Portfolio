import {
    createBrowserRouter,
    RouterProvider,
    useRouteError,
} from "react-router-dom"
import { lazy, Suspense } from "react"
import { Routes } from "./constants/Routes"
import { Error } from "./pages/general/Error"
import { Loading } from "./pages/general/Loading"
import { OuterLayout } from "./layouts/OuterLayout"

const Home = lazy(() => import("./pages/Home"))
const Skills = lazy(() => import("./pages/Skills"))
const Experience = lazy(() => import("./pages/Experience"))
const Projects = lazy(() => import("./pages/Projects"))
const ProjectInner = lazy(() => import("./pages/ProjectInner"))
const Contact = lazy(() => import("./pages/Contact"))

const ErrorBoundary = () => {
    const errorData = useRouteError()
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
            { path: Routes.PROJECT_INNER.path, element: <ProjectInner /> },
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
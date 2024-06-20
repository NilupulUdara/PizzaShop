import { Route, Routes } from "react-router-dom"
import { Home, Menu, About, Contact } from "../pages"

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

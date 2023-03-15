import { Route, Routes } from 'react-router-dom'

import PageNotFound from "../Pages/PageNotFound"
import MainView from "../Pages/MainView"






function AllRoutes() {

    return (
        <Routes>
            <Route path='/' element={<MainView />} />


            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}



export default AllRoutes
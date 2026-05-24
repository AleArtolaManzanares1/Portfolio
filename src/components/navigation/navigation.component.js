import { Routes, Route } from 'react-router-dom';
import Home from '../../features/home-feature/home.feature';
import NavBar from '../nav-bar/nav-bar.component';

const Navigation = () => {
    return(
    <Routes>
        <Route element={<NavBar/>}>
            <Route path='/' element={<Home/>} />
        </Route>
    </Routes>
    )
}

export default Navigation
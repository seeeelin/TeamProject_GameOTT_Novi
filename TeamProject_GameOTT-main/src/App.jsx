import './styled/reset.css';
import './styled/common.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/index';
import SubPage from './pages/subPage';

const App = () => {
    return (
        <BrowserRouter>
            <div id="wrap">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/community" element={<SubPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// CSS 경로는 실제 파일이 있는지 꼭 확인하세요!
import './styled/reset.css';
import './styled/common.css';

// 중요: 폴더 이름이 'mainPage'이므로 경로도 똑같이 대소문자를 맞춰야 합니다.
import MainPage from './pages/mainPage/index';
import SubPage from './pages/subPage/index';

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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: './', // 👈 이 한 줄이 3일간의 하얀 화면을 해결해줍니다!
});

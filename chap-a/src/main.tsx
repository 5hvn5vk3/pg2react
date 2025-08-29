// React18 以降は react-dom の render が廃止されたので、react-dom/client の createRoot を使う必要がある
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
const root = createRoot(rootElement);
root.render(<App />);
}

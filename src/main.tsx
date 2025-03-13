import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from '@utils/router';


createRoot(document.getElementById("root")!).render(
    <Router />
);

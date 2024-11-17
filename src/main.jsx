import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from "./App.jsx";
import StudyAbroad from "./components/study-abroad/StudyAbroad.jsx";
import Services from "./components/services/Services.jsx";
import SocialEnterprise from './components/social-enterprise/SocialEnterprise.jsx';
import AboutUs from "./components/about/About-Us.jsx";
import Events from "./components/events/Events.jsx";

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '//study-abroad', element: <StudyAbroad /> },
    { path: '//services', element: <Services /> },
    { path: '//social-enterprise', element: <SocialEnterprise /> },
    { path: '//events', element: <Events /> },
    { path: '//about-us', element: <AboutUs /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)

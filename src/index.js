import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home/Home';
import Contact from './Components/contact';
import No_page from './Components/pages/No_page';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/dashboard';
import Profile from './Components/pages/Profile';
import Services from './Components/pages/services';
import Equipements from './Components/pages/equipements';
import Patients_statis from './Components/pages/patients_statis';
import Chambres from './Components/pages/Chambres';
import Analys_His from './Components/pages/analys_His';
import Patients from './Components/pages/patients';
const router = createBrowserRouter ([
  {path:"/",
    element:<App/>
  },
  {path:"/About",
    element:<About />
  },
  {path:"Home",
    element:<Home />
  },
  {path:"/Login",
    element:<Login />
  },
  {path:"/Contact",
    element:<Contact />
  },
  {path:"/dashboard",
    element:<Dashboard />
  },
  {path:"/profile",
    element:<Profile />
  },
  {path:"/services",
    element:<Services />
  },
  {path:"/equipements",
    element:<Equipements />
  },
  {path:"/patients_statis",
    element:<Patients_statis />
  },
  {path:"/chambres",
    element:<Chambres />
  },
  {path:"/patients",
    element:<Patients />
  },
  {path:"/analys_His",
    element:<Analys_His />
  },
  {path:"*",
    element:<No_page />
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

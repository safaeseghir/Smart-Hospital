import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faBedPulse } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Assets/logo2.png";
import './Navbar_doc.css';
const Navbar_doc = () => {
  return (
    <div className='sideB'>
{/* <!-- Sidebar --> */}
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <br></br>
    {/* <!-- Sidebar - Brand --> */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">

        <div className="nav-logo-container">
            <img width="400" height="200" src={Logo} alt="" />
        </div>

    </a>


    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0" />

    {/* <!-- Nav Item - Dashboard --> */}
    <li className="nav-item active">
        <a className="nav-link" href="index.html">
            <FontAwesomeIcon icon={faGaugeHigh} />
            <span>Dashboard</span></a>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading --> */}
    <div className="sidebar-heading">
        Interface
    </div>

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <FontAwesomeIcon icon={faBedPulse} />
            <span>Patients</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">patients</h6>
                <a className="collapse-item" href="/patients">Patients</a>
                <a className="collapse-item" href="/patients_statis">Statistiques</a>
            </div>
        </div>
    </li>

    {/* <!-- Nav Item - Utilities Collapse Menu --> */}
    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <FontAwesomeIcon icon={faHospital} />

            <span>  Chambres</span>
        </a>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Chambres</h6>
                <a className="collapse-item" href="/chambres">Chambres</a>
                <a className="collapse-item" href="/analys_His">Historique et Analyse</a>
            </div>
        </div>
    </li>
    {/* <!-- Nav Item - Charts --> */}
    <li className="nav-item">
        <a className="nav-link" href="/equipements">
        <FontAwesomeIcon icon={faScrewdriverWrench} />
            <span>Equipements</span></a>
    </li>

    {/*  <!-- Nav Item - Tables --> */}
    <li className="nav-item">
        <a className="nav-link" href="/services">
        <FontAwesomeIcon icon={faHandHoldingMedical} />
            <span>Services</span></a>
    </li>

</ul>
{/* <!-- End of Sidebar --> */}
</div>
  )
}

export default Navbar_doc
import React from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBedPulse } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Navbar_doc from '../Navbar_doctor/Navbar_doc';
import Nav_top from '../Nav_top/Nav_top';

function dashboard() {
    return (
        
        <div>
     
            <body id="page-top">
                {/* Page Wrapper  */}
                <div id="wrapper">

                <Navbar_doc/>

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                           <Nav_top/>

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/* <!-- Page Heading --> */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

                                </div>

                                {/* <!-- Content Row --> */}
                                <div className="row">

                                    {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Patients Hospitalisés (mois)</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">120</div>
                                                    </div>
                                                    <div className="col-auto">
                                                    <FontAwesomeIcon icon={faBedPulse} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-success shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Patients Hospitalisés (Années)</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">1400</div>
                                                    </div>
                                                    <div className="col-auto">
                                                    <FontAwesomeIcon icon={faBedPulse} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-info shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Dossiers Médicaux
                                                        </div>
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-auto">
                                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50</div>
                                                            </div>
                                                          
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                    <FontAwesomeIcon icon={faNotesMedical} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Pending Requests Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-warning shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Opérations effectuées (mois)</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                                    </div>
                                                    <div className="col-auto">
                                                    <FontAwesomeIcon icon={faSyringe} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Content Row --> */}

                                <div className="row">

                                    {/* <!-- Area Chart --> */}
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                            {/* <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                                <div className="dropdown no-arrow">
                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                        aria-labelledby="dropdownMenuLink">
                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-area">
                                                    <canvas id="myAreaChart"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Pie Chart --> */}
                                    <div className="col-xl-4 col-lg-5">
                                        <div className="card shadow mb-4">
                                            {/* <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                                <div className="dropdown no-arrow">
                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                        aria-labelledby="dropdownMenuLink">
                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-pie pt-4 pb-2">
                                                    <canvas id="myPieChart"></canvas>
                                                </div>
                                                <div className="mt-4 text-center small">
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-primary"></i> Direct
                                                    </span>
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-success"></i> Social
                                                    </span>
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-info"></i> Referral
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Content Row --> */}
                                <div className="row">

                                    {/* <!-- Content Column --> */}
                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Project Card Example --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                            </div>
                                            <div className="card-body">
                                                <h4 className="small font-weight-bold">Server Migration <span
                                                    className="float-right">20%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-danger a2" role="progressbar"></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Sales Tracking <span
                                                    className="float-right">40%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-warning a3" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Customer Database <span
                                                    className="float-right">60%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar a7" role="progressbar"></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Payout Details <span
                                                    className="float-right">80%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-info a4" role="progressbar"></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Account Setup <span
                                                    className="float-right">Complete!</span></h4>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success a5" role="progressbar" ></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Color System --> */}
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-primary text-white shadow">
                                                    <div className="card-body">
                                                        Primary
                                                        <div className="text-white-50 small">#4e73df</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-success text-white shadow">
                                                    <div className="card-body">
                                                        Success
                                                        <div className="text-white-50 small">#1cc88a</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Info
                                                        <div className="text-white-50 small">#36b9cc</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-warning text-white shadow">
                                                    <div className="card-body">
                                                        Warning
                                                        <div className="text-white-50 small">#f6c23e</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-danger text-white shadow">
                                                    <div className="card-body">
                                                        Danger
                                                        <div className="text-white-50 small">#e74a3b</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-secondary text-white shadow">
                                                    <div className="card-body">
                                                        Secondary
                                                        <div className="text-white-50 small">#858796</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-light text-black shadow">
                                                    <div className="card-body">
                                                        Light
                                                        <div className="text-black-50 small">#f8f9fc</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-dark text-white shadow">
                                                    <div className="card-body">
                                                        Dark
                                                        <div className="text-white-50 small">#5a5c69</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Illustrations --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 a6"
                                                        src="img/undraw_posting_photo.svg" alt="..." />
                                                </div>
                                                <p>Add some quality, svg illustrations to your project courtesy of <a
                                                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                                    constantly updated collection of beautiful svg images that you can use
                                                    completely free and without attribution!</p>
                                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                                    unDraw &rarr;</a>
                                            </div>
                                        </div>

                                        {/* <!-- Approach --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                            </div>
                                            <div className="card-body">
                                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                                    CSS bloat and poor page performance. Custom CSS classes are used to create
                                                    custom components and custom utility classes.</p>
                                                <p className="mb-0">Before working with this theme, you should become familiar with the
                                                    Bootstrap framework, especially the utility classes.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* <!-- /.container-fluid --> */}

                        </div>
                        {/* <!-- End of Main Content --> */}

                        {/* <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>smartHospital.com</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                <FontAwesomeIcon icon={faAngleUp} />
                </a>

                {/* <!-- Logout Modal--> */}
                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Prêt à partir?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Sélectionnez « Se déconnecter » ci-dessous si vous êtes prêt à mettre fin à votre session en cours.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Annuler</button>
                                <a className="btn btn-primary" href="/">Se deconnecter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default dashboard;
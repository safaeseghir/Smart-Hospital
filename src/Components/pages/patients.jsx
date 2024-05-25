import React from 'react'
import Navbar_doc from '../Navbar_doctor/Navbar_doc';
import Nav_top from '../Nav_top/Nav_top';
const patients = () => {
  return (
    <div>
    <body id="page-top">
      {/* Page Wrapper  */}
      <div id="wrapper">

        <Navbar_doc />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">

            <Nav_top />
          </div> 
          </div>
          </div>
          </body>
        </div>
  )
}

export default patients
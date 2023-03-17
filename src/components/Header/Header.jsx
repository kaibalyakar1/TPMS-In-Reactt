import React, {useRef, useState} from "react";
import { Container, Row, Col, ModalBody } from "reactstrap";
import { Link,NavLink } from "react-router-dom";
import "../../styles/header.css";
import { Modal,ModalHeader } from "reactstrap";
import cutmlogo from "../../assets/all-images/cutmlg.png"

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const navLinks = [
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'/about',
    display: 'About'
  },
  {
    path:'/route',
    display: 'Contacts'
  },
  
]

const columns = [
  { id: 'SNo', label: 'SNo', minWidth: 1 },
  { id: 'route', label: 'Route No', minWidth: 10 },
  
  {
    id: 'station',
    label: 'Station',
    minWidth: 10,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'bus',
    label: 'Bus No',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },

 
  { id: 'fees', label: 'Fees', minWidth: 10 },

  { id: 'driver', label: 'Driver Name', minWidth: 10 },
  { id: 'drivermo', label: 'MOB NO', minWidth: 10 },
];


function createData(SNo,route ,  station, bus,fees,driver,drivermo) {
  // const density = population / size;
  return {SNo, route, station, bus,fees,driver,drivermo};
}


const rows = [
  createData(1,'R-01', 'LINKROAD(CTC)-CUTM', 'OD021234', 70000,'Kaibalya',7978797141),
  createData(2,'R-02', 'BADAMBADI(CTC)-CUTM', 'OD021234',68000,'Amit',123456789),
  createData(3,'R-03', 'KHURDHA-CUTM', 'OD021234', 40000,'Vicky',111123456),
  createData(4,'R-04', 'JAYDEV VIHAR(BBSR)-CUTM', 'OD021234', 50000,'Swosti',543244551),
  createData(5,'R-05', 'JAANLA-CUTM(BBSR)', 'OD021234', 30000,'Om prakash',34521134),
  createData(6,'R-06', 'SUNDARPADA(KHURDHA)-CUTM', 'OD021234', 35000,'Asutosh',999934233),
  createData(7,'R-07', 'JATNI(KHURDHA)-CUTM', 'OD021234', 20000,'Saswat',8453454322),
];



const Header = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const[modal,setmodal] = useState(false)
  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('menu__active')
  return (
    <header className="header">
      {/* ===Header Top=== */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-line"></i>
                </span>{" "}
                +91 7978797141
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end">
                <Link to="https://cutm.icloudems.com/corecampus/index.php" className="d-flex align-items-center">
                  <i class="ri-login-circle-line"></i> Login
                </Link>
              </div>
            </Col>
            
          </Row>
        </Container>
      </div>

      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-3">
                    <img src={cutmlogo} alt="" className="imo"/>
                    <span>
                      Acquire Your Seat <br />
                      
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <div className="header__location__content">
                  <h4>Bhubanswar</h4>
                  <h6>Ramchandrapur,Jatani</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location__content">
                  <h4>Monday to Saturday</h4>
                  <h6>9:30am - 4pm</h6>
                </div>
              </div>
            </Col>
            <Modal size='lg'
                isOpen={modal}
                toggle={()=> setmodal(!modal)}
                >
                <ModalHeader 
                 toggle={()=> setmodal(!modal)}>
               CUTM || Route List
                </ModalHeader>
                <ModalBody>


                <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
               
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>




                </ModalBody>

              </Modal>
            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              <button className="header__btn btn d-flex align-items-center justify-content-end text-end " onClick={()=>setmodal(true)}>
             
              
                  <i>Routes</i> 
               
              </button>
            </Col>
          </Row>
        </Container>
      </div>


      {/* ========Main Navigation========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
            <i class="ri-menu-2-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation"  ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
{
  navLinks.map((item,index)=>(
    <NavLink to={item.path} className={navClass=> navClass.isActive ? 
    'nav__active nav__item' : "nav__item"} key={index}>{item.display}
    </NavLink>
  ))
}
              </div>
            </div>
            {/* <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span><i class="ri-search-line"></i></span>
              </div>
            </div> */}
          </div>
        </Container>
      </div>


    </header>
  );
};

export default Header;

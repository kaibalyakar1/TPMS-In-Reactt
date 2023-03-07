import React, {useRef, useState} from "react";
import { Container, Row, Col, ModalBody } from "reactstrap";
import { Link,NavLink } from "react-router-dom";
import "../../styles/header.css";
import { Modal,ModalHeader } from "reactstrap";


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
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];


function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
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
                    <i class="ri-bus-wifi-line"></i>
                    <span>
                      Acquire Your Seat <br />
                      Routes
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
               Popup
                </ModalHeader>
                <ModalBody>


                <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
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

import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TableShow from './components/TableShow';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee'
// import Login from './components/Login';
// import Registration from './components/Registration';
import {  Container, Nav, Navbar, Table } from 'react-bootstrap';
import { useState } from 'react';
import { ContextProvider } from './context/context';
import EditEmployee from './components/EditEmployee';
import Header from "./components/Header"
// import Customers from './components/Customers';
import ExportCSV from "./components/ExportCSV"


function App() {
  const[storeData,setStoreData]=useState([])
  const [showEditModal,setEditModal]=useState(false)
  const [showLogin,setShowLogin]=useState(true)
  const[selectedEmployee,setSelectedEmployee]=useState({
    fullName:'',
    phonenumber:'',
    emial:''
    
  })
const [index,setIndex]=useState(0)
  const changeLogin=()=>{
    setShowLogin(true)
  }
  console.log(storeData);
  return (
   
      <Router>
      <div className='App'>
      <div className="App">
      <Header className="header" topicTitle="LOVE KALSANGRAH" />
      <div className="row">
        <div className="col-md-8">
          <h2>Customers</h2>
        </div>
        <div className="col-md-4 center">
          <ExportCSV
            csvData={storeData}
            fileName="Customers_Infomation_xlsx"
            // wscols={wscols}
          />
          {/* <ExportReactCSV
            csvHeaders={headers}
            csvData={customersData()}
            fileName="Customers_Infomations_csv.csv"
          /> */}
        </div>
      </div>
      {/* <Customers customers={storeData} /> */}
    </div>
        <Navbar className='navbar navbar-expand-lg navbar-primary bg-warning'>
          <Container>
            <Navbar.Brand style={{color:'white'}}>LUV KALSANGRAH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Nav className="me-auto">
               {showLogin ? <div><Link to="/login">Login</Link ><Link to='/registration'>Register</Link></div>: <div style={{display:'flex'}}><div><Link to="/tableshow">Employees</Link>
                <Link to="/add-employee" style={{marginLeft:'15px'}}>Add Employee</Link></div><div><Link to='/login' onClick={()=>{changeLogin()}}>LogOut</Link></div></div>}
              </Nav> */}

              <div >
                <Link to="/add-employee"></Link> </div>
               <div style={{position:"relative",left:"15px"}}> <Link to="/tableshow">ADD-data</Link></div>

             
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
        <ContextProvider value={{storeData,setStoreData,showEditModal,setEditModal,setShowLogin,selectedEmployee,setSelectedEmployee,setIndex,index}}>
            <Route exact={true} path="/" component={Home} />
            <Route path="/tableshow" component={TableShow} />
            <Route path="/tableshow" component={AddEmployee} />
            {/* <Route path='/login' component={Login}/> */}
            {/* <Route path='/registration' component={Registration}/> */}
            <Route path='/editEmployee' component={EditEmployee} />
            </ContextProvider>
        </div>
      </div>
    </Router>
   


  );
}

export default App;
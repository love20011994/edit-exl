import React, { useContext, useState } from "react";
// import { Button, Modal, ModalBody, ModalTitle } from 'react-bootstrap';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Modal from './Modal';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { withRouter } from "react-router-dom";
import ContextData from "../context/context";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function EditEmployee(props) {
  const contextValue = useContext(ContextData);
  // const data={...contextValue.selectedEmployee}
  console.log(contextValue);
  //console.log(data.fullName);

  const [selectedEmployee1, setSelectedEmployee1] = useState({
    fullName: "",
    phonenumber: "",
    email: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const eventHandler = (e) => {
    //const dataCopy={...data}
    //dataCopy[contextValue.index][e.target.name]=e.target.value

    //const selectedEmployee1Copy={...selectedEmployee1}
    //console.log(selectedEmployee1Copy.fullName);
    // selectedEmployeeCopy[contextValue.index][e.target.name]=e.target.value
    //console.log(selectedEmployee1Copy);
    const employeeCopy = { ...selectedEmployee1 };
    employeeCopy[e.target.name] = e.target.value;
    setSelectedEmployee1(employeeCopy);
  };

  const closeModal = () => {
    props.history.push("/tableshow");
  };

  const saveChanges = () => {
    const storeDataCopy = [...contextValue.storeData];
    storeDataCopy.splice(contextValue.index, 1, selectedEmployee1);
    contextValue.setStoreData(storeDataCopy);
    props.history.push("/tableshow");
  };

  return (
    <div>
      {/* <Modal show={contextValue.showEditModal}>
<Modal.Header closeButton>
    <Modal.Title>Edit Employee Data</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <label className='form-lable'>FullName</label>
    <input className='form-control' placeholder='Enter full name' value={selectedEmployee1.fullName} name='fullName' onChange={(e)=>eventHandler(e)}/>
    <label className='form-lable'>Designation</label>
    <input className='form-control' name='designation' placeholder='Enter Designation' value={selectedEmployee1.designation} onChange={(e)=>eventHandler(e)}/>
    <label className='form-lable' >Salary</label>
    <input className='form-control' name='salary' type='number' placeholder='Enter salaru' value={selectedEmployee1.salary} onChange={(e)=>eventHandler(e)}/>
    <label className='form-lable'>Age</label>
    <input className='form-control' name='age' type='number' placeholder='Enter Age' value={selectedEmployee1.age} onChange={(e)=>eventHandler(e)}/>

  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={()=>{closeModal()}}>Close</Button>
    <Button variant="primary" onClick={()=>{saveChanges()}}>Save changes</Button>
  </Modal.Footer>
</Modal> */}

      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Button onClick={handleOpen}>Click here For Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            EDIT THE DATA AND CLICK SAVE AND CHANGE
          </Typography>
          <label className="form-lable">FullName</label>
          <input
            className="form-control"
            placeholder="Enter full name"
            value={selectedEmployee1.fullName}
            name="fullName"
            onChange={(e) => eventHandler(e)}
          />
          <label className="form-lable">phone number</label>
          <input
            className="form-control"
            name="phonenumber"
            placeholder="Enter phonenumber"
            value={selectedEmployee1.phonenumber}
            onChange={(e) => eventHandler(e)}
          />
          <label className="form-lable">Email</label>
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="Enter email"
            value={selectedEmployee1.email}
            onChange={(e) => eventHandler(e)}
          />
          {/* <label className='form-lable'>Age</label>
    <input className='form-control' name='age' type='number' placeholder='Enter Age' value={selectedEmployee1.age} onChange={(e)=>eventHandler(e)}/> */}
          <Button
            variant="secondary"
            onClick={() => {
              closeModal();
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              saveChanges();
            }}
          >
            Save changes
          </Button>
        </Box>
      </Modal>
      {/* <Modal
show={contextValue.showEditModal}
  onClose={handleClose}
  // aria-labelledby="modal-modal-title"
  // aria-describedby="modal-modal-description"
>
  <Box >

    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
    <label className='form-lable'>FullName</label>
    <input className='form-control' placeholder='Enter full name' value={selectedEmployee1.fullName} name='fullName' onChange={(e)=>eventHandler(e)}/>
    <label className='form-lable'>Designation</label>
    <input className='form-control' name='designation' placeholder='Enter Designation' value={selectedEmployee1.designation} onChange={(e)=>eventHandler(e)}/>
    <label className='form-lable' >Salary</label>
    <input className='form-control' name='salary' type='number' placeholder='Enter salaru' value={selectedEmployee1.salary} onChange={(e)=>eventHandler(e)}/>
    <label className='form-lable'>Age</label>
    <input className='form-control' name='age' type='number' placeholder='Enter Age' value={selectedEmployee1.age} onChange={(e)=>eventHandler(e)}/>

    <Button variant="secondary" onClick={()=>{closeModal()}}>Close</Button>
    <Button variant="primary" onClick={()=>{saveChanges()}}>Save changes</Button>
    <Button onClick={handleOpen}>Open modal</Button>

    
  </Box>

</Modal> */}
    </div>
  );
}

export default withRouter(EditEmployee);

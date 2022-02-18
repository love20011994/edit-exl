import React,{ useContext, useEffect, useState } from 'react';
import ContextData from '../context/context';
import EditEmployee from './EditEmployee';

function AddEmployee(props) {
   const recivedData=useContext(ContextData)
    const [employeeDetails, setEmployeeDetails] = useState({
        fullName:'',
        phonenumber:'',
        email:''
      
    });

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [ageErrorMessage, setAgeErrorMessage] = useState('');
    const [salaryErrorMessage, setSalaryErrorMessage] = useState('');

    const [nameError, setnameError] = useState(false);
    const [designationError, setdesignationError] = useState(false);
    const [salaryError, setSalaryError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const closeModal = () => {
        props.history.push("/tableshow");
      };

    const handleSubmit=(event)=>{
        event.preventDefault()
        const isNameValid=validateName(employeeDetails.fullName)
        const isDesignationValid=validateDesignation(employeeDetails.phonenumber)
        const isSalaryValid=validateSalary(employeeDetails.email)
        const isAgeValid=validateAge(employeeDetails.age)
        props.history.push("/tableshow");


        if (true){
          const array= [...recivedData.storeData]
          array.push(employeeDetails)
          recivedData.setStoreData(array)
            console.log(recivedData.storeData);
            setEmployeeDetails({
                fullName:'',
                phonenumber:'',
                email:''
               
            })
            // alert('Details Added Successfully')
            props.history.push('/tableshow')
        }else {
            console.error('invalid data');
        }
    }
//===========================================================================
    const validateName=(name)=>{
        // const nameFormat= /[a-zA-Z]+/
        // if (name===''){
        //     setnameError(true)
        //     setNameErrorMessage('Please enter username')
        //     return false
        // }else if (nameFormat.test(name)){
        //     setnameError(false)
        //     setNameErrorMessage(' ')
        //     return true
        // } else{
        //     setnameError(true)
        //     setNameErrorMessage('Please enter valid username')
        //     return false
        // }
    }

    const validateDesignation=(designation)=>{
        // if (designation){
        //     setdesignationError(false)
        //     return true
        // }else{
        //     setdesignationError(true)
        //     return false
        // }
    }

    const validateSalary=(salary)=>{
        // if (salary===''){
        //     setSalaryError(true)
        //     setSalaryErrorMessage('please enter salary')
        //     return true
        // }
        // if (salary>0){
        //     setSalaryError(false)
        //     setSalaryErrorMessage(' ')
        //     return true
        // }
        // else{
        //     setSalaryError(true)
        //     setSalaryErrorMessage('')
        //     return true
        // }
    }

    const validateAge=(age)=>{
        // if (age===''){
        //     setAgeError(true)
        //     setAgeErrorMessage('Please Enter Age')
        //     return false
        // }else if (age>18){
        //     setAgeError(false)
        //     setAgeErrorMessage('')
        //     return true
        // }else{
        //     setAgeError(true)
        //     setAgeErrorMessage('Age not valid')
        //     return false
        // }
    }
//=================================================================================
    const handleData=(event)=>{
        setEmployeeDetails({
            ...employeeDetails,
            [event.target.name]:event.target.value
        })
    }

  return <div class='division'>
        <form 
        
        id = "love" class="row g-2 form shadow rounded " style={{width:'500px', marginLeft:'450px', marginTop:'20px'}} onSubmit={handleSubmit}>
            <div class="form-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Employee Details</h5>
            </div>
            <div class="form-div">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" placeholder='Enter full name' onChange={(e)=>{handleData(e)}} value={employeeDetails.fullName} name='fullName'/>
                {nameError ? <div class="error-message">{nameErrorMessage}</div> : null}
            </div>

            <div class="">
                <label class="form-label">Phone Number</label>
                <input type="number" class="form-control" placeholder='Phone Number' onChange={(e)=>{handleData(e)}} value={employeeDetails.phonenumber} name='phonenumber'/>
                {designationError ? <span class="error-message">Please choose a designation.</span> : null }
                
            </div>

            <div class="">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder='Email' onChange={(e)=>{handleData(e)}} value={employeeDetails.email} name='email'/>
                {salaryError ? <span class="error-message">{salaryErrorMessage}</span> : null }
            </div>

            {/* <div class="">
                <label class="form-label">Age</label>
                <input type="number" class="form-control" placeholder='Enter age' onChange={(e)=>{handleData(e)}} value={employeeDetails.age} name='age'/>
                {ageError ? <span class="error-message">{ageErrorMessage}</span> : null }
            </div> */}

            <div class="button">
                <button  class="btn btn-primary " type="submit"onSubmit={(event)=>{handleSubmit(event)}} >Submit </button>
               <div><button style={{position:"relative",left:"125px",bottom:"30px"}} class="btn btn-primary " onClick={()=>document.getElementById("love").style="display:none"} >close </button>
</div> 
            </div>

        </form>
       

  </div>;
}

export default AddEmployee
import React from 'react';
import Avatar from './avatar';


const obform = {
  width:'90%',
  marginTop:'5%',
}
const forms ={
  height: '100%',
  paddingTop:'.2%',
  fontFamily:'Courier New, sans-serif',
  textTransform: 'uppercase'
  
}
const personalInfo = {
  width:'95%',
  height:'50%',
  border: '1px solid #ccc',
  borderRadius:'5px',
  paddingLeft:'5%',
  paddingRight:'5%',
  paddingTop:'5%',
  paddingBottom:'5%',
  marginLeft:'5%'
}
const arrestDets={
  width:'95%',
  height:'50%',
  border: '1px solid #ccc',
  borderRadius:'5px',
  marginLeft: '5%',
  padding: '5%',
  marginTop: '5%'
}
const formInputs = {
  width: '100%',
  padding: '12px 20px',
  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box'
}
const formSubmit = {
  width: '90%',
  backgroundColor: 'rgba(3, 0, 255, 0.8)',
  color: 'white',
  padding: '14px 20px',
  marginLeft: '15%',
  marginTop:'5%',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}
let arrestingofficer = {
  name: 'somename',
  idno:12345
}
let currenttime =() =>{
  let now = new Date();

  let date = now.toLocaleDateString()
  let time = now.toLocaleTimeString()
  return `${time} ${date}`;
}
let smallObForm=()=>{
  return(
    
      <form style={obform}>        
            <div className="forms" style={forms}>
            <div className="personalDetails" style={personalInfo}>
              <label  >Name:</label>
              <input style={formInputs} type="text" name = "name" placeholder='Name' className="name" required/><br /><br />
              <label > gender:</label>
              <input style={formInputs} type="text" name = "gender" placeholder='Gender' className="gender" required/><br /><br />
              <label >id:</label>
              <input style={formInputs} type="text" name = "id" placeholder='Id' className="id" required/><br /><br />
              <Avatar />
          </div>
          <div className="offence" style={arrestDets}>
            <label >offence:</label>
            <input style={formInputs} type="text" name = "offence" placeholder='Offence' className="offence" required/><br /><br />
            <label > Arresting Officer:</label>
            <input style={formInputs} type="text" name = "arrestingofficer" placeholder='Arresting Officer' className="arrestofficer" required/><br /><br /> 
            <label > Arresting Officer:</label>
            <input style={formInputs} type="text" name = "arrestingofficer" value={arrestingofficer.name} placeholder={arrestingofficer.name} className="arrestingOfficer" readOnly={true}/><br /><br />
            
            <label > Time of arrest:</label>
            <input style={formInputs} type="text" name = "arrestingofficer" value={currenttime()} placeholder={currenttime()} className="timeofarrest" readOnly={true}/><br /><br />
                    
          </div>
      </div>       
        
        <input type="submit" name="submit" value="Book Suspect" style={formSubmit}/>
      </form>
      
  )
}

export default smallObForm;
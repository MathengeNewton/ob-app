import React from 'react';
import Avatar from './avatar';
import Media from 'react-media';
import SmallObForms from './smallscreenforms';


const obform = {
  border:"1px solid #ccc",
  borderRadius:'5px',
  width:'80%',
  marginTop: '2%',
  paddingLeft:'2%',
  paddingRight:'2%',
  marginLeft:'6%'
}
const forms ={
  display: 'flex',
  height: '90%',
  paddingTop:'.2%',
  fontFamily:'Courier New, sans-serif',
  textTransform: 'uppercase'
  
}
const personalInfo = {
  display:'flex',
  width:'45%',
  height:'50%',
  float: 'left',
  border: '1px solid #ccc',
  borderRadius:'5px',
  margin: '2%',
  padding: '5%'
}
const arrestDets={
  width:'45%',
  height:'50%',
  float:'right',
  border: '1px solid #ccc',
  borderRadius:'5px',
  margin: '2px',
  padding: '5%',
  marginTop: '2%'
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
  width: '20%',
  backgroundColor: 'rgba(3, 0, 255, 0.8)',
  color: 'white',
  padding: '14px 20px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}
const formSide ={  
  marginRight:'15%'
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
let ObForm=()=>{
  return(
    <div>
    <Media query="(min-width: 800px)" render={() =>
      (
      <form style={obform}>
        
            <div className="forms" style={forms}>
          <div className="personalDetails" style={personalInfo}>
            <div style={formSide}>   
              <label  >Name:</label>
              <input style={formInputs} type="text" name = "name" placeholder='Name' className="name" required/><br /><br />
              <label > gender:</label>
              <input style={formInputs} type="text" name = "gender" placeholder='Gender' className="gender" required/><br /><br />
              <label >id:</label>
              <input style={formInputs} type="text" name = "id" placeholder='Id' className="id" required/><br /><br />
              <Avatar />
            </div>
            
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
      )}
      />
      <Media query="(max-width: 799px)" render={() =>
        (
          <SmallObForms />
        )}
      />
      </div>
  )
}

export default ObForm;
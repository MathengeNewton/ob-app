import React from 'react';

let Avatar =()=> {
  let avatarimage = "/th.jpg";
  const avartarstyle ={
    width:'70%',
    marginLeft:'15%',
    marginBottom:'5%'
  }
  const actualAvatar={
    width:'60%',
    height: '60%'
  }
  const labelstyle={
    color:'#090909'
  }
  let previewFile = ()=> {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", ()=> {
      preview.src = reader.result;
    },false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className="photoArea">      
        <div className="image-preview" style={avartarstyle}>
          <img src= {avatarimage} id="imageFile" style={actualAvatar} alt={avatarimage}/>
        </div>
        <div style={labelstyle}>
          <label>image:                 
          </label>
            <input type="file" className="imagefile" onChange={previewFile} />
        </div>
    </div>
  );
}
export default Avatar
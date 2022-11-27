import React, { useState } from "react";
import { Link } from "react-router-dom";
import './StadiumEdit.css'
const StadiumEdit = ({name, image, description, capacity,location,plan, id,getUpdated}) => {
  
  const [editing, setEditing] = useState(false);
  const [nameS, setnameS] = useState(name);
  const [imageS, setimageS] = useState(image);
  const [descriptionS, setdescriptionS] = useState(description);
  const [capacityS, setcapacityS] = useState(capacity);
  const [locationS, setlocationS] = useState(location);
  const [planS, setplanS] = useState(plan);

  const handleSave = () => {    
    getUpdated(nameS, imageS, descriptionS, capacityS,locationS,planS, id);
    setEditing(false);
  };


  return (    
    <>
        <div className='bg-red2'>
            <div className='headQ2'>{name}</div>            
        </div>
    <div className='container3'>         
      <div className="left">
        <div className="description">          
        {editing ?(<input value={imageS} onChange={({ target }) => setimageS(target.value)}/>) :
          null }
        </div>
        <div className="name">   
        {editing ? (<input value={nameS} onChange={({ target }) => setnameS(target.value)}/>) :
          (<div>{name}</div>)}
        </div>       
        <div className="description">
          {editing ? (<input value={descriptionS} onChange={({ target }) => setdescriptionS(target.value)}/>) :
          (<div>{description}</div>)}
        </div>
        <div className="capacity">
          <span>FIFA World Cup 2022™ Stadium Capacity : </span>
          {editing ? (<input value={capacityS} onChange={({ target }) => setcapacityS(target.value)}/>) :
          (<div style={{fontSize : "40px" ,paddingTop :"10px"}}>{capacity}</div>)}
        </div>
        <div className="location">
          <span>Location: </span>
          {editing ? (<input value={locationS} onChange={({ target }) => setlocationS(target.value)}/>) :
          (<div style={{fontSize : "30px"}}>{location}</div>)}
        </div>
        <div className="plan">
          <span>Plan: </span>
          {editing ? (<input value={planS} onChange={({ target }) => setplanS(target.value)}/>) :
          (<div style={{fontSize : "30px"}}>{plan}</div>)}
        </div>
        
        <div style={{padding :"10px"}}>
          <button className="ButtonD btnCard" onClick={() => setEditing(!editing)}>
              {editing ? "Cancel" : "Edit"}
          </button>
          <Link to={`/stadiums/${id}`}>
              {editing && <button className="ButtonD btnCard" onClick={handleSave}>Save</button>}            
          </Link>
        </div>     
         
      </div>
      <div className="right">
        <div>
          <img className="imgRadius" src={imageS} alt={nameS} />     
        </div> 
      </div>
    </div>
    </>
  );
};

export default StadiumEdit;

import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import "./Info.css"

const Info = () => {
    const [member,setmember] =useState([])
    useEffect(()=>{
        fetch("./employee.json")
        .then(res => res.json())
        .then(data => setmember(data))
    },[])
   
    return (
        <div>
        
        <div className="info-grid">
        {
                member.map((smember) => <Member key={smember.name} member={smember}></Member>)
            }
        </div>
          
        </div>
    );
};

export default Info;
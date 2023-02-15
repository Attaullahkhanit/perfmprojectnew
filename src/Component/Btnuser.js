import Title from 'antd/lib/typography/Title'
import React from 'react'
import RegUsersList from '../Pages/Registered Users List/RegUsersList';
import './Button.css';

function Btnuser(props) {
  return (
    <>
       <a className="waves-effect waves-light btn usablebtn">
        {props.name}
       </a>

      
    </>
  )
}

export default Btnuser

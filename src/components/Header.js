import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <div className="heading">
            <p className="title is-3">ระบบตรวจสอบยืนยันตัวตน</p>
            <p className="subtitle is-5">NPPF Verification System</p>
            <hr />
           </div>
        )
    }
}
export default Header

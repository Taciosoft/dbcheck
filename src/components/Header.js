import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <div style={{textAlign:'center',paddingBottom:'30px' }}>
                <p className="title is-3">ระบบตรวจสอบยืนยันตัวตน</p>
                <p className="subtitle is-5">NPPF Verification System</p>
                <hr />
            </div>
        )
    }
}
export default Header

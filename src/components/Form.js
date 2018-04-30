import React, {Component} from 'react'

class Form extends Component {
    render(){
        return(
            <div>
                <div className="field has-addons has-addons-centered">
                    <div className="control" style={{width:'60%' , display:'flex'}}>
                         <input className="input" type="text" placeholder="กรุณากรอก หมายเลขประจำตัวประชาชน 13 หลัก  หรือ รหัส NPPF Code"/>
                    </div>
                 <div className="control">
                 <a className="button is-link">
                    ค้นหาข้อมูล
                 </a>
                </div>
                </div>
            </div>
        )
    }
}

export default Form




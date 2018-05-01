import React, {Component} from 'react'
import Spinner from './Spinner'
import './Form.css'

class Form extends Component {
    render(){
        return(
            <div>
                <div className="field has-addons has-addons-centered">
                    <div className="control" style={{width:'60%'}}>
                         <input className="input" type="text" placeholder="กรุณากรอก หมายเลขประจำตัวประชาชน 13 หลัก  หรือ รหัส NPPF Code"/>
                    </div>
                 <div className="control">
                 <a className="button is-link">
                    ค้นหาข้อมูล
                 </a>
                </div>
                </div>
                <section className="section">
        
                <div className="columns is-desktop">
                <div className="column">
                <p className="img_db">
                <img asyn src="https://www.zensestudio.com/assets/storage/gallery/corp-1.jpg"/>
                </p>
                </div>
                <div className="column">
                <label>ข้อมูลส่วนบุคคล | Personal Information</label>
                <table className="table is-hoverable is-bordered  is-centered">
                <tbody>
                    <tr>
                        <td align="right" width="25%">NPPF ID</td>
                        <td>
                        <div className="control is-loading"/>
                        </td>
                    </tr>
                    <tr>
                        <td>ชื่อ - นามสกุล</td>
                        <td>
                        <div className="control is-loading"/>
                        </td>
                    </tr>
                    <tr>
                        <td>ตำแหน่ง</td>
                        <td>
                        <div className="control is-loading"/>
                        </td>
                    </tr>
                    <tr>
                        <td>สถานะภาพ</td>
                        <td>
                        <div className="control is-loading"/>
                        </td>
                    </tr>
                    <tr>
                        <td>หมายเหตุ</td>
                        <td>
                        <div className="control is-loading"/>
                        </td>
                    </tr>
                </tbody>
                </table>
                </div>
                </div>
                
                </section>
            </div>
        )
    }
}

export default Form




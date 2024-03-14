import React from 'react'
import NoImage from '../../Assests/no-image.png'
import "./Daashboard.css"
// import {Link} from "react-router-dom"

const DashBoard = () => {
    return (
        <>
            <div class="main-body-1">
                <h2>Dashboard</h2>
                <div class="promo_card">
                    <h1 className='font1'>Welcome to eSkooly</h1>
                    <span className='font2'>Lorem ipsum dolor sit amet.</span>
                    <img src={NoImage} className='image' alt='' />
                    <button className='butn' style={{background: "#a3a9a3",
    border: "1px solid #a3a9a3",
    borderRadius: "12px"}}>See Details</button>

                </div>
                <div class="history_lists">
                    <div class="list1">
                        <div class="row-6">
                            <h4 style={{marginTop: "-22px"}}>Student Details:</h4>
                            
                        </div>
                        <table className='tabl'>
                            <thead>
                                <tr style = {{backgroundColor: "#ebebeb"}}>
                                    <th>Name:</th>
                                    <td>Anuj Pandey</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th>Registration No. :</th>
                                    
                                    <td>4582333</td>
                                    
                                </tr>
                                <tr style={{backgroundColor: "#ebebeb"}}>
                                <th>Class:</th>
                                    
                                    <td>X</td>

                                   
                                </tr>
                                <tr>
                                <th>Date Of Birth:</th>
                                    
                                    <td>12 July, 2005</td>

                                    
                                </tr>
                                <tr style={{backgroundColor: "#ebebeb"}}>
                                <th>Student UID:</th>
                                    <td>21-CS&E23-25</td>
                                    
                                </tr>
                              
                            </tbody>
                        </table>
                    </div>
                    <div class="list2">
                        <div class="row">
                            <h4 style={{marginTop: "-22px"}}>Attandence:</h4>
                            
                        </div>
                        <table className='tabl2'>
                            <thead>
                                <tr style = {{backgroundColor: "#ebebeb"}}>
                                    <th style={{width:"161px"}}>Maths:</th>
                                     <td>45%</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th style={{width:"161px"}}>English:</th>
                                    
                                    <td>67%</td>
                                    
                                </tr>
                                <tr style = {{backgroundColor: "#ebebeb"}}>
                                <th style={{width:"161px"}}>Hindi:</th>
                                   
                                    <td>92%</td>
                                </tr>
                                <tr>
                                <th style={{width:"161px"}}>Social Science:</th>
                                 
                                    <td>98%</td>
                                </tr>
                                <tr style = {{backgroundColor: "#ebebeb"}}>
                                <th  style={{width:"161px"}}>Science:</th>
                                    <td>22%</td>
                                </tr>
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <div class="Sidebar">
      <h4>Account Balance</h4>
      
      <div class="balance">
        <i class="fas fa-dollar icon"></i>
        <div class="info">
          <h5>Dollar</h5>
          <span><i class="fas fa-dollar"></i>25,000.00</span>
        </div>
      </div>
      
      <div class="balance">
        <i class="fa-solid fa-rupee-sign icon"></i>
        <div class="info">
          <h5>PKR</h5>
          <span><i class="fa-solid fa-rupee-sign"></i>300,000.00</span>
        </div>
      </div>
      <div class="balance">
        <i class="fas fa-euro icon"></i>
        <div class="info">
          <h5>Euro</h5>
          <span><i class="fas fa-euro"></i>25,000.00</span>
        </div>
      </div>
      <div class="balance">
        <i class="fa-solid fa-indian-rupee-sign icon"></i>
        <div class="info">
          <h5>INR</h5>
          <span><i class="fa-solid fa-indian-rupee-sign"></i>220,000.00</span>
        </div>
      </div>
      <div class="balance">
        <i class="fa-solid fa-sterling-sign icon"></i>
        <div class="info">
          <h5>Pound</h5>
          <span><i class="fa-solid fa-sterling-sign"></i>30,000.00</span>
        </div>
      </div>
    </div> */}

        </>

    )
}

export default DashBoard
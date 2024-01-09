
import React from 'react';
import { useState } from 'react';
import 
{BsUpload,  BsFillCaretLeftFill,BsBrightnessHighFill ,BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPencil}
 from 'react-icons/bs';
 import Logo from "../../Assets/Billsavvy_logo.png";
 import Account from "../../Assets/Account.png";
 import "./sidenavbar.css"
 import {Link} from "react-router-dom";

function SideNavbar({openSidebarToggle, OpenSidebar}) {
    const [username, setUsername] = useState('Username ');
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
    setNewUsername(username);
  };

  const handleSaveClick = () => {
    setUsername(newUsername);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                {/* <BsCart3  className='icon_header'/> SHOP */}
                <img src={Logo} alt="BillSavvy Logo" style={{ width: '50px', borderRadius: '50%', marginLeft:'-1px',marginBottom: '8px',backgroundColor: "#91A56B" }} />
                <h2 id="logo_title">BillSavvy</h2>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>x</span>
        </div>

        <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <div>
            <img src={Account} alt="Profile" className="profile-picture" height="120px" />
            <BsUpload className='icon' onClick={console.log("hello")} style={{cursor:'pointer'}}/>
          </div>
        </li>

        <li className="sidebar-list-item">
          {isEditing ? (
            <>
              <input type="text" value={newUsername} onChange={handleInputChange} class="edit-input" />
              <button onClick={handleSaveClick} className='edit-btn'>Save</button>
              <button onClick={handleCancelClick} className='edit-btn'>Cancel</button>
            </>
          ) : (
            <>
              {username}
              <BsPencil className="icon" onClick={handleEditClick} style={{cursor:'pointer'}}/>
            </>
          )}
        </li>

        <li className='sidebar-list-item'> user123@gmail.com</li>
        <li className='sidebar-list-item'>
                {/* <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a> */}
                <Link to='/Dashboard' >< BsBrightnessHighFill  className='icon'/>Bill Prediction</Link>

            </li>
        <li className='sidebar-list-item'>
                {/* <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a> */}
                 <Link to='/Dashboard' ><BsMenuButtonWideFill className='icon'/> Eco-Educate</Link>

                
            </li>
            <li className='sidebar-list-item'>
                {/* <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a> */}
                <Link to='/Dashboard' ><BsGrid1X2Fill className='icon'/> Dashboard</Link>

            </li>
            
            <li className='sidebar-list-item'>
                {/* <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a> */}
                <Link to='/Dashboard' ><BsFillGearFill className='icon'/> Forgot Password?</Link>

            </li>
            <li className='sidebar-list-item'>
                {/* <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a> */}
                <Link to='/Dashboard' ><BsFillCaretLeftFill className='icon'/> SignOut</Link>

            </li>
        </ul>
    </aside>
  )
}

export default SideNavbar;

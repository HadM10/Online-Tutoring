import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "../css/ProfileTrainee.css";
import AuthContext from "../services/AuthContext";


const ProfileTrainee = () => {
  const [user, setUser] = useState('')

//   useEffect(() => {
// 	retrieveUser()
// }, [])

  const [errorMessage, setErrorMessage] = useState('');

  const [className, setClassName] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const { getLoggedIn } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault()


    const userData = {
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      password: user.password,
      age: user.age,
      phone: user.phone,
      country: user.country,
      userType: user.userType,
      photo: user.photo
    };

    axios
      .get("http://localhost:5000/users/register", userData)

      .then((response) => {
        console.log(response.status)
      });

    console.log(userData);

  };

  return (
    <div className="container" style={{marginBottom: "100px"}}>
        <div className="row">
            <div className="col-12 ">
                <div className="titreProfile">
                    <h3>My Profile</h3>
                </div>
            </div>
        </div>

        <div className='row'>
        <div className='col-3 traineecard1'>
            <div className='traineepic'>
            <img value={user?user.photo:''} alt="Profile Picture"></img>
            </div>
            <div className="traineeradio">
              <input type="radio" id="Trainee" name="fav_language" onChange={handleChange} value={user?user.userType:''} checked></input>
              <label for="trainee">Trainee</label>
              <input type="radio" id="trainer" name="fav_language" onChange={handleChange} value={user?user.userType:''}></input>
              <label for="trainer">Trainer</label>
            </div>
			<div>
			<input className='traineebtn' type="file" id="customFile" />
			<button type="button" for="customFile" className="traineebtnSave">Save</button>
			</div>
        </div>
		
		<div className='col-5 traineecard2'>
			<div className='row'>
				<p className='txtchange'>You can change your info data<br></br> on submit all info wil be saved</p>
			</div>
		<div className='row'>
		<div className='col-3 d alin'>
				<label  for="fname" >First Name:</label>
			</div>
			<div className='col-9  e'>
				<input type="text" className="Profile-field" id="fname" value={user?user.fname:''} name="fname"></input>
			</div>
		</div>
		<div className='row'>
		<div className='col-3 d alin'>
				<label for="lname" >Last Name:</label>
			</div>
			<div className='col-9 e'>
				<input type="text" className="Profile-field" id="lname" value={user?user.lname:''} name="lname"></input>
			</div>
		</div>
		<div className='row'>
		<div className='col-3 d alin'>
				<label for="age" >Age:</label>
			</div>
			<div className='col-9 e'>
				<input type="text" className="Profile-field" id="age" value={user?user.age:''} name="age"></input>
			</div>
		</div>
		<div className='row'>
		<div className='col-3 d alin'>
				<label for="country" >Country:</label>
			</div>
			<div className='col-9 e'>
				<input type="text" className="Profile-field" id="country" value={user?user.country:''} name="country"></input>
			</div>
		</div>
		<div className='row'>
		<div className='col-3 d alin'>
				<label for="Profile-field" >Phone:</label>
			</div>
			<div className='col-9 e'>
				<input type="text" className="Profile-field" id="phone" value={user?user.phone:''} name="phone"></input>
			</div>
		</div>
		<div className='row'>
		<div className='col-3 d alin'>
				<label for="email" >Email:</label>
			</div>
			<div className='col-9 e'>
				<input type="email" className="Profile-field" id="email"  value={user?user.email:''} name="email"></input>
			</div>
		</div>
		<div className='row'>
		<div className='col-3 d alin'>
				<label for="password" >Password:</label>
			</div>
			<div className='col-9 e'>
				<input type="password" className="Profile-field" id="password" value={user?user.password:''} name="password"></input>
			</div>
		</div>
			<button type="button" className="traineebtnSave1">Update</button>
    	</div>
	
		<div className='col-4 traineecard3'>
			<div className='row'>
				<div className='col-8'><img src={window.location.origin + '/avatar.png'} alt="Cinque Terre" className='imgtuto'/></div>
				<div className='col-2 txtTuto' >Piano tutorial with mr Hadi Makki - jazz piano</div>
				<div className='col-2'><img src={window.location.origin + '/false.png'} className='checkbtntrainee' alt='' ></img> </div>
			</div>
		</div>
		</div>

    </div>   
  )
}

export default ProfileTrainee
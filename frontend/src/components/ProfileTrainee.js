import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/ProfileTrainee.css";
import { ReactSession } from 'react-client-session';


const AlertStyle = {
	display: "none"
  }

const ProfileTrainee = () => {
	const [profiles, setProfiles] = useState([])
	const [user, setUser] = useState({
		fname: profiles.fname,
		lname: profiles.lname,
		email: profiles.email,
		password: profiles.password,
		age: profiles.age,
		phone: profiles.phone,
		country: profiles.country,
		userType: profiles.userType,
	})

	ReactSession.setStoreType("localStorage");
	const username = ReactSession.get("email");
	console.log(username)

	const navigate = useNavigate();

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
	const getProfile = () => {
		axios.get('http://localhost:5000/users/?email=' + username)
			.then(response => {
				setProfiles(response.data)
			})
			.catch(error => {
				console.log(error)
			})
	}

	const patchProfile = () => {
		axios.put('http://localhost:5000/users/?email=' + username, userData)
			.then(response => {
				setUser(response.data)
				setErrorMessage(("Updated successfully"));
				setClassName("alert alert-success")
				document.getElementsByClassName("alert alert-success")[0].style.display = 'block';
				navigate("/profile");
			})
			.catch(e => {
			
				console.log(e)
			})
	}

	useEffect(() => {
		getProfile()
		patchProfile()
	}, []);

	const [errorMessage, setErrorMessage] = useState('');

	const [className, setClassName] = useState('');

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	const handleSubmit = e => {
		e.preventDefault()




	};
	const ViewProfile = () => {
		return (
			profiles.map((profile) => {
				return (
					<div className="profile-content">
						<h1>Profile</h1>
						<img className="profile-photo" src={profile.photo} />
						<p className="profile-text"><strong>First Name:</strong> {profile.fname}</p>
						<p className="profile-text"><strong>Last Name:</strong> {profile.lname}</p>
						<p className="profile-text"><strong>Email:</strong> {profile.email}</p>
						<p className="profile-text"><strong>Age:</strong> {profile.age}</p>
						<p className="profile-text"><strong>Country:</strong> {profile.country}</p>
						<p className="profile-text"><strong>UserType:</strong> {profile.userType}</p>
					</div>
				)
			})
		)
	}

	const EditProfile = () => {
		return (
			<div className="profile-edit-div" >
				<form onSubmit={handleSubmit} className="profile-edit" >
					<h3>My Profile</h3>
					<div className={className} style={AlertStyle} role="alert">{errorMessage}  </div>
					<select className="Profile-label" id="Trainee" name="userType" onChange={handleChange} value={user.userType}>
						<option value="">User Type</option>
						<option value="Trainee">Trainee</option>
						<option value="Trainer">Trainer</option>
					</select>

					<label for="fname" className="Profile-label" >First Name:</label>
					<input type="text" className="Profile-field" id="fname" value={user.fname} name="fname" onChange={handleChange}></input>

					<label for="lname" className="Profile-label" >Last Name:</label>
					<input type="text" className="Profile-field" id="lname" value={user.lname} name="lname" onChange={handleChange}></input>

					<label for="age" className="Profile-label" >Age:</label>
					<input type="number" className="Profile-field" id="age" value={user.age} name="age" onChange={handleChange}></input>

					<label for="country" className="Profile-label" >Country:</label>
					<input type="text" className="Profile-field" id="country" value={user.country} name="country" onChange={handleChange}></input>

					<label for="Profile-field" className="Profile-label" >Phone:</label>
					<input type="text" className="Profile-field" id="phone" value={user.phone} name="phone" onChange={handleChange}></input>

					<label for="email" className="Profile-label" >Email:</label>
					<input type="email" className="Profile-field" id="email" value={user.email} name="email" onChange={handleChange} ></input>

					<label for="password" className="Profile-label" >Password:</label>
					<input type="password" className="Profile-field" id="password" value={user.password} name="password" onChange={handleChange}></input>

					<button type='submit' className="traineebtnSave1">Update</button>


				</form>
			</div>
		)

	}

	const TrainerLessons = () => {
		return (
			<></>
		)
	}

	return (
		<div className="profile-show">

			{ViewProfile()}
			{EditProfile()}
		</div>
	)

}

export default ProfileTrainee
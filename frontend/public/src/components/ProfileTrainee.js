import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/ProfileTrainee.css";
import { ReactSession } from 'react-client-session';
import $ from "jquery";


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

	const [lessons, setLessons] = useState([])

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
		photo: user.photo,
		myLessons: user.myLessons
	};
	const getProfile = () => {
		axios.get('http://localhost:5000/users/?email=' + username)
			.then(response1 => {
				setProfiles(response1.data)
			})
			.catch(error => {
				console.log("Get Profile not working")
			})
	}


	const patchProfile = () => {
		axios.put('http://localhost:5000/users/?email=' + username, userData)
			.then(response2 => {
				setUser(response2.data)
				setErrorMessage(("Updated successfully"));
				setClassName("alert alert-success")
				document.getElementsByClassName("alert alert-success")[0].style.display = 'block';
				navigate("/profile");
			})
			.catch(e => {

				console.log(e)
			})
	}


	const getLessons = () => {
		profiles.map((profileID) => {



			axios.get('http://localhost:5000/lessons/?id=' + profileID._id)
				.then(response3 => {
					setLessons(response3.data)
					console.log(response3.data)
				})
				.catch(error => {

					console.log("Get lessons not working")
				})
		})
	}



	useEffect(() => {
		getProfile()
		
	}, []);

	console.log(profiles)

	const [errorMessage, setErrorMessage] = useState('');

	const [className, setClassName] = useState('');

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	const handleSubmit = e => {
		e.preventDefault()
	};
	getLessons()

	const ViewProfile = () => {
		return (
			profiles.map((profile) => {
				return (
					
					<div>
					<div className="profile-content">
						
					<h2 className="profile-title">My Profile</h2>
					<div className="profile-content-row">
						<img className="profile-photo" src={profile.photo} />
						<div>
						<p className="profile-text"><strong>First Name:</strong> {profile.fname}</p>
						<p className="profile-text"><strong>Last Name:</strong> {profile.lname}</p>
						<p className="profile-text"><strong>Email:</strong> {profile.email}</p>
						<p className="profile-text"><strong>Age:</strong> {profile.age}</p>
						<p className="profile-text"><strong>Country:</strong> {profile.country}</p>
						<p className="profile-text"><strong>UserType:</strong> {profile.userType}</p>
						</div>
						
						{profiles.map((profileUserType) => {
							if (profileUserType.userType === "Trainer")
								return (<Link to={`/trainer`}>
									<input className='traineebtnSave1' type="submit" value="My Courses"></input>
								</Link>)
						})}

						{/* <div>{profile.myLessons[0].lessonId.title}</div> */}
					</div>
					</div>
					</div>
				)
			})
		)
	}

	const EditProfile = () => {
		return (
			<div className="profile-edit-div" >
				<form onSubmit={handleSubmit} className="profile-edit" >
					<h3>Edit Profile</h3>
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
			lessons.map((lessonID) => {
				return (
					<table className="profile-table">
						<tr>
							<td className="tabletd1"><strong>{lessonID.title}:</strong>  {lessonID.description}</td>
							
							<td className="tabletd3"><strong>Date:</strong> {lessonID.trainee.map((eachTrainee) => {
								if (eachTrainee.userId === "621790ee6afd8fc5bf7c11f6")
									return eachTrainee.chosenDate.substring(0, 28)
							})
							} </td>
						</tr>
					</table>
				)
			})
		)
	}


	return (
		<div>
			<div className="profile-show">
				
				{ViewProfile()}
				<div className="profile-tutorials">
				<h3 className="profile-lesson-title">My Lessons</h3>
					{TrainerLessons()}	
			</div>
		</div>
		</div>
		
	)

}

export default ProfileTrainee



// import React, { useState, useContext, useEffect } from 'react'
// import { Link, useNavigate} from "react-router-dom";
// import axios from "axios";
// import "../css/ProfileTrainee.css";
// import AuthContext from "../services/AuthContext";


// const ProfileTrainee = () => {
//   const [user, setUser] = useState('')

// //   useEffect(() => {
// // 	retrieveUser()
// // }, [])

//   const [errorMessage, setErrorMessage] = useState('');

//   const [className, setClassName] = useState('');

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   }

//   const { getLoggedIn } = useContext(AuthContext);

//   const handleSubmit = e => {
//     e.preventDefault()


//     const userData = {
//       fname: user.fname,
//       lname: user.lname,
//       email: user.email,
//       password: user.password,
//       age: user.age,
//       phone: user.phone,
//       country: user.country,
//       userType: user.userType,
//       photo: user.photo
//     };

//     axios
//       .get("http://localhost:5000/users/register", userData)

//       .then((response) => {
//         console.log(response.status)
//       });

//     console.log(userData);

//   };

//   return (
//     <div className="container " style={{marginBottom: "100px"}}>
// 		<img className='imgback' src={window.location.origin + '/music hero-06.png'} alt='profile'></img>
//         <div className="col-12 titreProfile">
//             <div>
//                 <div >
//                     <h3 >My Profile</h3>
//                 </div>
//             </div>
//         </div>

//         <div className='row'>
//         <div className='col-3 traineecard1'>
//             <div className='traineepic'>
//             <img value={user?user.photo:''} alt="Profile Picture"></img>
//             </div>
//             <div className="traineeradio">
//               <input type="radio" id="Trainee" name="fav_language" onChange={handleChange} value={user?user.userType:''} checked></input>
//               <label for="trainee">Trainee</label>
//               <input type="radio" id="trainer" name="fav_language" onChange={handleChange} value={user?user.userType:''}></input>
//               <label for="trainer">Trainer</label>
//             </div>
// 			<div>
// 			<input className='traineebtn' type="file" id="customFile" />
// 			<button type="button" for="customFile" className="traineebtnSave">Save</button>
// 			</div>
//         </div>
		
// 		<div className='col-5 traineecard2'>
// 			<div className='row'>
// 				<p className='txtchange'>You can change your info data<br></br> on submit all info wil be saved</p>
// 			</div>
// 		<div className='row'>
// 		<div className='col-3 d alin'>
// 				<label  for="fname" >First Name:</label>
// 			</div>
// 			<div className='col-9  e'>
// 				<input type="text" className="Profile-field" id="fname" value={user?user.fname:''} name="fname"></input>
// 			</div>
// 		</div>
// 		<div className='row'>
// 		<div className='col-3 d alin'>
// 				<label for="lname" >Last Name:</label>
// 			</div>
// 			<div className='col-9 e'>
// 				<input type="text" className="Profile-field" id="lname" value={user?user.lname:''} name="lname"></input>
// 			</div>
// 		</div>
// 		<div className='row'>
// 		<div className='col-3 d alin'>
// 				<label for="age" >Age:</label>
// 			</div>
// 			<div className='col-9 e'>
// 				<input type="text" className="Profile-field" id="age" value={user?user.age:''} name="age"></input>
// 			</div>
// 		</div>
// 		<div className='row'>
// 		<div className='col-3 d alin'>
// 				<label for="country" >Country:</label>
// 			</div>
// 			<div className='col-9 e'>
// 				<input type="text" className="Profile-field" id="country" value={user?user.country:''} name="country"></input>
// 			</div>
// 		</div>
// 		<div className='row'>
// 		<div className='col-3 d alin'>
// 				<label for="Profile-field" >Phone:</label>
// 			</div>
// 			<div className='col-9 e'>
// 				<input type="text" className="Profile-field" id="phone" value={user?user.phone:''} name="phone"></input>
// 			</div>
// 		</div>
// 		<div className='row'>
// 		<div className='col-3 d alin'>
// 				<label for="email" >Email:</label>
// 			</div>
// 			<div className='col-9 e'>
// 				<input type="email" className="Profile-field" id="email"  value={user?user.email:''} name="email"></input>
// 			</div>
// 		</div>
// 		<div className='row'>
// 		<div className='col-3 d alin'>
// 				<label for="password" >Password:</label>
// 			</div>
// 			<div className='col-9 e'>
// 				<input type="password" className="Profile-field" id="password" value={user?user.password:''} name="password"></input>
// 			</div>
// 		</div>
// 			<button type="button" className="traineebtnSave1">Update</button>
//     	</div>
	
// 		<div className='col-4 traineecard3'>
// 			<div className='row'>
// 				<div className='col-8'><img src={window.location.origin + '/avatar.png'} alt="Cinque Terre" className='imgtuto'/></div>
// 				<div className='col-2 txtTuto' >Piano tutorial with mr Hadi Makki - jazz piano</div>
// 				<div className='col-2'><img src={window.location.origin + '/false.png'} className='checkbtntrainee' alt='' ></img> </div>
// 			</div>
// 		</div>
// 		</div>

//     </div>   
//   )
// }

// export default ProfileTrainee
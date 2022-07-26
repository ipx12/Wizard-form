import React from 'react';
import { useState } from 'react';
import DatePicker  from 'react-datepicker'; 
import { useFormik } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import './profile.scss';


const ProfileForm = () => {

	const [focus, setFocus] = useState(false);

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			addres: '',
			gender: '',
			birthday: ''
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className="container">
			<div className="profile">
				<form onSubmit={formik.handleSubmit}>
					<div className="column">
						<div className="input-item">
							<div className="label">
								<label htmlFor="firstName">First name</label>
								<span>*</span>
							</div>
							<input
							id="firstName"
							name="firstName"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.firstName}
							/>
						</div>
						<div className="input-item">
							<div className="label">
								<label htmlFor="lastName">Last name</label>
								<span>*</span>
							</div>
							<input
							id="lastName"
							name="lastName"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.lastName}
							/>
						</div>
						<div className="datepicker">
							<div className="label">
								<label htmlFor="birthday">Birth date</label>
								<span>*</span>
							</div>
							<DatePicker 
							placeholderText='DD/MM/YYY'
							selected={formik.values.birthday}
							onChange={formik.handleChange}
							name="birthday"
							id="birthday"/>
						</div>
					</div>
					<div className="column">
						<div className="input-item">
							<div className="label">
								<label htmlFor="email">Email</label>
								<span>*</span>
							</div>
							<input
							id="email"
							name="email"
							type="email"
							onChange={formik.handleChange}
							value={formik.values.email}
							/>
						</div>
						<div className="input-item">
							<div className="label">
								<label htmlFor="addres">Address</label>
								<span>*</span>
							</div>
							<input
							id="addres"
							name="addres"
							type="text"
							onChange={formik.handleChange}
							value={formik.values.addres}
							/>
						</div>
						<div className='label'>Gander</div>
						<div className='radio-group' aria-labelledby="my-radio-group">
							<div className='margin-right'>
								<label 
									className='label'
									style={{color: focus ? '#000' : '#657C9A'}}>
									<input 
										className='radio' 
										type="radio" 
										name="gender" 
										onChange={formik.handleChange}
										value='Male'
										onFocus={() => setFocus(!focus)}
										onBlur={() => setFocus(!focus)}/>
										Male
									</label>
							</div>
							<div>
								<label className='label'>
									<input 
									style={{paddingTop: '20px'}}
									onChange={formik.handleChange}
									className='radio' 
									type="radio" 
									name="gender"
									value='Female'/>
									Female
								</label>
							</div>
						</div>
						<button className='btn-back'>Back</button>
						<button className='btn' type="submit">Forward</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ProfileForm;
import avatar from '../../../resources/img/avatar.svg'

import './accaunt.scss'

import React from 'react';
import { useFormik } from 'formik';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
	const errors = {};
	if (!values.userName) {
		errors.userName = 'Required';
	} else if (values.userName.length > 15) {
		errors.userName = 'Must be 15 characters or less';
	}

	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length > 20) {
		errors.password = 'Must be 20 characters or less';
	}

	if (!values.RepeatPassword) {
		errors.RepeatPassword = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.RepeatPassword)) {
		errors.RepeatPassword = 'Invalid RepeatPassword address';
	}

	return errors;
};


const AccauntForm = () => {

	const formik = useFormik({
		initialValues: {
			userName: '',
			password: '',
			RepeatPassword: '',
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className="container">
			<div className="accaunt">
				<div className="accaunt-photo">
					<img src={avatar} alt="avatar" />
					<span>+ add avatar</span>
				</div>
				<div className="accaung-form">
					<form onSubmit={formik.handleSubmit}>
						<div className='input-item'>
							<div className='label'>
								<label htmlFor="userName">User name</label>
							</div>
							<input
								id="userName"
								name="userName"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.userName}
							/>
							{formik.errors.userName ? <div className='required'>{formik.errors.userName}</div> : null}
						</div>
						<div className='input-item'>
							<div className='label'>
								<label htmlFor="password">Password</label>
							</div>
								<input
								id="password"
								name="password"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
							{formik.errors.password ? <div className='required'>{formik.errors.password}</div> : null}
						</div>
						<div className='input-item'>
							<div className='label'>
								<label htmlFor="RepeatPassword">Repeat Password</label>
							</div>
							<input
								id="RepeatPassword"
								name="RepeatPassword"
								type="RepeatPassword"
								onChange={formik.handleChange}
								value={formik.values.RepeatPassword}
							/>
							{formik.errors.RepeatPassword ? <div className='required'>{formik.errors.RepeatPassword}</div> : null}
						</div>
					
						<button className='btn btn-next' type="submit">Forward</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AccauntForm;
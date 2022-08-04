import React from 'react';
import { useState } from 'react';
import DatePicker  from 'react-datepicker'; 
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import TextInput from '../textInput';


import 'react-datepicker/dist/react-datepicker.css';
import './profile.scss';

// const TextInput = ({label, requaired = false, ...props}) => {
//     const [field, meta] = useField(props);

//     return (
//         <>
//             <div className='label'>
//                 <label htmlFor={props.name}>{label}</label>
//                 {requaired ? (<span>*</span>) : null}
//             </div>
//             <input {...props} {...field}/>
//             {meta.initialTouched && meta.error ? (
//                 <div className='error'>{meta.error}</div>
//             ) : null}
//         </>
//     )
// };



const ProfileForm = () => {

	const [date, setDate] = useState();

	return (
		<div className="container">
			<div className="profile">
				<Formik
					initialValues = {{
						firstName: '',
						lastName: '',
						email: '',
						addres: '',
						gender: '',
						birthday: ''
					}}
					onSubmit = {values => {
						console.log(JSON.stringify(values, null, 2));
					}}
					
				>
					<Form >
						<div className="column">
							<TextInput
								label={'First name'}
								id="firstName"
								name="firstName"
								type="text"
								requaired={true}
							/>
							<TextInput
								label={'Last name'}
								id="lastName"
								name="lastName"
								type="text"
								requaired={true}
							/>
							<div className="datepicker">
								<div className="label">
									<label htmlFor="birthday">Birth date</label>
									<span>*</span>
								</div>
								<DatePicker 
								selected={date}
								placeholderText='DD/MM/YYY'
								onChange={date => {
									setDate(date)
									console.log(date)
								}}
								name="birthday"
								id="birthday"/>
							</div>
						</div>
						<div className="column">
							<TextInput
								label={'Email'}
								id="email"
								name="email"
								type="email"
								requaired={true}
							/>
							<TextInput
								label={'Address'}
								id="addres"
								name="addres"
								type="text"
								requaired={true}
							/>
							<div className='label'>Gander</div>
							<div className='radio-group' aria-labelledby="my-radio-group">
								<div className='margin-right'>
									<label 
										className='label'>
										<Field 
											className='radio' 
											type="radio" 
											name="gender" 
											value='Male'/>
											Male
										</label>
								</div>
								<div>
									<label className='label'>
										<Field 
										style={{paddingTop: '20px'}}
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
					</Form>
				</Formik>
				
			</div>
		</div>
	)
}

export default ProfileForm;
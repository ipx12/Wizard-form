import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { formsSet, formsClear } from '../../../store/idbStore';
import { changeActiveForm } from '../../pages/AddingNewUser/addingNewUserSlice';
import DatePicker  from 'react-datepicker'; 
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

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

const age = 1000 * 60 * 60 * 24 * 365 * 18;

const schema = yup.object({
	firstName: yup.string()
				.required(),
	lastName: yup.string()
				.required(),
	email: yup.string()
				.required(),
	addres: yup.string()
				.required(),
	gender: yup.mixed()
				.required('Chose gender'),
	birthday: yup.mixed()
				.required()
				.test(
					"AGE_VALIDATION",
					"Must be 18+",
					(value) => !value || (value && (Date.now() - value > age))
				)

				
	
})


const ProfileForm = () => {

	const [date, setDate] = useState();
	const dispatch = useDispatch();

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
					onSubmit = {(values, actions) => {
						formsSet('profile', values);
						dispatch(changeActiveForm('contacts'))
						actions.resetForm();
						setDate('');
					}}
					validationSchema={schema}
					
				>
					{({setFieldValue, errors, touched}) => (
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
									className={touched.birthday && errors.birthday ? 'red-border' : null}
									calendarClassName='absolute'
									onChange={value => {
										setDate(value)
										setFieldValue('birthday', `${Date.parse(value)}`)
									}}
									name="birthday"
									id="birthday"/>
									{touched.birthday && errors.birthday ? (
											<div className='error' style={{fontSize: '13px'}}>{errors.birthday}</div>
										) : null}
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
											className='label'
											style={touched.gender && errors.gender ? {color: '#EB5757'} : null}
										>
											<Field 
												className='radio' 
												type="radio" 
												name="gender" 
												value='Male'/>
												Male
											</label>
									</div>
									<div>
										<label 
											className='label' 
											style={touched.gender && errors.gender ? {color: '#EB5757'} : null}
										>
											<Field 
											className='radio' 
											type="radio" 
											name="gender"
											value='Female'/>
											Female
										</label>
									</div>
								</div>
								{touched.gender && errors.gender ? (
											<div className='error' style={{padding: 0, fontSize: '13px'}}>{errors.gender}</div>
										) : null}
								<button 
									type='button'
									className='btn-back'
									onClick={() => {
										formsClear()
										dispatch(changeActiveForm('accaunt'))
									}}
								>
									Back
								</button>
								<button className='btn' type="submit">Forward</button>
							</div>
						</Form>
					)}
				</Formik>
				
			</div>
		</div>
	)
}

export default ProfileForm;
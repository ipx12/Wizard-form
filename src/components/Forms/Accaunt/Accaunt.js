import avatar from '../../../resources/img/avatar.svg'
import { formsSet } from '../../../store/idbStore';
import { selectAll, changeActiveForm } from '../../pages/AddingNewUser/addingNewUserSlice';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import './accaunt.scss'

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import TextInput from '../textInput';

const AccauntForm = () => {

	const [photo, setPhoto] = useState(null);
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	showPhoto();
	// },[])

	// const showPhoto =  async () => {
	// 	await get('accaunt')
	// 		.then(res => setPhoto(res.photo))
	// 		.catch(e => console.log(e))
	// }


	const SUPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]

	const schema = yup.object({
		photoData: yup.mixed()
					.test(
						"FILE_SIZE",
						"Photo size must be less 1mb",
						(value) => !value || (value && value.size <= 1024 * 1024)
					)
					.test(
						"FILE_FORMAT",
						"Wrong photo format",
						(value) => !value || (value && SUPORTED_FORMATS.includes(value?.type))
					),
		userName: yup.string()
					.required(),
		password: yup.string()
					.required(),
					
	})

	return (
		<>
			<div className="container">
				<div className="accaunt">
					<Formik
						initialValues = {{
							userName: '',
							password: '',
							repeatPassword: '',
							photo: '',
							photoData: ''
						}}
						validationSchema = {schema}
						onSubmit = {(values, actions) => {
							if (values.password !== values.repeatPassword) {
								actions.setFieldError('repeatPassword', `Password don't mutch`)
							} else {
								formsSet	('accaunt', values);
								dispatch(changeActiveForm('profile'));
								actions.resetForm();
							}

						}}
						>
						{({setFieldValue, errors}) => (
							<Form>
								<div className="accaunt-photo">
										<div className='accaunt-photo-img'>
											<img 
												src={photo || avatar} 
												alt="avatar" 
												style={errors.photoData ? {border: '2px solid #EB5757'} : null}
											/>
										</div>
										<span>
											<input
												type='file'
												id="file"
												name="file"
												// onChange={(event) => {
												// 	setFieldValue('file', event.target.files[0]);
												// }}
												onChange={(e) => {
													const fileReader = new FileReader();
													fileReader.onload = () => {
													if (fileReader.readyState === 2) {
														setFieldValue('photo', fileReader.result);
														setFieldValue('photoData', e.target.files[0])
														setPhoto(fileReader.result);
													}
													};
													fileReader.readAsDataURL(e.target.files[0]);
												}}
											/>
											<label className='add' htmlFor="file">+ add avatar</label>
											{errors.photoData ? (
												<div className='error' style={{padding: 0, fontSize: '13px'}}>{errors.photoData}</div>
											) : null}
										</span>
										
								</div>
									<div className="accaung-form">
										<TextInput
											label="User name"
											id="userName"
											name="userName"
											type="text"
											autoComplete="off"
										/>
										<TextInput
											label="Password"
											id="password"
											name="password"
											type="text"
											passwordToggle={true}
											autoComplete="off"
										/>
										<TextInput
											label="Repeat Password"
											id="repeatPassword"
											name="repeatPassword"
											type="text"
											passwordToggle={true}
											autoComplete="off"
										/>
									<button className='btn btn-next' type="submit">Forward</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	)
}

export default AccauntForm;
import avatar from '../../../resources/img/avatar.svg'
import { set, get } from '../../../store/idbStore';
import * as yup from 'yup';

import './accaunt.scss'

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import TextInput from '../textInput';

const AccauntForm = () => {

	const [photo, setPhoto] = useState(null);

	// useEffect(() => {
	// 	showPhoto();
	// },[])

	// const showPhoto =  async () => {
	// 	await get('accaunt')
	// 		.then(res => setPhoto(res.photo))
	// 		.catch(e => console.log(e))
	// }

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
						validationSchema = {yup.object({
							userName: yup.string()
									.min(2, "Минимум 2 символа!")
									.required('Обязательное поле'),

						})}
						onSubmit = {(values, actions) => {
							set('accaunt', values);
							actions.resetForm();
							console.log(actions)
						}}
						>
						{({values, setFieldValue }) => (
							<Form>
								<div className="accaunt-photo">
										<img src={photo || avatar} alt="avatar" />
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
											<label htmlFor="file">+ add avatar</label>
										</span>
										
								</div>
									<div className="accaung-form">
										<TextInput
											label="User name"
											id="userName"
											name="userName"
											type="text"
										/>
										<TextInput
											label="Password"
											id="password"
											name="password"
											type="text"
										/>
										<TextInput
											label="Repeat Password"
											id="repeatPassword"
											name="repeatPassword"
											type="repeatPassword"
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
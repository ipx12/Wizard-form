import avatar from '../../../resources/img/avatar.svg'

import { formsSet, usersSet } from '../../../store/idbStore';
import { changeActiveForm, onUserEdit, updateUser, onLastUpdate } from '../../pages/AddingNewUser/addingNewUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import './accaunt.scss'

import React, {  useState } from 'react';
import { Formik, Form} from 'formik';
import TextInput from '../textInput';

const AccauntForm = () => {

	const navigate = useNavigate();

	const [photo, setPhoto] = useState(null);
	const dispatch = useDispatch();
	const {editingUser} = useSelector(state => state.users);

	// useEffect(() => {
	// 	dispatch(onUserEdit({}))
	// },[])

	const isUserEdit = JSON.stringify(editingUser) !== '{}';

	const standartFormValue = {
		userName: '',
		password: '',
		repeatPassword: '',
		photo: '',
		photoData: ''
	}

	const initialValues = isUserEdit ? editingUser : standartFormValue

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
		repeatPassword: yup.string()
						.oneOf([yup.ref('password'), null], 'Passwords must match')
					
	})

	return (
		<>
			<div className="container">
				<div className="accaunt">
					<Formik
						initialValues = {initialValues}
						validationSchema = {schema}
						onSubmit = {(values, actions) => {
							if (isUserEdit) {
								
								usersSet(values.id, onLastUpdate(values));
								dispatch(updateUser(onLastUpdate(values)));
								dispatch(onUserEdit({}));
								navigate('/');
							} else {
								let accauntFormValueWithId = values;
								values.id = uuidv4();
								formsSet	('accaunt', accauntFormValueWithId);
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
												src={ photo || editingUser.photo || avatar} 
												alt="avatar" 
												style={errors.photoData ? {border: '2px solid #EB5757'} : null}
											/>
										</div>
										<span>
											<input
												type='file'
												id="file"
												name="file"
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
									<button className='btn btn-next' type="submit">{isUserEdit ? 'Save' : 'Forward'}</button>
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
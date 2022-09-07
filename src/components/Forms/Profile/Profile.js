import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { formsSet, formsClear, usersSet } from '../../../store/idbStore';
import { changeActiveForm, updateUser, onUserEdit, onLastUpdate } from '../../pages/AddingNewUser/addingNewUserSlice';
import DatePicker  from 'react-datepicker'; 
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import TextInput from '../textInput';

import 'react-datepicker/dist/react-datepicker.css';
import './profile.scss';

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

	const navigate = useNavigate();

	const [date, setDate] = useState();
	const dispatch = useDispatch();

	const {editingUser} = useSelector(state => state.users);

	const isUserEdit = JSON.stringify(editingUser) !== '{}';

	const standartFormValue = {
		firstName: '',
		lastName: '',
		email: '',
		addres: '',
		gender: '',
		birthday: ''
	}

	const initialValues = isUserEdit ? editingUser : standartFormValue;


	return (
		<div className="container">
			<div className="profile">
				<Formik
					initialValues = {initialValues}
					onSubmit = {(values, actions) => {
						if(isUserEdit) {
							usersSet(values.id, onLastUpdate(values))
							dispatch(updateUser(onLastUpdate(values)));
							dispatch(onUserEdit({}));
							navigate('/');
						} else {
							formsSet('profile', values);
							dispatch(changeActiveForm('contacts'))
							actions.resetForm();
							setDate('');
						}
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
									hidden={isUserEdit}
									type='button'
									className='btn-back'
									onClick={() => {
										formsClear()
										dispatch(changeActiveForm('accaunt'))
									}}
								>
									Back
								</button>
								<button className='btn' type="submit">{isUserEdit ? 'Save' : 'Forward'}</button>
							</div>
						</Form>
					)}
				</Formik>
				
			</div>
		</div>
	)
}

export default ProfileForm;
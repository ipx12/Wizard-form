import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveForm, updateUser, onUserEdit, onLastUpdate } from '../../pages/AddingNewUser/addingNewUserSlice';
import { useNavigate } from 'react-router-dom';

import { formsSet, formsDel, usersSet} from '../../../store/idbStore';


import * as yup from 'yup';


import Select from 'react-select';
import TextInput from '../textInput';
import { v4 as uuidv4 } from 'uuid';

import './contacts.scss';

const options = {
    "en": "English",
    "fr": "French",
    "es": "Spanish",
    "ar": "Arabic",
    "cmn": "Mandarin",
    "ru": "Russian",
    "pt": "Portuguese",
    "de": "German",
    "ja": "Japanese",
    "hi": "Hindi",
    "ms": "Malay",
    "fa": "Persian",
    "sw": "Swahili",
    "ta": "Tamil",
    "it": "Italian",
    "nl": "Dutch",
    "bn": "Bengali",
    "tr": "Turkish",
    "vi": "Vietnamese",
    "pl": "Polish",
    "jv": "Javanese",
    "pa": "Punjabi",
    "th": "Thai",
    "ko": "Korean"
}

const languges = []

for (let key in options) {
    languges.push({
        value: key,
        label: options[key]
    })
}

const schema = yup.object({
    company: yup.string()
                .required(),
    github: yup.string(),
    facebook: yup.string(),
    languge: yup.string()
                .required(),
    phone1: yup.string()
})


const mask = '+38 (099) 999-99-99'

const ContactsForm = () => {

    const {editingUser} = useSelector(state => state.users);
    const isUserEdit = JSON.stringify(editingUser) !== '{}';
    const navigate = useNavigate();

    const [phoneAmount, setPhoneAmount] = useState(1);
    const dispatch = useDispatch();

    const standartFormValue = { 
        company: '', 
        github: '',
        facebook: '',
        fax: '',
        languge: '',
        phone1: '',
        phone2: '',
        phone3: ''
    }

	const initialValues = isUserEdit ? editingUser : standartFormValue


    const createPhoneNumber = (times) => {
        const id = uuidv4();
    
        const arr = [];

        for (let i = 0; i < times; i++) {
            arr.push('stucture')
        }
    
        const phone = arr.map((i, index) => {
            return (
                <div key={index} className='phone__block'>
                    <TextInput
                        placeholder={'+38 (066) 888 88 88'}
                        label={`Phone#${index + 1}`}
                        name={`phone${index + 1}`}
                        type="phone"
                        mask={mask}
                    />
                    <div style={phoneAmount > 1 ? {display: 'block'} : {display: 'none'} } className='phone__block-delete'
                        onClick={() => {
                            setPhoneAmount(phoneAmount - 1);
                        }}
                    >
                        <div></div>
                    </div>
                </div>
            )
        })
        
        return phone
    }

    const telephones = createPhoneNumber(phoneAmount)


    return (
        <div className="container">
            <div className="contacts">
                <Formik
                    initialValues={initialValues}
                    validationSchema = {schema}
                    onSubmit={ (values, actions) => {
                        if(isUserEdit) {
                            usersSet(values.id, onLastUpdate(values))
                            dispatch(updateUser(onLastUpdate(values)));
                            dispatch(onUserEdit({}));
                            navigate('/');
                        } else {
                            formsSet('contacts', values);
                            dispatch(changeActiveForm('capabilities'));
                            actions.resetForm();
                        }
                    }}
                    >
                    {({setFieldValue, errors, values, touched}) => (
                        <Form>
                            <div className="wrapper">
                                <div className="column">
                                    <TextInput
                                        label="Company"
                                        name="company"
                                        type="text"
                                        />
                                    <TextInput
                                        requaired={true}
                                        label="Github link"
                                        name="github"
                                        type="text"
                                    />
                                    <TextInput
                                        requaired={true}
                                        label="Facebook link"
                                        name="facebook"
                                        type="text"
                                    />
                                    <div className='label'>
                                        <label htmlFor='language'>Main language</label>
                                    </div>
                                    <Select
                                        name='languge'
                                        options={languges}
                                        className="basic-select"
                                        classNamePrefix="select"
                                        placeholder='En'
                                        onChange={(e) => {
                                            setFieldValue('languge', e.value)
                                        }}
                                    />
                                    {errors.languge && touched.languge ? (
                                            <div className='error'>{errors.languge}</div>
                                        ) : null}
                                </div>
                                <div className="column right">
                                    <TextInput
                                        requaired={true}
                                        label="Fax"
                                        name="fax"
                                        type="text"
                                    />
                                    {telephones}
                                    <div className='add' onClick={() => {
                                        if (phoneAmount < 3) {
                                            setPhoneAmount(() => phoneAmount + 1);
                                            console.log(values)
                                        }
                                    }}>+ add phone number</div>
                                    <button 
                                        hidden={isUserEdit}
                                        type='button'
                                        className='btn-back'
                                        onClick={() => {
                                            formsDel('contacts')
                                            dispatch(changeActiveForm('profile'))
                                        }}
                                    >
                                        Back
                                    </button>
                                    <button className='btn' type="submit">{isUserEdit ? 'Save' : 'Forward'}</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ContactsForm;
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import TextInput from '../textInput';

import './contacts.scss';

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

const ContactsForm = () => {


    return (
        <div className="container">
            <div className="contacts">
                <Formik
                    initialValues={{ 
                        company: '', 
                        github: '',
                        facebook: '',
                        fax: '',
                        phone1: '',
                        phone2: ''

                     }}
                    onSubmit={ values => {
                        setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        }, 400);
                    }}
                    >
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
                                <Field
                                    id="language"
                                    name="language"
                                    as='select'>
                                        <option value="">Eng</option>
                                        <option value="English USA">English USA</option>
                                        <option value="English UK">English UK</option>
                                        <option value="English UK">English UK</option>
                                        <option value="English UK">English UK</option>
                                        <option value="English UK">English UK</option>
                                        <option value="English UK">English UK</option>
                                </Field>


                            </div>
                            <div className="column right">
                                <TextInput
                                    requaired={true}
                                    label="Fax"
                                    name="fax"
                                    type="text"
                                />
                                <TextInput
                                    placeholder={'+38 (066) 888 88 88'}
                                    label="Phone #1"
                                    name="Phone1"
                                    type="phone"
                                />
                                <TextInput
                                    className='no_mb'
                                    label="Phone #2"
                                    name="Phone2"
                                    type="phone"
                                />
                                <div className='add'>+ add phone number</div>
                                <button className='btn-back'>Back</button>
						        <button className='btn' type="submit">Forward</button>
                            </div>
                        </div>
                    </Form>
                    
                </Formik>
            </div>
        </div>
    )
}

export default ContactsForm;
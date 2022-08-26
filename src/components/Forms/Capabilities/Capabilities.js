import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { formsSet, formsClear } from '../../../store/idbStore';
import { getAllFormsValues, changeActiveForm } from '../../pages/AddingNewUser/addingNewUserSlice';

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


import Select from 'react-select';

import './capabilities.scss';


const options = [
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
    { value: 'jQuery', label: 'jQuery' },
    { value: 'NodeJS', label: 'NodeJS' },
    { value: 'Python', label: 'Python' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Ruby On Rails', label: 'Ruby On Rails' },
    { value: 'SQL', label: 'SQL' },
    { value: 'BackboneJS', label: 'BackboneJS' },
    { value: 'Web Design', label: 'Web Design' },
    { value: 'Project management', label: 'Project management' },
    { value: 'Git', label: 'Git' },
    { value: 'Docker', label: 'Docker' },
    { value: 'AWS Lambda', label: 'AWS Lambda' },
    { value: 'Firebase', label: 'Firebase' },
]

const schema = yup.object({
    skills: yup.array()
                .min(3, 'Minimum 3 skills'),
    area: yup.string()
        .max(300, 'Max 300 simbols')
    //             .test(
    //                 "FILE_FORMAT",
    //                 "Wrong photo format",
    //                 (value) => !value || (value && SUPORTED_FORMATS.includes(value?.type))
    //             ),
    // userName: yup.string()
    //             .required(),
    // password: yup.string()
    //             .required(),
                
})


const CapabilitiesForm = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="capabilities">
                <Formik
                    initialValues={{
                        hobbies: [],
                        skills: [],
                        area: ''
                    }}
                    validationSchema={schema}
                    onSubmit = {(values, actions) => {
                        formsSet('capabilities', values);
                        dispatch(getAllFormsValues());
                        actions.resetForm();
                        formsClear();
                        navigate('/');
                        dispatch(changeActiveForm('accaunt'));
                    }}
                >
                    {({setFieldValue, errors, touched}) => (
                        <Form>
                            <div className="column">
                                <div className='label'>
                                    <label htmlFor='skills'>Skills</label>
                                </div>
                                <Select
                                    name='skills'
                                    closeMenuOnSelect={false}
                                    isMulti
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    placeholder=''
                                    onChange={(e) => setFieldValue('skills' , e.map(skill => skill.value))}
                                />
                                {touched.skills && errors.skills ? (
											<div className='error'>{errors.skills}</div>
										) : null}
                                <div className='label label-mt'>
                                    <label  htmlFor="area">Additional information</label>
                                </div>
                                <Field
                                    as="textarea"
                                    name="area"
                                    placeholder='Guitar, guitar and guitar again. I’m fall in love with it.'
                                >
                                </Field>
                                {touched.area && errors.area ? (
											<div className='error'>{errors.area}</div>
										) : null}
                            </div>
                            <div className="column">
                                <div className='label'>My hobbies</div>
                                <div role="group" aria-labelledby="checkbox-group">
                                    <div className="checkbox">
                                        <Field type="checkbox" value="Art" id="art" name="hobbies"  />
                                        <label className='label' htmlFor="art">Art</label>
                                    </div>
                                    <div className="checkbox">
                                        <Field type="checkbox" value="Sport" id="sport" name="hobbies"  />
                                        <label className='label' htmlFor="sport">Sport, fitness, aerobica and staff like that</label>
                                    </div>
                                    <div className="checkbox">
                                        <Field type="checkbox" value="Games" id="games" name="hobbies"  />
                                        <label className='label' htmlFor="games">I just want to play games, I’m not living in this life</label>
                                    </div>
                                    <div className="checkbox">
                                        <Field type="checkbox" value="Nothing" id="nothing" name="hobbies"  />
                                        <label className='label' htmlFor="nothing">I’m a female... I’m doing nothing. Every day.</label>
                                    </div>
                                    <div className="checkbox">
                                        <Field type="checkbox" value="Guitar" id="guitar" name="hobbies"  />
                                        <label className='label' htmlFor="guitar">Guitar, guitar and guitar again. I’m fall in love with it.</label>
                                    </div>
                                    <div className="checkbox">
                                        <Field type="checkbox" value="Wtf" id="wtf" name="hobbies"  />
                                        <label className='label' htmlFor="wtf">WTF is “hobbies”???</label>
                                    </div>
                                </div>
                                <button 
                                    type='button'
									className='btn-back'
									onClick={() => {
                                        dispatch(changeActiveForm('contacts'))
                                    }}
								>
									Back
								</button>
                                <button className='btn btn-finish' type="submit">Finish</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CapabilitiesForm;
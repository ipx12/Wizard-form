import { useState } from 'react';
import { Formik, Form, Field } from 'formik';


import Select from 'react-select';

import './capabilities.scss';


const options = [
    { value: 'skill', label: 'skill' },
    { value: 'loooong skill name', label: 'loooong skill name' },
    { value: 'aerobica', label: 'aerobica' },
    { value: 'art director', label: 'art director' },
    { value: 'art director', label: 'art director' },
    { value: 'art director', label: 'art director' },
    { value: 'art director', label: 'art director' },
]


const CapabilitiesForm = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="container">
            <div className="capabilities">
                <Formik
                    initialValues={{
                        checked: [],
                        skills: [],
                        area: ''
                    }}
                    onSubmit = {values => {
                        console.log(JSON.stringify(values, null, 2));
                        console.log(selectedOption)
                        selectedOption.map(item => console.log(item.value))

                    }}
                >
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
                                onChange={setSelectedOption}
                            />
                            <div className="select">
                            </div>
                            <div className='label label-mt'>
                                <label  htmlFor="area">Additional information</label>
                            </div>
                            <Field
                                as="textarea"
                                name="area"
                                placeholder='Guitar, guitar and guitar again. I’m fall in love with it.'
                            >
                            </Field>
                        </div>
                        <div className="column">
                            <div className='label'>My hobbies</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <div className="checkbox">
                                    <Field type="checkbox" value="Art" id="art" name="skills"  />
                                    <label className='label' htmlFor="art">Art</label>
                                </div>
                                <div className="checkbox">
                                    <Field type="checkbox" value="Sport" id="sport" name="skills"  />
                                    <label className='label' htmlFor="sport">Sport, fitness, aerobica and staff like that</label>
                                </div>
                                <div className="checkbox">
                                    <Field type="checkbox" value="Games" id="games" name="skills"  />
                                    <label className='label' htmlFor="games">I just want to play games, I’m not living in this life</label>
                                </div>
                                <div className="checkbox">
                                    <Field type="checkbox" value="Nothing" id="nothing" name="skills"  />
                                    <label className='label' htmlFor="nothing">I’m a female... I’m doing nothing. Every day.</label>
                                </div>
                                <div className="checkbox">
                                    <Field type="checkbox" value="Guitar" id="guitar" name="skills"  />
                                    <label className='label' htmlFor="guitar">Guitar, guitar and guitar again. I’m fall in love with it.</label>
                                </div>
                                <div className="checkbox">
                                    <Field type="checkbox" value="Wtf" id="wtf" name="skills"  />
                                    <label className='label' htmlFor="wtf">WTF is “hobbies”???</label>
                                </div>
                            </div>
                            <button className='btn-back'>Back</button>
                            <button className='btn btn-finish' type="submit">Finish</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default CapabilitiesForm;
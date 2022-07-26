import React from 'react';

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
    return (
        <div className="container">
            <div className="capabilities">
                <div className="column">
                    <div>
                        <label className='label' htmlFor="skills">Skills</label>
                    </div>
                    <Select
                        name='skills'
                        closeMenuOnSelect={false}
                        isMulti
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder=''
                    />
                    <div className="select">
                        {/* <CustomClearIndicator/> */}
                    </div>
                    <div className='label label-mt'>
                        <label  htmlFor="area">Additional information</label>
                    </div>
                    <textarea
                        name="area"
                        id="" cols="30" 
                        rows="10"
                        placeholder='Guitar, guitar and guitar again. I’m fall in love with it.'
                    >

                    </textarea>
                </div>
                <div className="column">
                    <div className='label'>My hobbies</div>
                    <div class="squaredOne">
                        <input type="checkbox" value="None" id="art" name="art"  />
                        <label className='label' for="art">Art</label>
                    </div>
                    <div class="squaredOne">
                        <input type="checkbox" value="None" id="sport" name="sport"  />
                        <label className='label' for="sport">Sport, fitness, aerobica and staff like that</label>
                    </div>
                    <div class="squaredOne">
                        <input type="checkbox" value="None" id="games" name="games"  />
                        <label className='label' for="games">I just want to play games, I’m not living in this life</label>
                    </div>
                    <div class="squaredOne">
                        <input type="checkbox" value="None" id="nothing" name="nothing"  />
                        <label className='label' for="nothing">I’m a female... I’m doing nothing. Every day.</label>
                    </div>
                    <div class="squaredOne">
                        <input type="checkbox" value="None" id="guitar" name="guitar"  />
                        <label className='label' for="guitar">Guitar, guitar and guitar again. I’m fall in love with it.</label>
                    </div>
                    <div class="squaredOne">
                        <input type="checkbox" value="None" id="wtf" name="wtf"  />
                        <label className='label' for="wtf">WTF is “hobbies”???</label>
                    </div>
                    <button className='btn-back'>Back</button>
					<button className='btn btn-finish' type="submit">Finish</button>
                </div>
            </div>
        </div>
    )
}

export default CapabilitiesForm;
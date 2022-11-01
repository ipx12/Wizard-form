import { useField } from "formik";
import { useState } from "react";
import InputMask from 'react-input-mask';

import eye from '../../resources/icons/eye.png';
import eyeStrike from '../../resources/icons/eye_strike.png';

const TextInput = ({label, requaired = false, passwordToggle = false, mask = false, ...props}) => {
    const [field, meta] = useField(props);
    const [toggleDisplayPassword, setToggleDisplayPassword] = useState(passwordToggle);

    const icon = toggleDisplayPassword ? eye : eyeStrike;

	const style = meta.error && meta.touched ? {border: '1px solid #EB5757'} : null;

    return (
        <>
            <div className='label'>
                <label htmlFor={props.name}>
                    {label}
                    {passwordToggle ? (
                            <div className="eye"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setToggleDisplayPassword(!toggleDisplayPassword)
                                }}
                            >
                                <img src={icon} alt="eye" />
                            </div>
                        ) : null}
                </label>
                {requaired ? (<span>*</span>) : null}
            </div>
            {mask ? (
                <InputMask 
                mask={mask} 
                maskChar="X"
                {...props} 
                {...field} 
                style={style}
                 />
            ) : (
                <input 
                {...props} 
                {...field} 
                style={style}
                type={toggleDisplayPassword ? 'password' : 'text'}
                />
            )}
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}

        </>
    )
};

export default TextInput;
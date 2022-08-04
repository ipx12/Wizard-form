import { useField } from "formik";


const TextInput = ({label, requaired = false, ...props}) => {
    const [field, meta] = useField(props);

	const style = meta.error && meta.touched ? {border: '1px solid #EB5757'} : null;

    return (
        <>
            <div className='label'>
                <label htmlFor={props.name}>{label}</label>
                {requaired ? (<span>*</span>) : null}
            </div>
            <input {...props} {...field} style={style}/>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
};

export default TextInput;
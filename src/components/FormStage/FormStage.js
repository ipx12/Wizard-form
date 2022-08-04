import './formStage.scss';

const FormStage = () => {
    return (
        <div className="container">
            <div className="stage">
                <div className="stage-name active">1. Accaunt</div>
                <div className="stage-name">2. Profile</div>
                <div className="stage-name">3. Contacts</div>
                <div className="stage-name ">4. Capabilities</div>
            </div>
            <div className='continue'>
                <div className='continue-text'>
                    You have an unsaved user data. Do you want to complete it?<a href="#">Continue</a>
                </div>
                <div className='continue-close'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default FormStage;
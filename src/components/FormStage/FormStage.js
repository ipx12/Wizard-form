import './formStage.scss';

const FormStage = () => {
    return (
        <div className="container">
            <div className="stage">
                <div className="stage-name">1. Accaunt</div>
                <div className="stage-name">2. Profile</div>
                <div className="stage-name">3. Contacts</div>
                <div className="stage-name active">4. Capabilities</div>
            </div>
        </div>
    )
}

export default FormStage;
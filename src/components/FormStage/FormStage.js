import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect, useState, useCallback } from "react";
import { formsKeys } from "../../store/idbStore";
import { changeActiveForm } from "../pages/AddingNewUser/addingNewUserSlice";


import './formStage.scss';

const FormStage = () => {

    const {activeForm} = useSelector(state => state.users)
    const [nameFormInCache, setNameFormInCache] = useState([])
    const dispatch = useDispatch();

    const formsList = ['accaunt', 'profile', 'contacts', 'capabilities'];

    useEffect(() => {
        formsKeys()
            .then(res => {
                setNameFormInCache(formsList.filter((_, index) => index === res.length))
            })
    },[])

    console.log(nameFormInCache)

    const activeClass = (active) => {
        if (active === activeForm) {
            return 'stage-name active'
        } else {
            return 'stage-name'
        }
    }

    const continuee = useCallback(() => {
        if (nameFormInCache.length === 0 || nameFormInCache[0] === 'accaunt' || activeForm !== 'accaunt' ) {
            return
        } else {
            return (
                <div className='continue'>
                    <div className='continue-text'>
                        You have an unsaved user data. Do you want to complete it?
                        <span onClick={() => dispatch(changeActiveForm(nameFormInCache[0]))}>
                            Continue
                        </span>
                    </div>
                    <div 
                        className='continue-close'
                        onClick={() => setNameFormInCache([])}
                    >
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )
        }

    })

    const renderContinue = continuee();

    return (
        <div className="container">
            <div className="stage">
                <div className={activeClass('accaunt')}>1. Accaunt</div>
                <div className={activeClass('profile')}>2. Profile</div>
                <div className={activeClass('contacts')}>3. Contacts</div>
                <div className={activeClass('capabilities')}>4. Capabilities</div>
            </div>
            {renderContinue}
        </div>
    )
}

export default FormStage;
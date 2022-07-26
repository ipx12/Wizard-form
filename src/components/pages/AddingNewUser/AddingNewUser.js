import AccauntForm from "../../Forms/Accaunt/Accaunt";
import ContactsForm from "../../Forms/Contacts/Contacts";
import ProfileForm from "../../Forms/Profile/Profile";
import FormStage from "../../FormStage/FormStage";
import Header from "../../Header/Header"
import CapabilitiesForm from '../../Forms/Capabilities/Capabilities';
import './addingNewUser.scss';


const AddingNewUser = () => {
    return (
        <>
            <Header/>
            <h2 className="pageName">Adding new user</h2>
            <FormStage/>
            {/* <AccauntForm/> */}
            {/* <ProfileForm/> */}
            {/* <ContactsForm/> */}
            <CapabilitiesForm/>
        </>
    )
}

export default AddingNewUser;
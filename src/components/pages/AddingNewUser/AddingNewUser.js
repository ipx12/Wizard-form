import { useSelector } from "react-redux/es/exports";

import AccauntForm from "../../Forms/Accaunt/Accaunt";
import ContactsForm from "../../Forms/Contacts/Contacts";
import ProfileForm from "../../Forms/Profile/Profile";
import FormStage from "../../FormStage/FormStage";
import Header from "../../Header/Header"
import CapabilitiesForm from '../../Forms/Capabilities/Capabilities';


const AddingNewUser = () => {

	const {activeForm} = useSelector(state => state.users)

	const renderForm = () => {
		switch(activeForm) {
			case 'accaunt':
				return <AccauntForm/>
			case 'profile':
				return <ProfileForm/>
			case 'contacts':
				return <ContactsForm/>
			case 'capabilities':
				return <CapabilitiesForm/>
			default:
				return
		}
	}

	const form = renderForm();

	return (
		<>
			<Header/>
			<h2 className="pageName">Adding new user</h2>
			<FormStage/>
			{form}
		</>
	)
}

export default AddingNewUser;
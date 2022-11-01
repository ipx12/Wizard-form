import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AccauntList from '../pages/AccountList/AccountList';
import AddingNewUser from '../pages/AddingNewUser/AddingNewUser';
import UserProfile from '../pages/UserProfile/UserProfile';
import UserEdit from "../pages/UserEdit/UserEdit";
import Page404 from "../pages/404"


import '../../style/style.scss';
import '../../style/buttons.scss';


function App() {
	return (
		<BrowserRouter>
				<Routes>
					<Route path="/Wizard-form" element={<AccauntList />}/>
					<Route path="/Wizard-form/useradd" element={<AddingNewUser />}/>
					<Route path="/Wizard-form/userdata/:userId" element={<UserProfile />}/>
					<Route path="/Wizard-form/useredit/:formName" element={<UserEdit />}/>
					<Route path="*" element={<Page404/>}/>
				</Routes>
		</BrowserRouter>

	);
}

export default App;

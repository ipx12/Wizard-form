import addUser from '../../resources/icons/add_users.png'
import usersList from '../../resources/icons/list_users.png'
import logo from '../../resources/icons/Logo.png'

import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="users">
                    <div className="users-add">
                        <img src={addUser} alt="addUser" />
                        <span>Add new user</span>
                    </div>
                    <div className="users-list">
                        <img src={usersList} alt="users" />
                        <span>List of users</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
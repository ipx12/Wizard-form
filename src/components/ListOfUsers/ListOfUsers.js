import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, selectAll } from "../pages/AddingNewUser/addingNewUserSlice";
import ClipLoader from "react-spinners/ClipLoader";

import './listOfUsers.scss';

import photo from '../../resources/img/Ellipse.png';
import edit from '../../resources/icons/userList/Edit.png'
import close from '../../resources/icons/userList/Close.png'


const ListOfUsers = () => {

    const dispatch = useDispatch();
    const loadingStatus = useSelector(state => state.users.usersLoadingStatus)

    const users = useSelector(selectAll)

    const spinnerStyle = {
        position: 'absolute',
        left: '50%',
        top: '80px'
    }

    useEffect(() => {
        dispatch(getAllUsers())
    },[])

    console.log(users)

    const listOfUsers = () => {
        const returnedUsers = []

        if (users.length !== 0) {
            returnedUsers = users.map((user) => {
                return (
                    <tr className='table__list' key={user.id}>
                        <td>
                            <div className="wrapper">
                                <div className='table-photo'>
                                    <img src={user.photo === '' ? photo : user.photo} alt="photo" />
                                </div>
                                <div className="table__user">
                                    <div className="table__user-name">{user.firstName}</div>
                                    <div className="table__user-title">{user.userName}</div>
                                </div>
                            </div>
                        </td>
                        <td>{user.company}</td>
                        <td>{user.email}</td>
                        <td className='upd'>
                            <div>3 month ago</div>
                            <div className="btns">
                                <div className="btns-edit">
                                    <Link to="/useredit">
                                        <img src={edit} alt="edit" />
                                    </Link>
                                </div>
                                <div className="btns-delete">
                                    <img src={close} alt="close" />
                                </div>
                            </div>
                        </td>
                    </tr>
                )
            })
        } else {
            return (
                <tr>
                    <td colSpan={4}>
                        <div className="table-nouser">No users here :(</div>
                        <Link to="/useradd">
                            <div className="table-create">Create new user</div>
                        </Link>
                    </td>
                </tr>
            )
        }

        return returnedUsers
    }

    const renderElements = loadingStatus === 'loading' ? <ClipLoader cssOverride={spinnerStyle}/> : listOfUsers();

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr className='table-head'>
                        <th className="table-name">name</th>
                        <th className="table-company">company</th>
                        <th className="table-contacts">contacts</th>
                        <th className="table-update">last update</th>
                    </tr>
                </thead>
                <tbody>
                    {renderElements}
                </tbody>
            </table>
        </div>
    )
}
 
export default ListOfUsers;
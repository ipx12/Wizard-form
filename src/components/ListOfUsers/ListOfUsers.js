import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, selectAll } from "../pages/AddingNewUser/addingNewUserSlice";

import User from "../User/User";
import ClipLoader from "react-spinners/ClipLoader";

import './listOfUsers.scss';


const ListOfUsers = () => {

    const dispatch = useDispatch();
    const loadingStatus = useSelector(state => state.users.usersLoadingStatus)

    const users = useSelector(selectAll)

    const spinnerStyle = {
        display: 'block',
        margin: '80px auto 0 auto',
    }

    useEffect(() => {
        dispatch(getAllUsers())
    },[])

    const listOfUsers = () => {
        let returnedUsers = []

        if (users.length !== 0) {
            returnedUsers = users.map((user) => {
                return (
                    <User user={user} key={user.id}/>
                )
            })
        } else {
            return (
                <div className="table__nouser">
                    <div className="table__nouser-title">No users here :(</div>
                    <Link to="/useradd">
                        <div className="table-create">Create new user</div>
                    </Link>
                </div>
            )
        }

        return returnedUsers
    }

    const Clip = () => {
        return (
            <ClipLoader cssOverride={spinnerStyle}/>
        )
    }

    const renderElements = loadingStatus === 'loading' ? Clip() : listOfUsers();

    return (
        <div className="container">
            <div className="table">
                <div className='table-head'>
                    <div className="table-name">name</div>
                    <div className="table-company">company</div>
                    <div className="table-contacts">contacts</div>
                    <div className="table-update">last update</div>
                </div>
                <div className="users">
                        {renderElements}
                </div>
            </div>
        </div>
    )
}
 
export default ListOfUsers;
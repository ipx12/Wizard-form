
import './listOfUsers.scss';

import photo from '../../resources/img/Ellipse.png';
import edit from '../../resources/icons/userList/Edit.png'
import close from '../../resources/icons/userList/Close.png'

const options = [
    {
        name: 'Maxim Morozov',
        company: 'company',
        contacts: 'my_email233123123123@gmail.com',
        update: '3 month ago'
    },
    {
        name: 'Maxim Morozov',
        company: 'company',
        contacts: 'my_email233123123123@gmail.com',
        update: '3 month ago'
    },
    {
        name: 'Maxim Morozov',
        company: 'company',
        contacts: 'my_email233123123123@gmail.com',
        update: '3 month ago'
    },
    {
        name: 'Maxim Morozov',
        company: 'company',
        contacts: 'my_email233123123123@gmail.com',
        update: '3 month ago'
    },
    {
        name: 'Maxim Morozov',
        company: 'company',
        contacts: 'my_email233123123123@gmail.com',
        update: '3 month ago'
    },
]

const ListOfUsers = () => {
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
                    <tr className='table__list'>
                        <td>
                            <div className="wrapper">
                                <div className='table-photo'>
                                    <img src={photo} alt="a" />
                                </div>
                                <div className="table__user">
                                    <div className="table__user-name">Maxim Morozov</div>
                                    <div className="table__user-title">username</div>
                                </div>
                            </div>
                        </td>
                        <td>Company name</td>
                        <td>my_email233123123123@gmail.com</td>
                        <td className='upd'>
                            <div>3 month ago</div>
                            <div className="btns">
                                <div className="btns-edit">
                                    <img src={edit} alt="edit" />
                                </div>
                                <div className="btns-delete">
                                    <img src={close} alt="close" />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className='table__list'>
                        <td>
                            <div className="wrapper">
                                <div className='table-photo'>
                                    <img src={photo} alt="a" />
                                </div>
                                <div className="table__user">
                                    <div className="table__user-name">Maxim Morozov</div>
                                    <div className="table__user-title">username</div>
                                </div>
                            </div>
                        </td>
                        <td>Company name</td>
                        <td>my_email233123123123@gmail.com</td>
                        <td className='upd'>
                            <div>3 month ago</div>
                            <div className="btns">
                                <div className="btns-edit">
                                    <img src={edit} alt="edit" />
                                </div>
                                <div className="btns-delete">
                                    <img src={close} alt="close" />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
 
export default ListOfUsers;
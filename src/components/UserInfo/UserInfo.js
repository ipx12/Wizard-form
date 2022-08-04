
import photo from '../../resources/img/bigphoto.png';
import edit from '../../resources/icons/Edit_dark.png';

import './userInfo.scss';

const UserInfo = () => {
    return (
        <div className="container">
            <div className="info">
                <div className="info__photo">
                    <div className="info__photo-item">
                        <img src={photo} alt="img" />
                    </div>
                </div>
                <div className="info__data">

                    <div className="info__data__block">
                        <div className="info__data__block__link">
                            <div>Accaunt</div>
                            <div className="info__data__block__link-icon">
                                <img src={edit} alt="edit" />
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="flex">
                                <div className="item">User name:</div>
                                <div className="value">username</div>
                            </div>
                            <div className="flex">
                                <div className="item">password</div>
                                <div className="value">******</div>
                            </div>
                        </div>
                    </div>

                    <div className="info__data__block">
                        <div className="info__data__block__link">
                            <div>Personal</div>
                            <div className="info__data__block__link-icon">
                                <img src={edit} alt="edit" />
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="flex">
                                <div className="item">First name:</div>
                                <div className="value">Maxim</div>
                            </div>
                            <div className="flex">
                                <div className="item">Last name:</div>
                                <div className="value">Morozov</div>
                            </div>
                            <div className="flex">
                                <div className="item">Birth date:</div>
                                <div className="value">13.11.1997</div>
                            </div>
                            <div className="flex">
                                <div className="item">Email:</div>
                                <div className="value">my_email@gmail.com</div>
                            </div>
                            <div className="flex">
                                <div className="item">Adress:</div>
                                <div className="value">Street TRUE, 130, 12</div>
                            </div>
                        </div>
                    </div>

                    <div className="info__data__block">
                        <div className="info__data__block__link">
                            <div>Contacts</div>
                            <div className="info__data__block__link-icon">
                                <img src={edit} alt="edit" />
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="flex">
                                <div className="item">Company:</div>
                                <div className="value">Company name</div>
                            </div>
                            <div className="flex">
                                <div className="item">Fax:</div>
                                <div className="value">asd123dsf</div>
                            </div>
                            <div className="flex">
                                <div className="item">Facebook Link:</div>
                                <div className="value">facebook.com/</div>
                            </div>
                            <div className="flex">
                                <div className="item">Phone #1:</div>
                                <div className="value">+38 (066) 123 123 11</div>
                            </div>
                            <div className="flex">
                                <div className="item">Phone #2:</div>
                                <div className="value">+38 (066) 123 123 11</div>
                            </div>
                        </div>
                    </div>

                    <div className="info__data__block">
                        <div className="info__data__block__link">
                            <div>Capabilities</div>
                            <div className="info__data__block__link-icon">
                                <img src={edit} alt="edit" />
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="flex">
                                <div className="item">Skills:</div>
                                <div className="value">Skill 1, Skill 2, Skill 3, Skill 4, Skill 5, Skill 6, Skill 7, Skill 8</div>
                            </div>
                            <div className="flex">
                                <div className="item">Hobies:</div>
                                <div className="value">Sport, fitness, aerobica and staff like that <br/><br/>   I just want to play games, I’m not living in this life</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;
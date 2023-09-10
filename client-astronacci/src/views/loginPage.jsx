import "../styles/loginAndRegisterPage.css";
import { Link } from "react-router-dom";
import Wallpaper from '../assets/login-register-wallpaper.jpg';

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginUser } from "../store/actions/actionCreator";

export default function loginPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    // 1. State (Menampung Data)
    const [dataUser, userLogin] = useState({
        email: '',
        password: ''
    })

    // 2. Handler onChange
    const handlerEmail = (event) => {
        userLogin({
            email: event.target.value,
            password: dataUser.password
        })
    }

    const handlerPassword = (event) => {
        userLogin({
            email: dataUser.email,
            password: event.target.value
        })
    }

    // 3. Kirim ke server
    const handlerSubmit = async (event) => {
        event.preventDefault();
        try {
            await dispatch(LoginUser(dataUser));
            setTimeout(() => {navigate("/");}, 0);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <selection className="main-section">
                <div className="left-section no-wrap">
                    <form className="form-section" onSubmit={handlerSubmit}>
                        <div>
                            <p className="top-line">Selamat Datang</p>
                        </div>

                        <div>
                            <p className="top-line">Silahkan masukan data anda untuk login</p>
                        </div>

                        <div className="input-form">
                            <input type="text" placeholder="masukan email anda" onChange={handlerEmail} value={dataUser.email} />
                        </div>

                        <div className="input-form">
                            <input type="password" placeholder="masukan password anda" onChange={handlerPassword} value={dataUser.password}/>
                        </div>

                        <button className="button-submit">Log in</button>

                        <div>
                            <p className="bottom-line">Belum punya akun ? <Link to={'/register'}>register</Link> disini</p>
                        </div>
                    </form>
                </div>

                <div className="right-section">
                    <img src={Wallpaper} />
                </div>
            </selection>
        </>
    )
}
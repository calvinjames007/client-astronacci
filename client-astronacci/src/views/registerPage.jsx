import "../styles/loginAndRegisterPage.css"
import { Link } from "react-router-dom";
import Wallpaper from '../assets/login-register-wallpaper.jpg';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNewUser } from "../store/actions/actionCreator";

export default function registerPage() {
    const dispatch = useDispatch()

    // 1. State (Menampung data dari form sebelum dikirim ke server)
    const [addUser, setAddUser] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    })

    // 2. Handler onChange
    const handlerEmail = (event) => {
        setAddUser({
            email: event.target.value,
            firstName: addUser.firstName,
            lastName: addUser.lastName,
            password: addUser.password
        })
    }

    const handlerFirstName = (event) => {
        setAddUser({
            email: addUser.email,
            firstName: event.target.value,
            lastName: addUser.lastName,
            password: addUser.password
        })
    }

    const handlerLastName = (event) => {
        setAddUser({
            email: addUser.email,
            firstName: addUser.firstName,
            lastName: event.target.value,
            password: addUser.password
        })
    }

    const handlerPassword = (event) => {
        setAddUser({
            email: addUser.email,
            firstName: addUser.firstName,
            lastName: addUser.lastName,
            password: event.target.value
        })
    }

    // 3. Add to server (in other word, send to server or submit)
    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(AddNewUser(addUser))
    }

    return(
        <>
            <section className="main-section">
                <div className="left-section">
                    <form className="form-section" onSubmit={handlerSubmit}>
                        <div>
                            <p className="top-line">Selamat Datang</p>
                        </div>

                        <div>
                            <p className="top-line">Silahkan masukan data anda pada kolom dibawah untuk registrasi</p>
                        </div>

                        <div className="input-form">
                            <input type="text" placeholder="masukan email anda" onChange={handlerEmail} value={addUser.email} />
                        </div>

                        <div className="input-form">
                            <input type="text" placeholder="masukan nama depan anda" onChange={handlerFirstName} value={addUser.firstName} />
                        </div>

                        <div className="input-form">
                            <input type="text" placeholder="masukan nama belakang anda" onChange={handlerLastName} value={addUser.lastName}/>
                        </div>

                        <div className="input-form">
                            <input type="password" placeholder="masukan password anda" onChange={handlerPassword} value={addUser.password}/>
                        </div>

                        <div className="input-form">
                            <input type="password" placeholder="konfirmasi password anda" />
                        </div>

                        <button className="button-submit">Register</button>

                        <div>
                            <p className="bottom-line">Sudah punya akun ? <Link to={'/login'}>login</Link> disini</p>
                        </div>
                    </form>
                </div>

                <div className="right-section">
                    <img src={Wallpaper} />
                </div>
            </section>
        </>
    )
}
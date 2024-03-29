import React, { useState} from "react";
import PageDefault from "../../../components/PageDefault";
import png from '../../../assets/img/logo.png'
import './style.css'
import { Link } from "react-router-dom";

export const Login = ()  => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <PageDefault>
            <div className="container-login">
                 <div className="wrap-login">
                    <form className="login-form">
                        <span className="title">Bem Vindo!!!</span>
                        <span className="title">
                            <img src={png} alt="" />
                        </span>

                        <div className="wrap-input">
                            <input
                             className={email !== "" ? 'has-val input' : 'input'} 
                             type="email"
                             value={email}
                             onChange={e => setEmail(e.target.value)} 
                             />
                            <span className="focus-input" data-placeholder="Email"></span>

                        </div>

                        <div className="wrap-input">
                            <input 
                            className={password !== "" ? 'has-val input' : 'input'}
                            type="password" 
                            value = {password}
                            onChange={e => setPassword(e.target.value)} 
                            />
                            <span className="focus-input" data-placeholder="Password"></span>

                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Não Possui Conta?</span>

                            <Link className="txt2" to="/Registrar">Criar Conta</Link>

                        </div>

                    </form>
                </div>
            </div>

        </PageDefault>
    )
};

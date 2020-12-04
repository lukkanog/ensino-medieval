import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function FormLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldRedirect, setRedirect] = useState(false);

    const submitLogin = (e) => {
        e.preventDefault();

        setRedirect(true);
    }

    if (shouldRedirect) {
        return <Redirect to="/map"/>
    } else {

        return (
            <form className="login-form" onSubmit={submitLogin}>
                <input placeholder="Email" type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
                <input placeholder="Senha" type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Entrar" className="button brown-button login-submit" />
                <Link to="/" className="esqueci-senha">
                    Esqueci minha senha
                </Link>
            </form>
        )
    }
}
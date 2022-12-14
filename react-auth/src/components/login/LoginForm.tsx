import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = (props: { loginData: Function }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const { data } = await axios.post("login", {
            email,
            password,
        });

        props.loginData(data);

        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${data["access_token"]}`;
        console.log(
            (axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${data["access_token"]}`)
        );
    };
    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="mb-3">
                <Link to="/forgot">Forgot password</Link>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
    );
};

export default LoginForm;

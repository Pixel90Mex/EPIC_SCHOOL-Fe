import React from "react";
import {Button, Form} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { LoginRequest } from "../reducers/loginSlice";
import { Toast } from "../utilities/notification";
import { Toaster } from "react-hot-toast";
import jwtDecode from "jwt-decode";
import "../style/Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const successToast = new Toast("Autenticazione effettuata con successo!");
    const errorToast = new Toast("Autenticazione fallita!");

    const post = async (e) => {
        e.preventDefault();
        dispatch(LoginRequest(formData)).then((action) => {
            if (action.payload && action.payload.token) {
                successToast.success();
                localStorage.setItem("session", JSON.stringify(action.payload.token));
                const decodeToken = jwtDecode(action.payload.token);
                setTimeout(() => {
                    navigate(`/UserArea/${decodeToken.id}`, { replace: true });
                }, 1500);
            } else {
                errorToast.error();
            }
        });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };
    return (
        <>
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <div className="box">
                <Form className="m-5" onSubmit={post}>
                    <h2>Login</h2>
                    <Form.Control
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        placeholder="Inserisci email..."
                        className="form my-2"
                    />
                    <Form.Control
                        onChange={handleInputChange}
                        name="password"
                        type="password"
                        placeholder="Inserisci password..."
                        className="my-2"
                    />
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        </>
    );
};

export default Login;
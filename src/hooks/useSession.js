import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useSession = () => {
    const session = JSON.parse(localStorage.getItem("session"));
    const decodedSession = jwt_decode(session);
    const navigate = useNavigate;

    useEffect(() => {
        if (!session) {
            navigate("/", {replace: true});
        }
    }, [navigate, session]);
    return decodedSession;
};

export default useSession;
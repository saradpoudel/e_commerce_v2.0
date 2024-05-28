import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function SignOut() {
    const [cookies, setCookie, removeCookies] = useCookies(["authToken"]);
    const navigate = useNavigate();
    removeCookies("authToken");

    useEffect(() => {
        if (cookies.authToken) {
            removeCookies("authToken");
            return navigate("/");
        }
    })

    return (<></>)
}

export default SignOut;
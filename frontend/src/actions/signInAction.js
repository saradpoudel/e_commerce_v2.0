import { API_URL } from "../constants";

async function signInAction(data) {
    const url = `${API_URL}/api/v1/auth/signin`;
    const response = await fetch(url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response;
}
export default signInAction;
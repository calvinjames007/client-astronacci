import axios from "axios";

const DATABASE_URL = "http://localhost:3000";

export const AddNewUser = (addUser, navigate) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${DATABASE_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addUser)
            })
    
            if (!response.ok) {
                throw new Error(`Gagal menambahkan user baru`)
            } 
    
            const newUser = await response.json();
            console.log(`Data submit succesfully`, newUser);
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const LoginUser = (dataUser, navigate) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${DATABASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataUser)
            })

            if (!response.ok) {
                throw new Error(`Login gagal`)
            }

            const userLogin = await response.json();

            // Menaruh access token ke localStorage pada browser
            if (userLogin && userLogin.accessToken) {
                localStorage.setItem('access_token', userLogin.accessToken);
                localStorage.setItem('firstName', userLogin.firstName);
                localStorage.setItem('lastName', userLogin.lastName);
                localStorage.setItem('status', userLogin.status);
            }
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const fetchVideo = () => {
    return (dispatch, getState) => {
        try {
            async function fetchVideo() {
                const response = await fetch(`${DATABASE_URL}/video`, {
                    method: "GET",
                    headers: {
                        access_token: localStorage.access_token
                    }
                });
                const jsonData = await response.json();
                const action = {
                    type: "FETCH_VIDEO_SUCCESS",
                    payload: jsonData
                }
                dispatch(action)
            }
            fetchVideo();
        }
        catch (error) {
            console.log(error)
        }
    }
}


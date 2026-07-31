export let registerUser = (user) => {
    return async (dispatch, getState) => {
        try {
            await dispatch({ type: "Loading" });
            let data = await fetch("http://localhost:3000/users", {
                method: "POST",
                body: JSON.stringify(user)
            })
            let res = await data.json();
            if (res.error) {
                await dispatch({ type: "Error", payload: res.error })
            }
            await dispatch({ type: "RegisterUser", payload: res })
        } catch (error) {
            await dispatch({ type: "Error", payload: error.message })
        }
    }
}
export let LoginUser = (user) => {
    return async (dispatch, getState) => {
        try {
            await dispatch({ type: "Loading" });
            let data = await fetch("http://localhost:3000/users")
            let res = await data.json();
            if (res.error) {
                await dispatch({ type: "Error", payload: res.error })
            }
            let findUser = res.find((a) => { return a.email == user.email && a.password == user.password })
            if (findUser) {
                let updateuser = await fetch("http://localhost:3000/currentuser", {
                    method: "PUT",
                    body: JSON.stringify({ user: findUser })
                })
                let resuser = await updateuser.json();
                console.log(resuser);
                await dispatch({ type: "RegisterUser", payload: findUser })
            } else {
                console.log("findUser", false);
                await dispatch({ type: "Error", payload: "User Not found" })
            }
        } catch (error) {
            await dispatch({ type: "Error", payload: error.message })
        }
    }
}

export let logout = () => {
    return async (dispatch) => {
        try {
            let updateuser = await fetch("http://localhost:3000/currentuser", {
                method: "PUT",
                body: JSON.stringify({ user: null })
            })
            let resuser = await updateuser.json();
            await dispatch({ type: "Logout" })
        } catch (error) {
            await dispatch({ type: "Error", payload: error.message })
        }
    }

}

export let getprofile = () => {
    return async (dispatch) => {
        try {
            let data = await fetch("http://localhost:3000/currentuser");
            let res = await data.json();
            await dispatch({ type: "RegisterUser", payload: res.user })
        } catch (error) {
            await dispatch({ type: "Error", payload: error.message })
        }
    }
}
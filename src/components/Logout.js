import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'

function Logout() {
    let history = useHistory()
    localStorage.removeItem("loginDetails")
    history.push('/')
    window.location.reload();
}

export default Logout
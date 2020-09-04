import React from 'react'
import { connect } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import '../style/form.css'
import '../style/form1.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../utils/TextError'
import Alert from '@material-ui/lab/Alert';
import '../style/login.css'

function Home() {
    let details = JSON.parse(localStorage.getItem("loginDetails"))
    if (!details) {
        return <Redirect to='/' />
    }
    return (
        <div>

        </div>
    )
}

export default Home

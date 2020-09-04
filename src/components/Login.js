import React from 'react'
import { connect } from 'react-redux'
import { login } from '../store'
import { useHistory, Redirect } from 'react-router-dom'
import '../style/form.css'
import '../style/form1.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../utils/TextError'
import Alert from '@material-ui/lab/Alert';
import '../style/login.css'

function Login({ isAuth, login }) {
    let history = useHistory()

    const initialValue = {
        userName: "",
        password: ""
    }

    const validationSchema = Yup.object({
        userName: Yup.string().required("Required!"),
        password: Yup.string().required("Required!")

    })
    const onSubmit = async values => {
        let data = await login(values)
        console.log(data.data)
        if (data.status) {
            localStorage.setItem("loginDetails", JSON.stringify(data.data))
            history.push('/home')
        }
    }

    let details = JSON.parse(localStorage.getItem("loginDetails"))
    if (details) {
        if (details.success) {
            return <Redirect to='/home' />
        }
    }
    return (
        <div>
            <section id="cover" className="min-vh-100" >
                <div id="cover-caption">
                    <div className="container-fluid">
                        <div className="row text-white">
                            <div className="col-xl-5 col-lg-8 col-md-8 col-sm-12 col-xs-12 col mx-auto form-4">
                                <div className="template" style={{ color: 'black' }}>
                                    <div className="card">
                                        <div className="card-header" ><h1>Login</h1></div>
                                        <div className="card-body" style={{ display: 'flex' }}>
                                            <div style={{ width: '70%', marginLeft: '30%' }}>
                                                <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit} >
                                                    {
                                                        formik => {
                                                            return <Form>
                                                                <div className="form-group">
                                                                    <label htmlFor="userName">Username</label>
                                                                    <Field type="text" name="userName" className="form-control" />
                                                                    <ErrorMessage name="userName" component={TextError} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="password">Password</label>
                                                                    <Field type="password" name="password" className="form-control" />
                                                                    <ErrorMessage name="password" component={TextError} />
                                                                </div>
                                                                {

                                                                    isAuth.error || isAuth.userData.status == false ?
                                                                        <div>
                                                                            <Alert severity="error">Invalid email/password</Alert>
                                                                            <br />
                                                                        </div>
                                                                        : null
                                                                }
                                                                <br />
                                                                <div style={{ display: "flex", float: "right", display: "inline", marginTop: "-8%" }}>
                                                                    <button type='submit' className="btn btn-secondary" disabled={!formik.isValid}>Login</button>
                                                                </div><br />
                                                            </Form>
                                                        }
                                                    }
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >

    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.login
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        login: (loginDetails) => dispatch(login(loginDetails))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login)
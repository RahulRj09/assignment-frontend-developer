import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../style/form.css'
import '../style/form1.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../utils/TextError'
import '../style/login.css'

function Home({ }) {
    let details = JSON.parse(localStorage.getItem("loginDetails"))
    if (!details) {
        return <Redirect to='/' />
    }

    let accessToken = details.result.accessToken

    const initialValue = {
        name: "",
        imageUrl: "",
        categoryId: "",
        subCategoryId: "",
        startDate: "",
        endDate: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required!"),
        imageUrl: Yup.string().required("Required!"),
        categoryId: Yup.string().required("Required!"),
        subCategoryId: Yup.string().required("Required!"),
        startDate: Yup.string().required("Required!"),
        endDate: Yup.string().required("Required!"),

    })
    const onSubmit = async values => {

    }

    return (
        <div>
            <section id="cover" className="min-vh-100">

                <div id="cover-caption"  >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-8 col-md-8 col-sm-12 col-xs-12 col mx-auto form-4">
                                <div className="template" style={{ color: 'black' }}>
                                    <div className="card">
                                        <h4 className="card-header">Demo</h4>
                                        <div className="card-body">
                                            <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit} >
                                                {
                                                    formik => {
                                                        return <Form>
                                                            <div className="form-group">
                                                                <label htmlFor="name">Name</label>
                                                                <Field type="text" name="name" className="form-control" />
                                                                <ErrorMessage name="name" component={TextError} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="imageUrl">Image Url</label>
                                                                <Field name="imageUrl" className="form-control" type="text" />
                                                                <ErrorMessage name="imageUrl" component={TextError} />
                                                            </div>

                                                            <div style={{ display: "flex", float: "right", display: "inline" }}>
                                                                <button type="submit" className="btn btn-secondary" disabled={!formik.isValid} >Submit</button>
                                                            </div>
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
            </section>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {

    }
}

const mapStateToDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Home)


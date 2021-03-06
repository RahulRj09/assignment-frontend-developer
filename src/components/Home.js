import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../style/form.css'
import '../style/form1.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../utils/TextError'
import '../style/login.css'
import { getCategories, getSubCategories, getTopics, submitForm } from '../store'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../style/date.css'
import Select from './Select'
import Date from './Date'

function Home({
    categories,
    getCategories,
    subCategories,
    getSubCategories,
    topics,
    getTopics,
    submitForm,
    submitFormData
}) {
    let details = JSON.parse(localStorage.getItem("loginDetails"))
    let accessToken;
    if (details) {
        accessToken = details.result.accessToken
    }


    useEffect(() => {
        getCategories(accessToken)
        getSubCategories(accessToken)
        getTopics(accessToken)
    }, [getCategories, getSubCategories, getTopics])

    const categoriesOptions = []
    const subCategoriesOptions = []
    const topicsOptions = []

    if (categories.loading) {
        let categoriesData = categories.categories.result
        categoriesData.map(data => {
            categoriesOptions.push({ key: data.name, value: data.id })
        })
    }

    if (subCategories.loading) {
        let subCategoriesData = subCategories.subCategories.result
        subCategoriesData.map(data => {
            subCategoriesOptions.push({ key: data.name, value: data.id })
        })
    }

    if (topics.loading) {
        let topicsData = topics.topics.result
        topicsData.map(data => {
            topicsOptions.push({ key: data.name, value: data.id })
        })
    }


    const initialValue = {
        name: "",
        imageUrl: "",
        categoryId: "",
        subCategoryId: "",
        topicId: "",
        startDate: "",
        endDate: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required!"),
        imageUrl: Yup.string().required("Required!"),
        categoryId: Yup.string().required("Required!"),
        subCategoryId: Yup.string().required("Required!"),
        topicId: Yup.string().required("Required!"),
        startDate: Yup.string().required("Required!"),
        endDate: Yup.string().required("Required!"),

    })
    const onSubmit = async (values, { resetForm }) => {
        submitForm(values, accessToken)
        resetForm()
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

    console.log(details)

    if (!details) {
        return <Redirect to='/' />
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
                                                            <div class="form-row">
                                                                <div className="form-group col-md-6">
                                                                    <label htmlFor="name">Name</label>
                                                                    <Field type="text" name="name" className="form-control" />
                                                                    <ErrorMessage name="name" component={TextError} />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label htmlFor="imageUrl">Image Url</label>
                                                                    <Field name="imageUrl" className="form-control" type="text" />
                                                                    <ErrorMessage name="imageUrl" component={TextError} />
                                                                </div>
                                                                <Select title="Categories" label="categoryId" options={categoriesOptions} />
                                                                <Select title="Sub categories" label="subCategoryId" options={subCategoriesOptions} />
                                                                <Select title="Topics" label="topicId" options={topicsOptions} />
                                                                <Date label="startDate" title="Start Date" />
                                                                <Date label="endDate" title="End Date" />
                                                            </div>
                                                            {
                                                                submitFormData.loading ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                                                                    <span class="help-block">Form submitted successfully</span>
                                                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div> : null
                                                            }
                                                            {
                                                                submitFormData.error ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                                    <span class="help-block">{submitFormData.error}</span>
                                                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div> : null
                                                            }
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
        categories: state.categories,
        subCategories: state.subCategories,
        topics: state.topics,
        submitFormData: state.submitFormData
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        getCategories: (token) => dispatch(getCategories(token)),
        getSubCategories: (token) => dispatch(getSubCategories(token)),
        getTopics: (token) => dispatch(getTopics(token)),
        submitForm: (payload, token) => dispatch(submitForm(payload, token))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Home)


import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../style/form.css'
import '../style/form1.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../utils/TextError'
import '../style/login.css'
import { getCategories, getSubCategories, getTopics } from '../store'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../style/date.css'

function Home({ categories, getCategories, subCategories, getSubCategories, topics, getTopics }) {
    let details = JSON.parse(localStorage.getItem("loginDetails"))
    let accessToken = details.result.accessToken

    useEffect(() => {
        getCategories(accessToken)
        getSubCategories(accessToken)
        getTopics(accessToken)
    }, [getCategories, getSubCategories, getTopics])

    const categoriesList = []
    const subCategoriesList = []
    const topicsList = []

    if (categories.loading) {
        let categoriesData = categories.categories.result
        categoriesData.map(data => {
            categoriesList.push({ key: data.name, value: data.id })
        })
    }

    if (subCategories.loading) {
        let subCategoriesData = subCategories.subCategories.result
        subCategoriesData.map(data => {
            subCategoriesList.push({ key: data.name, value: data.id })
        })
    }

    if (topics.loading) {
        let topicsData = topics.topics.result
        topicsData.map(data => {
            topicsList.push({ key: data.name, value: data.id })
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
    const onSubmit = async values => {
        console.log(values)
    }

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
                                                            <div className="form-group">
                                                                <label htmlFor="categoryId">categories</label>
                                                                <Field as='select' id="categoryId" name="categoryId" className="form-control">
                                                                    <option value="" disabled selected>category</option>
                                                                    {
                                                                        categoriesList.map(list => {
                                                                            return (
                                                                                <option key={list.key} value={list.value}>
                                                                                    {list.key}
                                                                                </option>
                                                                            )
                                                                        })
                                                                    }
                                                                </Field>
                                                                <ErrorMessage name="categoryId" component={TextError} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="subCategoryId">Sub categories</label>
                                                                <Field as='select' id="subCategoryId" name="subCategoryId" className="form-control">
                                                                    <option value="" disabled selected>sub category</option>
                                                                    {
                                                                        subCategoriesList.map(list => {
                                                                            return (
                                                                                <option key={list.key} value={list.value}>
                                                                                    {list.key}
                                                                                </option>
                                                                            )
                                                                        })
                                                                    }
                                                                </Field>
                                                                <ErrorMessage name="subCategoryId" component={TextError} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="topicId">Topics</label>
                                                                <Field as='select' id="topicId" name="topicId" className="form-control">
                                                                    <option value="" disabled selected>Topics</option>
                                                                    {
                                                                        topicsList.map(list => {
                                                                            return (
                                                                                <option key={list.key} value={list.value}>
                                                                                    {list.key}
                                                                                </option>
                                                                            )
                                                                        })
                                                                    }
                                                                </Field>
                                                                <ErrorMessage name="topicId" component={TextError} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="startDate">Start Date</label>
                                                                <Field name="startDate" type="date">
                                                                    {
                                                                        ({ form, field }) => {
                                                                            const { setFieldValue } = form
                                                                            const { value } = field
                                                                            return <DateView id="startDate" className="form-control demo" {...field}
                                                                                selected={value} onChange={val => setFieldValue("startDate", val)} />
                                                                        }
                                                                    }
                                                                </Field>
                                                                <ErrorMessage name="startDate" component={TextError} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="endDate">End Date</label>
                                                                <Field name="endDate" type="date">
                                                                    {
                                                                        ({ form, field }) => {
                                                                            const { setFieldValue } = form
                                                                            const { value } = field
                                                                            return <DateView id="endDate" className="form-control demo" {...field}
                                                                                selected={value} onChange={val => setFieldValue("endDate", val)} />
                                                                        }
                                                                    }
                                                                </Field>
                                                                <ErrorMessage name="endDate" component={TextError} />
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
        categories: state.categories,
        subCategories: state.subCategories,
        topics: state.topics
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        getCategories: (token) => dispatch(getCategories(token)),
        getSubCategories: (token) => dispatch(getSubCategories(token)),
        getTopics: (token) => dispatch(getTopics(token))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Home)


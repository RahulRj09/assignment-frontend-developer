import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../utils/TextError'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../style/date.css'

function Date({ label, title }) {
    return (
        <div className="form-group col-md-6">
            <label htmlFor={label}>{title}</label>
            <Field name={label} type="date">
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return <DateView id={label} className="form-control demo" {...field}
                            selected={value} onChange={val => setFieldValue(label, val)} />
                    }
                }
            </Field>
            <ErrorMessage name={label} component={TextError} />
        </div>
    )
}

export default Date

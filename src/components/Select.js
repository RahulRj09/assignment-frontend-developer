import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../utils/TextError'

function Select({ title, label, options }) {
    return (
        <div className="form-group col-md-4">
            <label htmlFor={label}>{title}</label>
            <Field as='select' id={label} name={label} className="form-control">
                <option value="" disabled selected>{title}</option>
                {
                    options.map(list => {
                        return (
                            <option key={list.key} value={list.value}>
                                {list.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={label} component={TextError} />
        </div>
    )
}

export default Select

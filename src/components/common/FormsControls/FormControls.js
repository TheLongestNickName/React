import React from 'react'
import { Field } from 'redux-form'
import styles from './FormControls.module.css'


export const Textarea = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error    
    return(
       <div  className={styles.formControl + " " + (hasError ? styles.error : '')}> 
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error    
    return(
       <div  className={styles.formControl + " " + (hasError ? styles.error : '')}> 
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validator, component, props={},text = "") =>{
    return(
        <div>
            <Field placeholder={placeholder} component = {component} name={name} validate={validator}{...props}/>
            {text}
        </div>
    )
}
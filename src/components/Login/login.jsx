import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { LoginThunk, LogoutThunk } from '../../redux/auth-reducer'
import { required } from '../../utils/validator/validator'
import { createField, Input } from '../common/FormsControls/FormControls'
import styles from './../common/FormsControls/FormControls.module.css'


const LoginForm = ({handleSubmit, error}) => {
     return(
        <form onSubmit={handleSubmit} >
            {createField('Email', 'email', [required], Input )}
            {createField('Password', 'password', [required], Input, {type:'password'} )}
            {createField('Password', 'password', [], Input, {type:'checkbox'}, "Remember me" )}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData)=>{
        props.LoginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} isAuth={props.isAuth}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {LoginThunk, LogoutThunk})(Login)

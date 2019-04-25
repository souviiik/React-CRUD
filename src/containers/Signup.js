import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { required, email, alphaNumeric } from '../utils/FieldLevelValidationForm';
import { signupAction } from '../actions';
import { renderField } from '../components/form/InputField';
// import { Captcha } from '../components/form/ReCAPTCHA';

class Signup extends PureComponent {
    onSubmit(values) {
        this.props.signupAction(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit, submitting, invalid } = this.props;

        return (
            <Fragment>
                <Helmet>
                    <title>Company name | Sign up</title>
                </Helmet>
                <h1 className="my-5">Create new account</h1>
                {/* <pre>{JSON.stringify(this.props, null, 3)}</pre> */}
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="fullName"
                        component={renderField}
                        label="Your name"
                        id="fullName"
                        type="text"
                        validate={[required]}
                    />
                    <Field
                        name="email"
                        component={renderField}
                        label="Email address"
                        id="emailAddress"
                        type="text"
                        validate={[required, email]}
                    />
                    <Field
                        name="password"
                        component={renderField}
                        label="Password"
                        id="password"
                        type="password"
                        validate={[required, alphaNumeric]}
                    />
                    {/* <Field
                        name='captcharesponse'
                        component={Captcha}
                    /> */}
                    <button type="submit" className="btn btn-primary mr-2" disabled={submitting || invalid}>Sign up</button>
                </form>
                <p className="mt-2">Already have an Account? Please <Link to="/signin">sign in</Link>.</p>
            </Fragment>
        );
    }
}

export default reduxForm({
    form: 'signup-form'
})(connect(null, { signupAction })(Signup));

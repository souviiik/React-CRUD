import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import { required, email, alphaNumeric } from '../utils/FieldLevelValidationForm';
import { renderField } from '../components/form/InputField';

class Signin extends PureComponent {
    onSubmit(values){
        console.log("values ", values);
        // this.props.signupAction(values, () => {
        //     this.props.history.push('/');
        // });
    }

    render() {
        const { handleSubmit, submitting, invalid } = this.props;

        return (
            <Fragment>
                <Helmet>
                    <title>Company name | Sign in</title>
                </Helmet>
                <h1 className="my-5">Access your account</h1>
                {/* <pre>{JSON.stringify(this.props, null, 3)}</pre> */}
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                    <button type="submit" className="btn btn-primary mr-2" disabled={submitting || invalid}>Sign in</button>
                </form>
                <p className="mt-2">New to the website? Please <Link to="/signup">sign up</Link>.</p>
            </Fragment>
        );
    }
}

export default reduxForm({
    form: 'signin-form'
})(connect(null, {})(Signin));

import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import {RECAPTCHA_SITE_KEY} from '../../utils/constants';

export const Captcha = (props) => {    
    return (
        <div>
            <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                className="mb-2"
                onChange={(v) => console.log(v)}
            />
        </div>
    );
}
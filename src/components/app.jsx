import React, {Component, Children} from 'react';
import { withTranslate } from 'react-redux-multilingual'
import { ToastContainer } from 'react-toastify';

import HeaderOne from './common/headers/header-one';
import FooterOne from "./common/footers/footer-one";


const App = ({children }) => {
        
        return (
            <div>
                <HeaderOne />
                {children}
                <FooterOne/>
                <ToastContainer />
            </div>
        )
}

export default withTranslate(App);

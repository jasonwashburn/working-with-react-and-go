import React, { Component, Fragment } from 'react';


export default class AppFooter extends Component {

    render() {
        const currentYear = new Date().getFullYear();
        return (
            <Fragment>
                <hr />
                <p>Copyright &copy; 2021 - { currentYear} Acme Ltd.</p>
            </Fragment>
        );
    }
}
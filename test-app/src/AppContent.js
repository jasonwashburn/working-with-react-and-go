import Read, { Component } from 'react';

export default class AppContent extends Component {

    render() {
        return (
            <p>
                This is the content.

                <br />
                <button class="btn btn-primary" href="#">My Button</button>
            </p>
        );
    }
}
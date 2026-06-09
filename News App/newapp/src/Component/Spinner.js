import React, { Component } from 'react'

import ajaxLoader from '../Ajax-loader.gif' //the image is in src/ folder, one level up from the Component/ folder where Spinner.js is located.
export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <img src={ajaxLoader} alt="Loading..." />
                </div>
            </div>
        )
    }
}
    export default Spinner
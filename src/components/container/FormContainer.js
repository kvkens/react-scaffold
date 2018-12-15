import React, { Component } from "react";
import Input from "../presentational/Input";
import _ from 'lodash';
class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        console.log(_.join(['Another', 'module', 'loaded!'], ' '));
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { seo_title } = this.state;
        return (
            <form id="article-form">
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}
FormContainer.displayName = "YmFormContainer";
export default FormContainer;
import React, { Component } from "react";
import Input from "../presentational/Input";
import {Button} from 'antd';
// import 'antd/dist/antd.css';
class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        console.log('did');
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { seo_title } = this.state;
        //return (<Button type="primary">Button</Button>);
        return (
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
        );
    }
}
FormContainer.displayName = "YmFormContainer";
export default FormContainer;
import React, { Component } from 'react';

class AddSubjectForm extends Component{
    
    state = {
        value: ''
    };

    handleValueChange = (e) => {
       this.setState({ value: e.target.value}) 
    }
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSubject(this.state.value);
        this.setState({ value: '' });
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleValueChange}
                placeholder="Enter a Subject's title"
            />
            <input 
                type="submit"
                value="Add Subject"
            />
            </form>
        
        );
    }
}

export default AddSubjectForm;
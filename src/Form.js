import React, {Component} from 'react';
import './App.css';
import './style.css';
class Form extends Component{
    constructor(props){
        super(props);
        const {fields}=this.state;
    }
    render() {
        return(
            <form onSubmit={this.submitForm}>
                {fields.map(form =>{
                    if (form.input_type === "text"){
                        return (
                            <InputTextField name={form.name} required={form.reqired} _handleChange={this._handleChange}/>
                        );
                    }
                    if (form.input_type === "num"){
                        return(
                            <InputNumField name={form.name} required={form.reqired} _handleChange={this._handleChange}/>
                        );
                    }
                    if (form.input_type === "big_text"){
                        return(
                            <DropdownSelect name={form.name} required={form.reqired} _handleChange={this._handleChange}/>
                        );
                    }
                    if (form.input_type === "dropdown")
                })}
            </form>
        )
    }
}
const StatField=({name,required,_handleChange}) => (
    <div>
        <input
        type="number"
        name={name}
        required={required}
        autoComplete="off"
        onChange={_handleChange}
        />
    </div>
);
export default InputNumField;

const ActionNameField=({name,required,_handleChange}) => (
    <div>
        <input
        type="text"
        name={name}
        required={required}
        autoComplete="off"
        onChange={_handleChange}
        />
    </div>
);
export default InputTextField;

const ActionDescriptionField = ({name, reqired, _handleChange}) => (
    <div>
        <input
        type="text"
        name={name}
        required={required}
        style={{height: "80px"}}
        autoComplete="off"
        onChange={_handleChange}
        />
    </div>
);
export default TextAreaField;

const RestSelect = ({name,placeholder, required, val, _handleChange}) => (
    <div>
        <label>{placeholder}</label>
        <select name={name} required={required} onChange={_handleChange}>
            <option value="">Select an Option</option>
            <option value="sr">Short Rest</option>
            <option value="lr">Long Rest</option>
        </select>
    </div>
);
export default RestSelect;
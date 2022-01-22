import React from 'react'
//import StreamForm from './StreamForm'
import PriroritySelect from '../PrioritySelect/PrioritySelect'
import {generateUUID} from '../../utils/utils'
import './Form.css'

class Form extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = { 

           jobName: "",
           jobPriority: '1',
           selectedPriorityIndex:1,
           errorMsg:""
        }
    }
    getPriorityIndex(priority) { 
       
        switch(priority) {
            case 'red': return '1'
            case 'yellow': return '2'
            case 'blue': return '3'
        }
    }

    handleJobNameChange = (event) => {
        var inputValue = event.target.value;
        const regex = /^[a-zA-Z0-9,.!? ]*$/;
        const chars = inputValue.split('');
        const char = chars.pop();
        if (!regex.test(char)) {
            inputValue = chars.join('');
        }
            
        this.setState({jobName: inputValue});
    }
 
    handleJobPriorityChange = (event) => { 
        this.setState({
            jobPriority: event.target.value,
            selectedPriorityIndex: event.target.value
        });
    }

    

    submitForm = (event) => { 
        if ( this.state.jobName == "") {
            this.setState({
                errorMsg:"Please enter job name."
            })
            return
        }
        else if ( this.state.jobName.length > 70) {
            this.setState({
                errorMsg:"Too long job name (max 70 symbols) !"
            })
            return
        }
        else { 
            this.setState({
                errorMsg:""
            }) 
        }

        var data = {
            jobGUID: generateUUID(),
            jobName:this.state.jobName,
            jobPriority:this.state.jobPriority
        }
        
        this.props.handleCreateCallback(data)
    }
    
    showError(){
        if ( this.state.errorMsg.length > 0) {
            return <div className="errorMessage">{ this.state.errorMsg } </div>
        }
    }
    render(){ 
        
        return <div>
            
            <h3>Job:</h3>
            <input pattern="[A-Za-z]" className="jobNameInput" value={this.state.jobName} onChange={this.handleJobNameChange} />
           
            <PriroritySelect 
                handleJobPriorityChange={this.handleJobPriorityChange}
                selectedPriorityIndex={this.state.selectedPriorityIndex}

            />
            <br/>
            {this.showError()}

            <button onClick={this.submitForm}>Create</button>
            
        </div>
    }
}

export default Form;
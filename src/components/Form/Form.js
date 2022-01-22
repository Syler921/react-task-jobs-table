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
           selectedPriorityIndex:1
        }
    }
    getPriorityIndex(priority) { 
        console.log(priority)
        switch(priority) {
            case 'red': return '1'
            case 'yellow': return '2'
            case 'green': return '3'
        }
    }

    handleJobNameChange = (event) => { 
        this.setState({jobName: event.target.value});
    }
 
    handleJobPriorityChange = (event) => { 
        this.setState({
            jobPriority: event.target.value,
            selectedPriorityIndex: event.target.value
        });
    }

    

    submitForm = (event) => { 
        var data = {
            jobGUID: generateUUID(),
            jobName:this.state.jobName,
            jobPriority:this.state.jobPriority
        }
        console.warn('data--',data)
        this.props.handleCreateCallback(data)
    }
    
    
    render(){ 
        
        return <div>
            
            <h3>Job:</h3>
            <input className="jobNameInput" value={this.state.jobName} onChange={this.handleJobNameChange} />
           
            <PriroritySelect 
                handleJobPriorityChange={this.handleJobPriorityChange}
                selectedPriorityIndex={this.state.selectedPriorityIndex}

            />
            <div className="errorMessage"></div>

            <button onClick={this.submitForm}>Create</button>
            
        </div>
    }
}

export default Form;
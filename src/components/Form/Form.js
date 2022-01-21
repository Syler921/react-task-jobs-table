import React from 'react'
//import StreamForm from './StreamForm'
import './Form.css'
class Form extends React.Component {
    
    constructor(props){
        super(props);
        console.warn('props===',props)
        this.state = { 

           jobName: "",
           jobPriority: '1',
           selectedPriorityIndex:0,
           jobPriorities: [
                { 
                    index:'1',
                    type:"Urgent"
                },
                { 
                    index:'2',
                    type:"Regular"
                },
                { 
                    index:'3',
                    type:"Trivial"
                } 
           ]
        }
    }

    handleJobNameChange = (event) => { 
        this.setState({jobName: event.target.value});
    }

    handleJobPriorityChange = (event) => { 
        this.setState({
            jobPriority: event.target.value
        });
    }
    generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    submitForm = (event) => { 
        var data = {
            jobGUID: this.generateUUID(),
            jobName:this.state.jobName,
            jobPriority:this.state.jobPriority
        }
        console.warn('data--',data)
        this.props.handleCreateCallback(data)
    }
    
    renderPrioirtyOptions() { 
     
        return this.state.jobPriorities.map((jobPriority) => {
           
            return <option 
                    key={jobPriority.index}
                   
                    value={jobPriority.index} 
                >
                    {jobPriority.type}
                </option>
        })
    }
    render(){ 
        //console.log(this.props)
        return <div>
            
            <h3>Job:</h3>
            <input className="jobNameInput" value={this.state.jobName} onChange={this.handleJobNameChange} />
           
            <h3>Priority:</h3>
            <select className="jobPrioritySelect"
                value={this.state.selectedPriorityIndex} 
                onChange={this.handleJobPriorityChange}
            >   
                {this.renderPrioirtyOptions()}
            </select>
            <div className="errorMessage"></div>

            <button onClick={this.submitForm}>Create</button>
            
        </div>
    }
}

export default Form;
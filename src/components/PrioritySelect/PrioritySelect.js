

import React from 'react'
import {priorityOptions} from '../../config/priorityOptions'

class PrioritySelect extends React.Component {
    
    constructor(props){
        super(props)
        
        this.jobPriorities = priorityOptions
    }

    

    renderPrioirtyOptions() { 
     
        return this.jobPriorities.map((jobPriority) => {
           
            return <option 
                    key={jobPriority.index}
                   
                    value={jobPriority.index} 
                >
                    {jobPriority.type}
                </option>
        })
    }

    render() { return <React.Fragment> <h3>Priority:</h3>
            <select className="jobPrioritySelect"
                value={this.props.selectedPriorityIndex} 
                onChange={this.props.handleJobPriorityChange}
            >   
                {this.renderPrioirtyOptions()}
            </select>
        </React.Fragment>
    }

}

export default PrioritySelect
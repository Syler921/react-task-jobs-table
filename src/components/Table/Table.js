import React from 'react'
//import StreamForm from './StreamForm'
import './Table.css';
import SearchBar from '../SearchBar/SearchBar'

class Table extends React.Component {
    constructor(props) {
        super(props);
        console.log('test')
    }

    onSubmit = (formValues) => {
        //this.props.createStream(formValues)
    }

    getPriorityTypeByIndex(priority) { 
        
        switch(priority) {
            case '1': return 'Urgent'
            case '2': return 'Regular'
            case '3': return 'Trivial'
        }
    }

    getRowColor(priority){
        switch(priority) {
            case '1': return 'red'
            case '2': return 'yellow'
            case '3': return 'blue'
        }
            
    }
    
    renderJobs(){
        return this.props.jobs
            .sort((a, b) => a.jobPriority > b.jobPriority ? 1 : -1)
            .map(job=>{
            return <tr className={this.getRowColor(job.jobPriority)} key={job.jobGUID}>
                    <td>{job.jobName}</td>
                    <td>{this.getPriorityTypeByIndex(job.jobPriority)}</td>
                    <td>
                        <button onClick={()=>{ this.props.handleUpdateJobCallback(job)}}>Edit</button>
                        <button onClick={()=>{ this.props.handleDeleteJobCallback(job.jobGUID)}}>Delete</button>
                    </td>
                </tr>
        })
    }
    renderTable(){
        if ( typeof(this.props.jobs) === 'undefined' || this.props.jobs.length == 0) { 
            return <div>No data to display !</div>
        }
        return ( 
            <table>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Job Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderJobs()}
                </tbody>
            </table>
        )
    }
    render(){ 
        
        return (
            <div className="jobsTable">
                test
                <div class="tableHeader">
                    <h3>Job List</h3>
                    <hr/>
                </div>
                
                <SearchBar/>

                {this.renderTable()}
            </div>
            
        )
    }
}

export default Table;
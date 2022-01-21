import React from 'react'
//import StreamForm from './StreamForm'
import './Table.css';
import SearchBar from '../SearchBar/SearchBar'

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (formValues) => {
        //this.props.createStream(formValues)
    }

    getRowColor(priority){
        switch(priority) {
            case '1': return 'red'
            case '2': return 'yellow'
            case '3': return 'green'
        }
            
    }
    
    renderJobs(){
        return this.props.jobs.map(job=>{
            return <tr className={this.getRowColor(job.jobPriority)} key={job.jobGUID}>
                    <td>{job.jobName}</td>
                    <td>{job.jobPriority}</td>
                    <td>Actions</td>
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
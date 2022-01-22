import logo from './logo.svg';
import './App.css';
import React from 'react'
import Form from './components/Form/Form'
import Table from './components/Table/Table'
import Popup from './components/Popup/Popup'
import FilterContext from './context/filtrationContext'


class App extends React.Component {
  constructor(props) {
      super(props);

      this.popupContainerRef = React.createRef();

      this.state = {
        jobs:[],
        popupIsVisible:false,
        selectedJob:null,
        filtration: { 
          filterValue:"",
          setFilterValue:this.setFilterValue
        }
      }
  } 

  // context filter value setter function 
  setFilterValue = filterValue =>{
    this.setState(state => {
      state.filtration.filterValue = filterValue
      return state
    })
  }

  handleCreate = (data) => { 

    var newJob = {
      'jobGUID':data.jobGUID,
      'jobName':data.jobName,
      'jobPriority':data.jobPriority
    }
    
    this.setState(prevState => ({
      jobs: [...prevState.jobs, newJob]
    }))
    

  }

  showUpdateJobPopup = (job) => { 
    this.setState({
      popupIsVisible:true,
      selectedJob:job,
    })
  }

  handleUpdateJob = (updatedJob) => { 
    console.log('from app',updatedJob)
    const newState = this.state.jobs.map(job => {
      if ( job.jobGUID === updatedJob.jobGUID ){
        job.jobPriority = updatedJob.jobPriority;
      }
    })
    this.setState(newState);
  }

  handleDeleteJob = (jobGUID) => { 
    console.log('jobGUID',jobGUID)
    this.setState({
      jobs: this.state.jobs.filter(job => job.jobGUID !== jobGUID)
    });
  }
  
  closePopup = () => {
    this.setState({
      popupIsVisible:false,
      selectedJob:null
    })
  }

  showPopup(){
    if ( this.state.popupIsVisible ) {
      return <Popup 
        job={this.state.selectedJob} 
        closePopupCallback={this.closePopup} 
        handleJobPriorityChange={this.handleUpdateJob}
      /> // job=job.filter
    }
  }

  render () {
    return (
      <React.Fragment>
        <div className="jobBoardWrapper">
          <Form 
            handleCreateCallback={this.handleCreate}
          />
          <FilterContext.Provider value={this.state.filtration}>
            
            <Table 
              jobs={this.state.jobs.filter(job => job.jobName.includes(this.state.filtration.filterValue))}
              handleDeleteJobCallback={this.handleDeleteJob}
              handleUpdateJobCallback={this.showUpdateJobPopup}
              />

          </FilterContext.Provider>
        </div>
        <div class="popup">
          {this.showPopup()}
        </div>
      </React.Fragment>
      
      
    )
  }
}

export default App;

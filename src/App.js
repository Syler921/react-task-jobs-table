import logo from './logo.svg';
import './App.css';
import React from 'react'
import Form from './components/Form/Form'
import Table from './components/Table/Table'
import FilterContext from './context/filtrationContext'
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        jobs:[],
       
        filtration: { 
          filterValue:"",
          setFilterValue:this.setFilterValue
        }
      }
  } 
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

  render () {
    return (
      <div className="jobBoardWrapper">
        <Form 
          handleCreateCallback={this.handleCreate}
        />
        <FilterContext.Provider value={this.state.filtration}>
          
          <Table jobs={this.state.jobs.filter(job => job.jobName.includes(this.state.filtration.filterValue))}/>
          
        </FilterContext.Provider>
      </div>
    )
  }
}

export default App;

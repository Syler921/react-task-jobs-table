import React from 'react'
import ReactDOM from "react-dom"
import PrioritySelect from '../PrioritySelect/PrioritySelect'
import './Popup.css'
class Popup extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            jobPriority:this.props.job.jobPriority
        }
    }

    handleJobPriorityChange = (e) => {
        
        this.setState({
            jobPriority:e.target.value
        })
    }

    render(){ 
        //console.log(this.props)
        return ReactDOM.createPortal(
        <div className="jobPopup">
            <div className="popupContent">
                <div onClick={(e)=>{ this.props.closePopupCallback() }} className="closeButton"></div>
                <input className="jobName" disabled value={this.props.job.jobName}></input>
                <PrioritySelect 
                    selectedPriorityIndex={this.state.jobPriority}
                    handleJobPriorityChange={this.handleJobPriorityChange}
                />
                <button onClick={(e)=>{
                
                    this.props.job.jobPriority = this.state.jobPriority
                    this.props.handleJobPriorityChange(this.props.job)
                    this.props.closePopupCallback()

                }}>Update</button>
            </div>
        </div>,
        document.body)
    }
}

export default Popup;
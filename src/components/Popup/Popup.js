import React from 'react'
//import StreamForm from './StreamForm'

class Popup extends React.Component {


    render(){ 
        //console.log(this.props)
        return <div>
            <h3>Create Stream</h3>
            <StreamForm onSubmit={this.onSubmit}/>
        </div>
    }
}

export default StreamCreate;
import React from 'react';
import Vivus from 'vivus';

export default class ReactVivus extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            init: false
        }
        this.onReady = this.onReady.bind(this);
        this.onCallback = this.onCallback.bind(this);
        this.elementId =  (this.props.elementId) ? this.props.elementId : "vivus-div";
        this.options = this.props.options;
        this.options.onReady = this.onReady; 
    }
    
    onReady() {  
        if(this.props.onReady)      
            this.props.onReady(this.vivus);
    }

    onCallback()
    {
        if(this.props.callback)
            this.props.callback(this.vivus);
    }

    componentDidMount(){
        
        if(document.getElementById(this.elementId) !== null) {               
            this.vivus = new Vivus(this.elementId,this.options,this.onCallback);            
            this.setState({init: true})
        }
        else this.setState({init: false})
    } 
    
    render()
    {
        return (this.props.elementId) ? null : <div id={this.elementId}></div>
    }
}


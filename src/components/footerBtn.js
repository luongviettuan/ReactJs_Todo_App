import React, {Component} from 'react'

class FooterBtn extends Component{

    render(){
        return(
            <div className="btnfooter">
                <button className="btn all" onClick={this.props.all}>All</button>
                <button className="btn active" onClick={this.props.active}>Active</button>
                <button className="btn complete" onClick={this.props.complete}>Complete</button>
            </div>
        )
    }
}
export default FooterBtn;
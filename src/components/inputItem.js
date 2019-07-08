import React, { Component } from 'react';
class InputItem extends Component{
    
    render(){
        return(
            <div className ="inputTodo">
                <input placeholder="Mời bạn nhập nhiệm vụ" className="inputItem" id="textContent"/>
                <button value="Thêm nhiệm vụ" className="btnItem" onClick={this.props.add}>Thêm nhiệm vụ</button>
            </div>
    )}
}

export default InputItem;
import React, { Component } from 'react';
class InputItem extends Component{
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
        this.addItem = this.addItem.bind(this)
    }
    addItem(){
        let title = this.inputElement.current.value
        this.props.add(title) //   gọi callback về app.js
    }
    render(){
        return(
            <div className ="inputTodo">
                <input
                    placeholder="Mời bạn nhập nhiệm vụ"
                    className="inputItem"
                    id="textContent"
                    ref={this.inputElement}/>
                <button value="Thêm nhiệm vụ"
                className="btnItem"
                onClick={this.addItem}>
                    Thêm nhiệm vụ
                </button>
            </div>
    )}
}

export default InputItem;
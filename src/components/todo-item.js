import React, { Component } from 'react';
const classNames = require('classnames')
class TodoItem extends Component {

    render() {
        var check = classNames({
            'todo-item': true,
            'todo-item-complete': this.props.item.isCheck
        })
        return (
            <div className="todo">
                <div className="todo-list">
                    <button onClick={this.props.delete}>Delete</button>
                    <p onClick={this.props.click} className={check}>{this.props.item.title}</p>
                    
                </div>
            </div>
        )
    }
}

export default TodoItem;
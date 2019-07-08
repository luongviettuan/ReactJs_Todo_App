import React,{Component} from 'react';
import './App.css';
import '../src/components/todo-item'
import '../src/components/todo-item'
import TodoItem from '../src/components/todo-item';
import InputItem from './components/inputItem';
import FooterBtn from './components/footerBtn';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
        todoItem : []
    }
    this.todoItemBackUp = this.state.todoItem
    this.onClickItem = this.onClickItem.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onAllItem = this.onAllItem.bind(this);
    this.onActive = this.onActive.bind(this);
    this.onComplete = this.onComplete.bind(this)
    this.onDeleteItem = this.onDeleteItem.bind(this)
  }
  
  onClickItem(item){
    return(event)=>{
      let isCheck = item.isCheck;
      let index = this.state.todoItem.indexOf(item);
      let indexBackup = this.todoItemBackUp.indexOf(item);
      this.setState({
        todoItem:[
          ...this.state.todoItem.slice(0, index),
          {...item, isCheck: !isCheck},
          ...this.state.todoItem.slice(index+1)
        ]
      }, function(){
        console.log(this.todoItemBackUp, this.state.todoItem);
        // this.todoItemBackUp = this.state.todoItem;
        this.todoItemBackUp[indexBackup].isCheck = !isCheck;
      })
    }
  }
  onAddItem(){
    var content = document.getElementById("textContent")
    this.setState({
      todoItem:[
        {title :content.value, isCheck: false},
        ...this.state.todoItem,
      ]
    },function(){
      this.todoItemBackUp = this.state.todoItem;
      content.value = "";
    })
  }
  onDeleteItem(item){
    const index = this.state.todoItem.indexOf(item)
    this.setState({
      todoItem : [
        ...this.state.todoItem.slice(0, index),
        ...this.state.todoItem.slice(index+1)
      ]
    }, function(){
      this.todoItemBackUp = this.state.todoItem
    })
  }
  onAllItem(){
    this.setState({
      todoItem : this.todoItemBackUp
    })
  }
  onActive(){
    this.setState({
      todoItem : this.todoItemBackUp.filter(item => item.isCheck === false)
    })
  }
  onComplete(){
    this.setState({
      todoItem : this.todoItemBackUp.filter(item=>item.isCheck === true)
    })
  }
  render(){
    return (
      <div className="App">
        <InputItem add={this.onAddItem}/>
        {
          this.state.todoItem.map((item, index)=><TodoItem
            key={index}
            item={item}
            click = {this.onClickItem(item)}
            delete = {()=>this.onDeleteItem(item)}
          />)
        }
        <FooterBtn
          all={this.onAllItem}
          active={this.onActive}
          complete={this.onComplete}
        />
      </div>
    );
  }
}

export default App;

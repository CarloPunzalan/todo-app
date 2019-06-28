import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  todos = []
  todoInput : FormGroup
  todoInput2 : FormGroup
  constructor(
    private fb : FormBuilder,
    private stateService : StateService
    ){
    this.todoInput = this.fb.group({
      todoItem:['',[Validators.required]]
    })
  }

  ngOnInit(){
    this.todos = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : []

    this.stateService.$stateSubject.subscribe(data=>{
      console.log(data)
      data.delete ? this.deleteItem(data.delete) : null
      data.done   ? this.doneItem(data.done,data.value) : null
    })
  }

  submit(){
    if(!this.todoInput.valid){
      return alert("Please enter the title of you todo.")
    }
    console.log(this.todoInput.get('todoItem').value)
    this.todos.push({
      id:this.idGenerator(100),
      title:this.todoInput.get('todoItem').value,
      status:false
    })
    console.log(this.todos)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  idGenerator(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  doneItem(id,value){
    this.todos = this.todos.map(item=>{
      console.log(item)
      if(item.id == id){
        item.status = value
      }
      return item
    })
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }

  deleteItem(id){
     this.todos = this.todos.filter(item=>{
      return item.id != id
    })
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() todos
  editMode = {
    status:false,
    id:''
  }
  constructor(private stateService : StateService) { }

  ngOnInit() {
    console.log(this.todos)
  }

  done(id,value){
    console.log(id)
    this.stateService.done(id,value)
  }

  cancel(){
    this.editMode.status = false
  }

 
  editModeOn(id){
    this.editMode.status = true
    this.editMode.id = id
  }
  update(id,title){
    console.log(id)
    console.log(title)
    this.todos.map(item=>{
      console.log(item)
      if(item.id == id){
        item.title = title
      }
    })

    this.editMode.status = false
  }

  delete(id){
    this.stateService.delete(id)
  }

}

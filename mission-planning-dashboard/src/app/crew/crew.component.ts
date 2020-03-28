import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited:object=null;
  constructor() { }

  ngOnInit() {
  }

  addNewCrewMember(name:string, first:boolean) {
    this.crew.push({name:name,firstMission:first});
  }

  removeCrewMember(member){
    let index = this.crew.indexOf(member);
    this.crew.splice(index,1);
  }

  editName(member, newName){
    let index = this.crew.indexOf(member);
    if(newName!==''){
      this.crew[index].name=newName;
    }
  }

  edit(member:object){
    this.memberBeingEdited=member;
  }
}

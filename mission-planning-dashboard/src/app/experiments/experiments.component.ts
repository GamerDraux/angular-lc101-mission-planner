import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentList:array =['Mars soil sample', 'Dig on that red sand, Baby!', 'Plant growth in habitat', 'Human bone density'];
  experimentBeingEdited=null;

  constructor() { }

  ngOnInit() {
  }

  addExperiment(newExperiment){
    // tslint:disable-next-line: new-parens
    this.experimentList.push(newExperiment);
  }

  switchToEditBlock(newName){
    this.experimentBeingEdited=newName;
  }

  editExperiment(experimentBeingEdited, newName){
    const index = this.experimentList.indexOf(experimentBeingEdited);
    this.experimentList[index]=newName;
  }

  removeExperiment(remove){
    const index = this.experimentList.indexOf(remove);
    this.experimentList.splice(index,1);
  }
}

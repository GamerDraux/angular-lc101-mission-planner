import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentList:Array=['Rubber Baby Boucy Buggies', 'Habitat Dome', 'Drones', 'Food Containers', 'Oxygen Tanks'];
  constructor() { }

  ngOnInit() {
  }
  
  addItem(item){
    this.equipmentList.push(item);
  }

  removeItem(item){
    const index = this.equipmentList.indexOf(item);
    this.equipmentList.splice(index,1);
  }
}

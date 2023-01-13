import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list2',
  templateUrl: './to-do-list2.component.html',
  styleUrls: ['./to-do-list2.component.css']
})
export class ToDoList2Component {

  public ToDoItemsList = [
    {
      id: 1,
      description: "c'est un fruit  ",
      statut: 'terminé'
    },
    {
      id: 2,
      description: "Aliment de petit déjeuner ",
      statut: 'En cours'
    },
    {
      id: 3,
      description: "c'est une poudre de blé ",
      statut: 'terminé'
    },
    {
      id: 4,
      description: "legume piquant ",
      statut: 'En cours'
    },
    {
      id: 5,
      description: "feuille de laitue",
      statut: 'terminé'
    }
  ]



}

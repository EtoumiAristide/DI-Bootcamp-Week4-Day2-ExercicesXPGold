import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  public ToDoItemsList = [
    {
      name : 'banane',
      description : "c'est un fruit  ",
      statut : 'terminé'
    },
    {
      name : 'pain',
      description : "Aliment de petit déjeuner ",
      statut : 'En cours'
    },
    {
      name : 'farine',
      description : "c'est une poudre de blé ",
      statut : 'terminé'
    },
    {
      name : 'piment',
      description : "legume piquant ",
      statut : 'En cours'
    },
    {
      name : 'salade',
      description : "feuille de laitue",
      statut : 'terminé'
    }
  ]
}

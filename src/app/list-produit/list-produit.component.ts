import { Component } from '@angular/core';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css'],
})
export class ListProduitComponent {


  seletedCategorie = "";
  actualCategorie = "";
  dataSend = new Array();

  categories = ["Fruits", "Cars", "Pens"];

  produitList = [
    {
      name: 'Orange',
      price: 300,
      category: this.categories[0]
    },
    {
      name: 'Suziki Alto',
      price: 2000000,
      category: this.categories[1]
    },
    {
      name: 'Apple',
      price: 500,
      category: this.categories[0]
    },
    {
      name: 'bic',
      price: 300,
      category: this.categories[2]
    },
    {
      name: 'Mercedes Gle AMG',
      price: 300,
      category: this.categories[1]
    }
  ]

  /**
   * Initialise la catégorie sélectionnée
   * @param selectInput 
   */
  onSelectionChanged(selectInput: any) {
    this.seletedCategorie = selectInput.value;
  }

  /**
   * Retourne les valeurs de selectedCategorie et actualCategorie sous forme d'objet
   * @param actualCategorie 
   * @returns Un objet composé de selectedCategorie et actualCategorie
   */
  getData(actualCategorie: any): any {
    return { selectedCategorie: this.seletedCategorie, actualCategorie: actualCategorie }
  }

}

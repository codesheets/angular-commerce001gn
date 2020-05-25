import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Le produit a été partagé avec succès!');
  }
 interesser() {
    window.alert("Vous serez informer dès lorqu'on reçoit. Merci d'avoir appélez le +224 620 83 35 02");
  }
  onNotify(){
    window.alert('Vous serez informer dès que le produit sera disponible dans le magasin');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
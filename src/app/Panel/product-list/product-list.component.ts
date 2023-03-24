import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { PanelServices } from 'src/app/Services/panel.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  apiUrl = environment.apiUrl;
  constructor(private panelService: PanelServices) { }

  ngOnInit(): void {
    this.panelService.getProducts().subscribe(data=> {this.products = data});
  }

}

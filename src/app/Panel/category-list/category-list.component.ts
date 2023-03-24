import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { PanelServices } from 'src/app/Services/panel.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  apiUrl: string = environment.apiUrl;
  constructor(private panelService: PanelServices) { }

  ngOnInit(): void {
    this.panelService.getCategories().subscribe(data => {this.categories = data});
  }



}

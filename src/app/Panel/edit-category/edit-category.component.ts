import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { PanelServices } from 'src/app/Services/panel.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  info: string = '';
  infoColor: string = '';
  selectedFile = '';
  category: Category = {
    categoryImageUrl: "",
    categoryName: "",
    categoryId : "0"
  };
  apiUrl = environment.apiUrl;
  url: string = "";
  constructor(private panelService: PanelServices, private route: Router) { }

  ngOnInit(): void {
    this.url = this.route.url.split("/")[2]

    this.panelService.getCategory(+this.url).subscribe(data => {this.category = data});
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(form: NgForm) {
    var paylaod = new FormData();
    paylaod.append("CategoryId", this.url);
    paylaod.append("categoryName", form.value.categoryName);
    this.panelService.editCategory(paylaod).subscribe(data=> {console.log(data)})
    form.reset();
  }

}

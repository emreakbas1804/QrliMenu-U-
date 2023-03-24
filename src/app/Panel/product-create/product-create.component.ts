import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/Models/Category';
import { PanelServices } from 'src/app/Services/panel.services';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  selectedFile: string = '';
  info: string = '';
  infoColor: string = '';
  categories: Category[];
  constructor(private panelService: PanelServices) { }

  ngOnInit(): void {
    this.panelService.getCategories().subscribe(data => {this.categories = data});
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(form : NgForm) {
    const payload = new FormData();
    payload.append('productImage', this.selectedFile);
    payload.append('ProductName', form.value.productName);
    payload.append("ProductDescription", form.value.productDescription);
    payload.append("ProductIsActive", form.value.productIsActive);
    payload.append("ProductPrice", form.value.productPrice);
    payload.append("CategoryId", form.value.productCategoryId);
    this.panelService.addProduct(payload).subscribe({
      error: data => {
        this.info = data;
        this.infoColor = "danger";
      },
      next: response => {
        this.info = "Ürün eklemesi başarılı";
        this.infoColor = "success";
        form.reset();
      }
    });

  }

}

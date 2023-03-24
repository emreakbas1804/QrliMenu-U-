import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AccountServices } from 'src/app/Services/account.services';
import { PanelServices } from 'src/app/Services/panel.services';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {



  selectedFile = '';
  info: string = '';
  infoColor: string = '';


  constructor(private panelServices: PanelServices) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.info = "Form eksiksiz ve doğru bir şekilde doldurulmalı.";
      this.infoColor = "danger";
      return;
    }
    const payload = new FormData();

    payload.append('categoryImage', this.selectedFile);
    payload.append('categoryName',form.value.categoryName)

    this.panelServices.addCategory(payload).subscribe({
      error: err => {
        this.info = err
        this.infoColor = "danger"
        return
      },
      next: (response) => {
        this.info = "kategori eklendi";
        this.infoColor = "success";
        form.reset();
      }
    })


  }


}

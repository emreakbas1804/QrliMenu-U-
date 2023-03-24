import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../Shared/Shared.modules";
import { PanelIndexComponent } from './panel-index/panel-index.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { HttpClientModule } from "@angular/common/http";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CKEditorModule } from "ckeditor4-angular";
import { ProductListComponent } from './product-list/product-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';



@NgModule({
  declarations: [
    PanelIndexComponent,
    ProductCreateComponent,
    CategoryCreateComponent,
    ProductCreateComponent,
    CategoryListComponent,
    ProductListComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PanelIndexComponent,
    ProductCreateComponent,
    CategoryCreateComponent,
    ProductCreateComponent
  ]
})
export class PanelModule{

}

// "styles": [
//   "node_modules/bootstrap/dist/css/bootstrap.min.css",
//   "src/styles.css"

// ],
// "scripts": [
//   "node_modules/jquery/dist/jquery.min.js",
//   "node_modules/bootstrap/dist/js/bootstrap.min.js"
// ]

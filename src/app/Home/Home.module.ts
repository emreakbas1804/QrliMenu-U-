import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../Shared/Shared.modules";
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    IndexComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    IndexComponent,
  ]
})
export class HomeModule{

}

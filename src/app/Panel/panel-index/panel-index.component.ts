import { Component, OnInit } from '@angular/core';
import { PanelServices } from 'src/app/Services/panel.services';

@Component({
  selector: 'app-panel-index',
  templateUrl: './panel-index.component.html',
  styleUrls: ['./panel-index.component.css']
})
export class PanelIndexComponent implements OnInit {

  totalCategory: any;
  totalProduct:any;
  constructor(private panelService: PanelServices) { }

  ngOnInit(): void {
    this.panelService.userTotalCategories().subscribe(data => {
      this.totalCategory = +data;
    });

    this.panelService.userTotalProducts().subscribe(data => {
      this.totalProduct = +data;
    });


  }

}

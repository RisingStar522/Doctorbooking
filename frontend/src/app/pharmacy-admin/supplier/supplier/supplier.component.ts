import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  datatable: any;
  constructor() { }

  ngOnInit(): void {
    const table: any = $('table');
    this.datatable = table.DataTable();
  }

}

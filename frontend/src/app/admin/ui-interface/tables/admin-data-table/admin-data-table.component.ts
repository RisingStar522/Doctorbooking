import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-admin-data-table',
  templateUrl: './admin-data-table.component.html',
  styleUrls: ['./admin-data-table.component.css']
})
export class AdminDataTableComponent implements OnInit {
  datatable: any;
  constructor() { }

  ngOnInit(): void {
    const table: any = $('table');
    this.datatable = table.DataTable();
  }

}

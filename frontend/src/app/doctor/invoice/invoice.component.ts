import { Component, OnInit } from '@angular/core';

import { CommonServiceService } from './../../common-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices : any = [];
  constructor(public commonService:CommonServiceService) { }

  ngOnInit(): void {
  	this.getTransactions();
  }

  getTransactions() {
  	this.commonService.getTransactions()
  		.subscribe(res=>{
  			this.invoices = res;
  		})
  }

}

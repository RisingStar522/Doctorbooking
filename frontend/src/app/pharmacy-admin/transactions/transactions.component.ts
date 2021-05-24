import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from '../../common-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  modalRef: BsModalRef;
  transactionsList: any = [];
  errorMessage: string;
  id;
  constructor(public commonService: CommonServiceService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getPharmacyTransactions();
  }

  deleteModal(template: TemplateRef<any>, transaction) {
    this.id = transaction.id;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm modal-dialog-centered' });
  }

  deleteTrans() {
    this.transactionsList = this.transactionsList.filter(a => a.id !== this.id);
    this.modalRef.hide();
  }

  decline() {
    this.modalRef.hide();
  }
  

  getPharmacyTransactions() {
    this.commonService.getPharmacyTransactions()
      .subscribe(res => {
        this.transactionsList = res;
        $(function () {
          $("table").DataTable();
        });
      },
        error => this.errorMessage = <any>error);
  }

}

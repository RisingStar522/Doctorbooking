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
    this.getTransactions();
  }

  deleteModal(template: TemplateRef<any>, trans) {
    this.id = trans.id;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm modal-dialog-centered' });
  }

  deleteTrans() {
    this.transactionsList = this.transactionsList.filter(a => a.id !== this.id);
    this.modalRef.hide();
    // this.commonService.deleteTransaction(this.id).subscribe((data : any[])=>{      
    //   this.getTransactions();
    // });
  }

  decline() {
    this.modalRef.hide();
  }
  btnColor() {
    document.getElementById('btn-yes').style.backgroundColor = "#00d0f1";
    document.getElementById('btn-yes').style.border = "1px solid #00d0f1";
    document.getElementById('btn-yes').style.color = "#fff";

    document.getElementById('btn-no').style.backgroundColor = "#fff";
    document.getElementById('btn-no').style.border = "1px solid #fff";
    document.getElementById('btn-no').style.color = "#000";
  }

  btnColorNo() {
    document.getElementById('btn-no').style.backgroundColor = "#00d0f1";
    document.getElementById('btn-no').style.border = "1px solid #00d0f1";
    document.getElementById('btn-no').style.color = "#fff";

    document.getElementById('btn-yes').style.backgroundColor = "#fff";
    document.getElementById('btn-yes').style.border = "1px solid #fff";
    document.getElementById('btn-yes').style.color = "#000";
  }

  getTransactions() {
    this.commonService.getTransactions()
      .subscribe(res => {
        this.transactionsList = res;
        $(function () {
          $("table").DataTable();
        });
      },
        error => this.errorMessage = <any>error);
  }

}

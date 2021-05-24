import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';


@Component({
  selector: 'app-invoice-reports',
  templateUrl: './invoice-reports.component.html',
  styleUrls: ['./invoice-reports.component.css']
})
export class InvoiceReportsComponent implements OnInit {
  transactions: any = [];
  errorMessage: string;
  modalRef: BsModalRef;
  id;
  dtOptions: DataTables.Settings = {};

  constructor(public commonService: CommonServiceService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getTransactions();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  getTransactions() {
    this.commonService.getTransactions()
      .subscribe(res => {
        this.transactions = res;
        $(function () {
          $("table").DataTable();
        });
      },
        error => this.errorMessage = <any>error);
  }

  deleteModal(template: TemplateRef<any>, trans) {
    this.id = trans.id;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm modal-dialog-centered' });
  }

  deleteReport() {
    this.transactions = this.transactions.filter(a => a.id !== this.id);
    this.modalRef.hide();
    // this.commonService.deleteSpeciality(this.id).subscribe((data : any[])=>{
    //   this.modalRef.hide();
    //   this.getTransactions();
    // })
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

}

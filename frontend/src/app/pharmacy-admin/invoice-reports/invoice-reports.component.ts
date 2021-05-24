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
    this.getPharmacyReports();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  getPharmacyReports() {
    this.commonService.getPharmacyReports()
      .subscribe(res => {
        this.transactions = res;
        $(function () {
          $("table").DataTable();
        });
      },
        error => this.errorMessage = <any>error);
  }

  editModal(template: TemplateRef<any>, transaction) {
    this.id = transaction.id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-centered',
    });
  }

  deleteModal(template: TemplateRef<any>, transaction) {
    this.id = transaction.id;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm modal-dialog-centered' });
  }

  deleteReport() {
    this.transactions = this.transactions.filter(a => a.id !== this.id);
    this.modalRef.hide();
  }

  update() {
    let params = {
      id: this.id
    };
    this.modalRef.hide();
  }

}

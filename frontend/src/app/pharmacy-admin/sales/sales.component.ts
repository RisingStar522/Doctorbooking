import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from '../../common-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  sales = [];
  modalRef: BsModalRef;
  errorMessage: string;
  id;
  key;
  constructor(
    private commonService: CommonServiceService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getSales();
  }

  getSales() {
    this.commonService.getSales().subscribe(
      (data: any[]) => {
        this.sales = data;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-centered',
    });
  }

  deleteModal(template: TemplateRef<any>, sales) {
    this.id = sales.id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  editModal(template: TemplateRef<any>, sale) {
    this.id = sale.id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  save() {
    this.modalRef.hide();
  }

  update() {
    let params = {
      id: this.id,
      key: this.key,
    };
    this.modalRef.hide();
  }

  deleteSales() {
    this.sales = this.sales.filter((a) => a.id !== this.id);
    this.commonService.deleteSale(this.id).subscribe((data: any[]) => {
      this.modalRef.hide();
      this.getSales();
    });
  }

  decline() {
    this.modalRef.hide();
  }
}

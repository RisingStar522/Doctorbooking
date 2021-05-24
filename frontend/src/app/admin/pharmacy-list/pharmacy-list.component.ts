import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';

@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.css'],
})
export class PharmacyListComponent implements OnInit {
  pharmacyList = [];
  modalRef: BsModalRef;
  errorMessage: string;
  name;
  id;
  key;
  constructor(
    private commonService: CommonServiceService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getPharmacy();
  }

  getPharmacy() {
    this.commonService.getPharmacy().subscribe(
      (data: any[]) => {
        this.pharmacyList = data;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  editModal(template: TemplateRef<any>, pharmacy) {
    this.id = pharmacy.id;
    this.name = pharmacy.name;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-md modal-dialog-centered',
    });
  }

  update() {
    let params = {
      id: this.id,
      key: this.key,
      speciality: this.name,
    };
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-md modal-dialog-centered',
    });
  }

  deleteModal(template: TemplateRef<any>, pharmacy) {
    this.id = pharmacy.id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  save() {
    this.modalRef.hide();
  }

  deletePharmacy() {
    this.pharmacyList = this.pharmacyList.filter((a) => a.id !== this.id);
    this.commonService.deleteProduct(this.id).subscribe((data: any[]) => {
      this.modalRef.hide();
      this.getPharmacy();
    });
  }

  decline() {
    this.modalRef.hide();
  }
}

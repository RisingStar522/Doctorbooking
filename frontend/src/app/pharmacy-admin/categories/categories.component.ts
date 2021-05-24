import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from '../../common-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = [];
  modalRef: BsModalRef;
  errorMessage: string;
  name: string = 'Cardiology';
  id;
  key;
  constructor(
    private commonService: CommonServiceService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.geCategories();
  }

  geCategories() {
    this.commonService.getCategories().subscribe(
      (data: any[]) => {
        this.categories = data;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  editModal(template: TemplateRef<any>, category) {
    this.id = category.id;
    this.name = category.name;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  deleteModal(template: TemplateRef<any>, category) {
    this.id = category.id;
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
      speciality: this.name,
    };
    this.modalRef.hide();
  }

  deleteCategory() {
    this.categories = this.categories.filter((a) => a.id !== this.id);
    this.commonService.deleteCategory(this.id).subscribe((data: any[]) => {
      this.modalRef.hide();
      this.geCategories();
    });
  }

  decline() {
    this.modalRef.hide();
  }
}


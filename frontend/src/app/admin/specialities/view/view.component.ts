import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from '../../../common-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  speciality = [];
  modalRef: BsModalRef;
  errorMessage: string;
  name;
  img;
  id;
  key;
  selectedFile: File = null;
  fd = new FormData();

  constructor(
    private commonService: CommonServiceService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getSpecialityList();
  }

  createFormData(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('uploadfile', this.selectedFile, this.selectedFile.name);
  }

  getSpecialityList() {
    this.commonService.getSpeciality().subscribe(
      (data: any[]) => {
        this.speciality = data['result'];
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

  editModal(template: TemplateRef<any>, special) {
    this.id = special._id;
    this.name = special.speciality;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-centered',
    });
  }

  deleteModal(template: TemplateRef<any>, special) {
    this.id = special._id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  save() {
    this.fd.append("speciality",this.name);
    this.commonService.createSpeciality(this.fd).subscribe((data : any[])=>{
      this.modalRef.hide();
      this.getSpecialityList();
    })
    this.modalRef.hide();
  }

  update() {
    let params = {
      id: this.id,
      speciality: this.name,
    };
    this.commonService.updateSpeciality(params).subscribe((data : any[])=>{
      this.modalRef.hide();
      this.getSpecialityList();
    });
    this.modalRef.hide();
  }

  deleteSpeciality() {
    this.speciality = this.speciality.filter((a) => a.id !== this.id);
    this.commonService.deleteSpeciality(this.id).subscribe((data: any[]) => {
      this.modalRef.hide();
      this.getSpecialityList();
    });
  }

  decline() {
    this.modalRef.hide();
  }

  btnColor() {
    document.getElementById('btn-yes').style.backgroundColor = '#00d0f1';
    document.getElementById('btn-yes').style.border = '1px solid #00d0f1';
    document.getElementById('btn-yes').style.color = '#fff';

    document.getElementById('btn-no').style.backgroundColor = '#fff';
    document.getElementById('btn-no').style.border = '1px solid #fff';
    document.getElementById('btn-no').style.color = '#000';
  }

  btnColorNo() {
    document.getElementById('btn-no').style.backgroundColor = '#00d0f1';
    document.getElementById('btn-no').style.border = '1px solid #00d0f1';
    document.getElementById('btn-no').style.color = '#fff';

    document.getElementById('btn-yes').style.backgroundColor = '#fff';
    document.getElementById('btn-yes').style.border = '1px solid #fff';
    document.getElementById('btn-yes').style.color = '#000';
  }
}

import { Component, OnInit,TemplateRef } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  doctorsList: any = [];
  errorMessage: string;
  id;
  status;


  constructor(public commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe(
      (res) => {
        this.doctorsList = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  changeStatus(id, status){
    var datas={};
    datas={"_id":id, "status":status};
    this.commonService.doctorStatus(datas).subscribe((data: any[]) => {});
  }
}

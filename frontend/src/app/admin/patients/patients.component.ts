import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common-service.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patientsList: any = [];
  errorMessage: string;

  constructor(public commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.commonService.getpatients()
      .subscribe(res => {
        this.patientsList = res;
        $(function () {
          $("table").DataTable();
        });
      },
        error => this.errorMessage = <any>error);
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './../../common-service.service';
import { TokenStorageService } from '../../services/token-storage.service';
// import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments = [];
  prescriptions = [];
  billings = [];
  patients;
  isLoggedIn;
  roles;
  userEmail;
  userData = [];
  userDatas = [];
  appointmentData = [];
  user_id;
  imageSrc;

  created_by: String;
  doctor_type: String;
  doctor_address: String;
  title: String;
  amount: String;
  patient_id: String;
  status: String;
  paid_time: Date;
  created_at: Date;
  updated_at: Date;

  constructor(
    public commonService: CommonServiceService,
    private tokenStorage: TokenStorageService,
  ) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getRole();
      this.userEmail = this.tokenStorage.getUser();
      this.getPatient();      
    }
  }
  
  getPatient() {
    this.commonService.getPatientinfo(this.userEmail).subscribe(
      (data: any[]) => {
        this.userData = data[0];
        this.userDatas = data;
        this.user_id = data[0]._id;
        
        this.getAppointments();
        this.getPrescriptions();
        this.getBillings();

        if (this.userData['img'] != null && this.userData['img'] != '') {
          this.imageSrc = this.userData['img'];
        } else {
          this.imageSrc = 'assets/img/doctors/doctor-thumb-01.jpg';
        }
      },
    );
  }
  
  getAppointments() {
    this.commonService.getAppointments_byPatient(this.user_id)
      .subscribe((res: any[]) => {
        this.appointments = res;
      });
  }
  getPrescriptions() {
    this.commonService.getPrescriptions_byPatient(this.user_id)
      .subscribe((res: any[]) => {
        this.prescriptions = res;
      });
  }
  getBillings() {
    this.commonService.getBillings_byPatient(this.user_id)
      .subscribe((res: any[]) => {
        this.billings = res;
      });
  }

}

import {Component, OnInit} from '@angular/core';
import {CommonServiceService} from './../../common-service.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments;
  patients;
  isLoggedIn;
  roles;
  userEmail;
  userData = [];
  appointmentData = [];
  user_id;
  imageSrc;

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
    }
    this.getPatient();
    this.getAppointments();
  }

  getPatient(){
    this.commonService.getPatientinfo(this.userEmail).subscribe(
      (data: any[]) => {
        this.userData = data[0];
        this.user_id = data[0]._id;
        if (this.userData['img'] != null && this.userData['img'] != '') {
          this.imageSrc = this.userData['img'];
        } else {
          this.imageSrc = 'assets/img/doctors/doctor-thumb-01.jpg';
        }
      },
    );
  }

  getDoctor(){
    this.commonService.getDoctorinfo(this.userEmail).subscribe(
      (data: any[]) => {
        this.userData = data[0];
        this.user_id = data[0]._id;
        if (this.userData['img'] != null && this.userData['img'] != '') {
          this.imageSrc = this.userData['img'];
        } else {
          this.imageSrc = 'assets/img/doctors/doctor-thumb-01.jpg';
        }
      },
    );
  }

  getAppointments() {
    this.commonService.getAppointments_byPatient(this.userEmail)
      .subscribe(res => {
        this.appointments = res;
        let scope = this;
        this.appointments.forEach(index => {
          let filter = scope.patients.filter(a => a.key === index.patient_key);
          if (filter.length != 0) {
            index['patients'] = filter[0];
          }
        });
      });
  }


}

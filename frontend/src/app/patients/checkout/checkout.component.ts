import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from './../../common-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  doctorDetails;
  doctorId;
  firstName;
  lastName;
  email;
  phone;
  appointments: any = [];
  patients: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public commonService: CommonServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.queryParams['id'];
    this.getDoctorsDetails();
    this.allPatients();
    this.getAppointments();
  }

  getDoctorsDetails() {
    if (!this.doctorId) {
      this.doctorId = 1;
    }
    this.commonService.getDoctorDetails(this.doctorId).subscribe((res) => {
      this.doctorDetails = res;
    });
  }

  allPatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.patients = res;
    });
  }

  patientDetails() {
    let userId = localStorage.getItem('id');
    this.commonService.getPatientDetails(Number(userId)).subscribe((res) => {
      this.patients = res;
    });
  }

  getAppointments() {
    this.commonService.getAppointments().subscribe((res) => {
      this.appointments = res;
    });
  }

  booking() {
    let value = this.patients.reverse();
    let key = value[0]['key'] + '1';
    let params = {
      id: this.appointments.length + 1,
      doctorName: this.doctorDetails.doctor_name,
      type: 'New patient',
      speciality: this.doctorDetails.speciality,
      patient_key: key,
      Patient_Name: this.firstName + this.lastName,
      appointment_time: new Date(),
      status: 'active',
      amount: this.doctorDetails.Price,
    };
    this.commonService.createAppointment(params).subscribe((res) => {
      let patients = {
        id: this.patients.length + 1,
        key: key,
        name: this.firstName + this.lastName,
        phone: this.phone,
        email: this.email,
        paid: this.doctorDetails.Price,
      };
      this.commonService.createPatient(patients).subscribe((patients) => {
        this.allPatients();
        this.getAppointments();
        this.toastr.success('', 'Appointment booked successfully!');
        this.router.navigate(['/patients/success']);
      });
    });
  }
}

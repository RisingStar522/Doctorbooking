import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CommonServiceService} from './../../common-service.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  allDoctors:any =[];
  doctors: any = [];
  specialityList: any = [];
  type;
  specialist = '';
  speciality;
  selDate;

  constructor(public commonService: CommonServiceService, public router: Router) {
  }

  images = [
    {
      path: 'assets/img/features/feature-01.jpg',
    },
    {
      path: 'assets/img/features/feature-02.jpg',
    },
    {
      path: 'assets/img/features/feature-03.jpg',
    },
    {
      path: 'assets/img/features/feature-04.jpg',
    },
  ];

  ngOnInit(): void {
    let query = {};
    this.getDoctors(query);
    this.getspeciality();
  }

  getDoctors(query) {
    this.commonService.getDoctors(query).subscribe(res => {
      this.doctors = res;
      this.allDoctors = res;
    });
  }

  getspeciality() {
    this.commonService.getSpeciality().subscribe(res => {
      this.specialityList = res;
    });
  }

  checkType(event) {
    if (event.target.checked) {
      this.type = event.target.value;
    } else {
      this.type = '';
    }
  }

  
  checkSpeciality(event) {
    // if (event.target.checked) {
      this.speciality = event.target.value;
    // } else {
      // this.speciality = '';
    // }
    
    var filter = this.specialityList.filter(a => a.speciality === event.target.value);
    if (filter.length != 0) {
      filter[0]['checked'] = true;
    }
    this.specialityList.forEach(index => {
      if (index.speciality != event.target.value) {
        index['checked'] = false;
      }
    });
  }
  
  search() {
    if (this.type || this.speciality) {
      this.doctors = this.allDoctors.filter(a => a.type === this.type || a.speciality === this.speciality);
    } else {
      let query = {};
      this.getDoctors(query);
    }
  }
  bookAppointment(id) {
    // if((localStorage.getItem('auth') === 'true') && (localStorage.getItem('patient') === 'true')) {
      this.router.navigateByUrl('/patients/booking?id=' + id);
      // } else {
        //   this.router.navigate(['/']);
        // }
      }

}

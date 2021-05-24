import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { CommonServiceService } from './../common-service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DoctorComponent implements OnInit {
  splitVal;
  url;
  base = 'Doctor';
  page = 'Dashboard';
  doctorSidebar: boolean = true;
  constructor(
    private router: Router,
    public commonService: CommonServiceService
  ) {
    if(router.url === '/doctor/message') {
      this.doctorSidebar = false;
    } else {
      this.doctorSidebar = true;
    }
    
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/doctor/message') {
          this.doctorSidebar = false;
        } else {
          this.doctorSidebar = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split('/');
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
      }
    });
  }
}

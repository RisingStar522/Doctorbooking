import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';

import { CommonServiceService } from './../common-service.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  splitVal;
  base = 'Patients';
  page = 'Dashboard';
  patientSidebar: boolean = false;
  constructor(
    private router: Router,
    public commonService: CommonServiceService
  ) {
    if (
      router.url === '/patients/dashboard' ||
      router.url === '/patients/favourites' ||
      router.url === '/patients/settings'
    ) {
      this.patientSidebar = true;
    } else {
      this.patientSidebar = false;
    }
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/patients/dashboard' ||
          event.url === '/patients/favourites' ||
          event.url === '/patients/settings'
        ) {
          this.patientSidebar = true;
        } else {
          this.patientSidebar = false;
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

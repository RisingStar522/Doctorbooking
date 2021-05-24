import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-map-grid',
  templateUrl: './map-grid.component.html',
  styleUrls: ['./map-grid.component.css'],
})
export class MapGridComponent implements OnInit {
  slider;
  infowindow = null;
  bounds = new google.maps.LatLngBounds();
  map;
  doc_name;
  current = 0;
  content: any;
  mapGrid = true;
  mapList = false;
  locations = [
    {
      id: 1,
      doc_name: 'Dr. Ruby Perrin',
      speciality: 'MDS - Periodontology and Oral Implantology, BDS',
      address: 'Florida, USA',
      next_available: 'Available on Fri, 22 Mar',
      amount: '$300 - $1000',
      lat: 53.470692,
      lng: -2.220328,
      icons: 'default',
      total_review: '17',
      image: 'assets/img/doctors/doctor-01.jpg',
    },
    {
      id: 2,
      doc_name: 'Dr. Darren Elder',
      speciality: 'BDS, MDS - Oral & Maxillofacial Surgery',
      address: 'Newyork, USA',
      next_available: 'Available on Fri, 23 Mar',
      amount: '$50 - $300',
      lat: 53.469189,
      lng: -2.199262,
      icons: 'default',
      total_review: '35',
      image: 'assets/img/doctors/doctor-02.jpg',
    },
    {
      id: 3,
      doc_name: 'Dr. Deborah Angel',
      speciality: 'MBBS, MD - General Medicine, DNB - Cardiology',
      address: 'Georgia, USA',
      next_available: 'Available on Fri, 24 Mar',
      amount: '$100 - $400',
      lat: 53.468665,
      lng: -2.189269,
      icons: 'default',
      total_review: '27',
      image: 'assets/img/doctors/doctor-03.jpg',
    },
    {
      id: 4,
      doc_name: 'Dr. Sofia Brient',
      speciality: 'MBBS, MS - General Surgery, MCh - Urology',
      address: 'Louisiana, USA',
      next_available: 'Available on Fri, 25 Mar',
      amount: '$150 - $250',
      lat: 53.463894,
      lng: -2.17788,
      icons: 'default',
      total_review: '4',
      image: 'assets/img/doctors/doctor-04.jpg',
    },
    {
      id: 5,
      doc_name: 'Dr. Marvin Campbell',
      speciality: 'MBBS, MD - Ophthalmology, DNB - Ophthalmology',
      address: 'Michigan, USA',
      next_available: 'Available on Fri, 25 Mar',
      amount: '$50 - $700',
      lat: 53.466359,
      lng: -2.213314,
      icons: 'default',
      total_review: '66',
      image: 'assets/img/doctors/doctor-05.jpg',
    },
    {
      id: 6,
      doc_name: 'Dr. Katharine Berthold',
      speciality: 'MS - Orthopaedics, MBBS, M.Ch - Orthopaedics',
      address: 'Texas, USA',
      next_available: 'Available on Fri, 25 Mar',
      amount: '$100 - $500',
      lat: 53.463906,
      lng: -2.213271,
      icons: 'default',
      total_review: '52',
      image: 'assets/img/doctors/doctor-06.jpg',
    },
    {
      id: 7,
      doc_name: 'Dr. Linda Tobin',
      speciality: 'MBBS, MD - General Medicine, DM - Neurology',
      address: 'Kansas, USA',
      next_available: 'Available on Fri, 25 Mar',
      amount: '$100 - $1000',
      lat: 53.461974,
      lng: -2.210661,
      icons: 'default',
      total_review: '43',
      image: 'assets/img/doctors/doctor-07.jpg',
    },
    {
      id: 8,
      doc_name: 'Dr. Paul Richard',
      speciality: 'MDS - Periodontology and Oral Implantology, BDS',
      address: 'California, USA',
      next_available: 'Available on Fri, 25 Mar',
      amount: '$100 - $400',
      lat: 53.458785,
      lng: -2.188532,
      icons: 'default',
      total_review: '49',
      image: 'assets/img/doctors/doctor-08.jpg',
    },
    {
      id: 9,
      doc_name: 'Dr. John Gibbs',
      speciality: 'MBBS, MD - Dermatology , Venereology & Lepros',
      address: 'Oklahoma, USA',
      next_available: 'Available on Fri, 25 Mar',
      amount: '$500 - $2500',
      lat: 53.4558571,
      lng: -2.1950372,
      icons: 'default',
      total_review: '112',
      image: 'assets/img/doctors/doctor-09.jpg',
    },
    {
      id: 10,
      doc_name: 'Dr. Olga Barlow',
      speciality: 'MDS - Periodontology and Oral Implantology, BDS',
      address: 'Montana, USA',
      next_available: 'Available on Fri, 25 Mar',
      amount: '$75 - $250',
      lat: 53.45885,
      lng: -2.194549,
      icons: 'default',

      total_review: '65',
      image: 'assets/img/doctors/doctor-10.jpg',
    },
    {
      id: 11,
      doc_name: 'Dr. Julia Washington',
      speciality: 'MBBS, MD - General Medicine, DM - Endocrinology',
      address: 'Oklahoma, USA',
      next_available: 'Available on Fri, 25 Mar',
      amount: '$275 - $450',
      lat: 53.461733,
      lng: -2.194502,
      icons: 'default',
      total_review: '5',
      image: 'assets/img/doctors/doctor-11.jpg',
    },
    {
      id: 12,
      doc_name: 'Dr. Shaun Aponte',
      speciality: 'MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)',
      address: 'Indiana, USA',
      next_available: 'Available on Fri, 25 Mar',
      amount: '$150 - $350',
      lat: 53.460548,
      lng: -2.190956,
      icons: 'assets/img/marker.png',
      total_review: '5',
      image: 'assets/img/doctors/doctor-12.jpg',
    },
  ];
  constructor(public Router: Router) {}
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
    this.initilize();
  }

  mapGridClick() {
    this.mapGrid = true;
    this.mapList = false;
    document.getElementById('list-view').classList.remove('active');
    document.getElementById('grid-view').classList.add('active');
  }
  mapListClick() {
    this.mapGrid = false;
    this.mapList = true;
    document.getElementById('list-view').classList.add('active');
    document.getElementById('grid-view').classList.remove('active');
  }

  setInfo(marker) {
    var content =
      '<div class="profile-widget" style="width: 100%; display: inline-block;">' +
      '<div class="doc-img">' +
      '<a [routerLink]="patients/doctor-profile' +
      '" tabindex="0" target="_blank">' +
      '<img class="img-fluid" alt="' +
      marker.doc_name +
      '" src="' +
      marker.image +
      '">' +
      '</a>' +
      '</div>' +
      '<div class="pro-content">' +
      '<h3 class="title">' +
      '<a [routerLink]="patients/doctor-profile' +
      '" tabindex="0">' +
      marker.doc_name +
      '</a>' +
      '<i class="fas fa-check-circle verified"></i>' +
      '</h3>' +
      '<p class="speciality">' +
      marker.speciality +
      '</p>' +
      '<div class="rating">' +
      '<i class="fas fa-star filled"></i>' +
      '<i class="fas fa-star filled"></i>' +
      '<i class="fas fa-star filled"></i>' +
      '<i class="fas fa-star filled"></i>' +
      '<i class="fas fa-star"></i>' +
      '<span class="d-inline-block average-rating"> (' +
      marker.total_review +
      ')</span>' +
      '</div>' +
      '<ul class="available-info">' +
      '<li><i class="fas fa-map-marker-alt"></i> ' +
      marker.address +
      ' </li>' +
      '<li><i class="far fa-clock"></i> ' +
      marker.next_available +
      '</li>' +
      '<li><i class="far fa-money-bill-alt"></i> ' +
      marker.amount +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>';
    this.infowindow.setContent(content);
  }

  initilize() {
    window.location.reload();
    window.stop();
    this.bounds = new google.maps.LatLngBounds();
    const mapOptions = {
      zoom: 14,
      center: { lat: 53.470692, lng: -2.220328 },
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );
    this.map.slide = true;

    this.setMarkers(this.map, this.locations);
    this.infowindow = new google.maps.InfoWindow({
      content: 'loading...',
    });
    // google.maps.event.addListener(this.infowindow, 'closeclick', function () {
    //   this.infowindow.close();
    // });
    // this.slider = window.setTimeout(this.show, 3000);
  }
  setMarkers(map, locations) {
    for (var i = 0; i < locations.length; i++) {
      let item = locations[i];
      let latlng = new google.maps.LatLng(item.lat, item.lng);
      let marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: 'assets/img/marker.png',
      });
      this.bounds.extend(latlng);
      google.maps.event.addListener(marker, 'click', () => {
        this.setInfo(item);
        this.infowindow.open(map, marker);
      });
    }
    map.fitBounds(this.bounds);
    google.maps.event.addListener(map, 'zoom_changed', function () {
      if (map.zoom > 16) map.slide = false;
    });
  }

  mapListclick() {
    this.Router.navigate(['/map-list']);
  }
}

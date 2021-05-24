import { Component, OnInit,OnDestroy } from '@angular/core';

import { Location } from '@angular/common';

import { CommonServiceService } from './../common-service.service';


@Component({
  selector: 'app-voicecall',
  templateUrl: './voicecall.component.html',
  styleUrls: ['./voicecall.component.css']
})
export class VoicecallComponent implements OnInit,OnDestroy {

  constructor(private location:Location,public commonSerivce:CommonServiceService) { }

  ngOnInit(): void {
     this.commonSerivce.nextmessage('chat');
  }

  ngOnDestroy() {
    this.commonSerivce.nextmessage('');
  }

  back() {
  	 this.location.back()
  }

}

import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { CommonServiceService } from './../../common-service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    public commonService: CommonServiceService,
    private tokenStorage: TokenStorageService,
    private Router: Router,
    private toastr: ToastrService,
  ) {

  }
  isLoggedIn;
  roles;
  userEmail;
  userData = [];
  user_id;
  isUpdatedImg = 0;

  firstname;
  lastname;
  age;
  birth;
  address;
  phone;
  email;
  paid;
  bloodgroup;
  type;
  img;
  country;
  zipcode
  state;
  gender;
  city;

  selectedFile: File = null;
  fd = new FormData();

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
        this.userData = data[0]
        this.user_id = data[0]._id;
        this.firstname = this.userData["firstname"];
        this.lastname = this.userData["lastname"];
        this.birth = this.userData["birth"];
        this.address = this.userData["address"];
        this.phone = this.userData["phone"];
        this.email = this.userData["email"];
        this.gender = this.userData["gender"];
        this.paid = this.userData["paid"];
        this.img = this.userData["img"];
        this.country = this.userData["country"];
        this.zipcode = this.userData["zipcode"];
        this.state = this.userData["state"];
        this.city = this.userData["city"];
        this.bloodgroup = this.userData["blood"];
      },
    );
  }

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  onFileChange(event) {
    this.selectedFile = <File> event.target.files[0];
    this.fd.append('uploadfile', this.selectedFile, this.selectedFile.name);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.isUpdatedImg = 1;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.img = reader.result as string;
        this.myForm.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

  saveProfile() {
    this.fd.append('_id', this.user_id);
    this.fd.append('firstname', this.firstname);
    this.fd.append('lastname', this.lastname);
    this.fd.append('birth', this.birth);
    this.fd.append('address', this.address);
    this.fd.append('phone', this.phone);
    this.fd.append('email', this.email);
    this.fd.append('gender', this.gender);
    this.fd.append('country', this.country);
    this.fd.append('zipcode', this.zipcode);
    this.fd.append('state', this.state);
    this.fd.append('city', this.city);
    this.fd.append('bloodgroup', this.bloodgroup);
    this.fd.append('isUpdatedImg', this.isUpdatedImg.toString());

    this.commonService.patientChange(this.fd).subscribe((data: any[]) => {
      this.getPatient();
      this.toastr.success('', data['msg']);
      // this.Router.navigateByUrl('/patients/dashboard');
    });
  }
}
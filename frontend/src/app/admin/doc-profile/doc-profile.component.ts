import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {CommonServiceService} from '../../common-service.service';
import {TokenStorageService} from '../services/token-storage.service';
import {AuthService} from '../services/auth.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-doc-profile',
  templateUrl: './doc-profile.component.html',
  styleUrls: ['./doc-profile.component.css'],
})
export class DocProfileComponent implements OnInit {
  constructor(
    private Router: Router,
    private authService: AuthService,
    private modalService: BsModalService,
    private tokenStorage: TokenStorageService,
    private commonService: CommonServiceService,
    private toastr: ToastrService,
  ) {
  }

  modalRef: BsModalRef;
  userEmail;
  userinfo = [];
  changePass = false;
  errorMessage: string;
  personalDetails = true;
  id;
  userid;
  name;
  /////////////////////////////////
  firstname;
  lastname;
  birth;
  email;
  phone;
  address;
  city;
  state;
  zipcode;
  country;

  oldpassword;
  password;
  confirmpass;
  imageSrc: String;

  selectedFile: File = null;
;
  fd = new FormData();


  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });


  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {
    this.selectedFile = <File> event.target.files[0];
    this.fd.append('uploadfile', this.selectedFile, this.selectedFile.name);

    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.myForm.patchValue({
          fileSource: reader.result
        });
        console.log(this.myForm);
      };
    }
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.userEmail = this.tokenStorage.getUser();
      this.getAdminInfo();
    }
  }

  getAdminInfo() {
    this.commonService.getUserinfo(this.userEmail).subscribe(
      (data: any[]) => {
        this.userinfo = data[0];

        if (this.userinfo['avatar'] != null && this.userinfo['avatar'] != '') {
          this.imageSrc = this.userinfo['avatar'];
        } else {
          this.imageSrc = 'assets/img/doctors/doctor-thumb-01.jpg';
        }
      },
      (error) => (this.errorMessage = <any> error)
    );

  }

  editTop() {
    this.changePass = false;
    this.personalDetails = true;
    document.getElementById('about').classList.add('active');
    document.getElementById('pass').classList.remove('active');
  }

  createFormData(event) {
    this.selectedFile = <File> event.target.files[0];
    this.fd.append('uploadfile', this.selectedFile, this.selectedFile.name);
  }

  save() {
    this.fd.append('email', this.userEmail);
    this.commonService.adminAvatarChange(this.fd).subscribe((data: any[]) => {
      this.modalRef.hide();
      this.getAdminInfo();
      this.toastr.success('', 'Successfully changed!');
    });
    this.modalRef.hide();
    console.log(this.fd);
  }

  updatePassword() {
    if (this.password != this.confirmpass) {
      this.toastr.error('', 'New password does not match !');
    } else {
      this.authService.updatePassword(this.userEmail, this.oldpassword, this.password).subscribe(
        data => {
          console.log('data = ', data);
          if (data.status != 'failed') {
            this.tokenStorage.saveToken(data.accessToken);
            this.toastr.success('', 'Successfully updated!');
            this.getAdminInfo();
          } else {
            this.toastr.error('', data.msg);
          }
        },
        err => {
          this.toastr.error('', 'Password update failed!');
        }
      );
    }
  }

  topEditModal(template: TemplateRef<any>, user) {
    this.id = user._id;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog modal-dialog-centered',
    });
  }

  editDetailsModal(template: TemplateRef<any>, user) {
    this.userid = user._id;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.birth = user.birth;
    this.email = user.email;
    this.phone = user.phone;
    this.address = user.address;
    this.city = user.city;
    this.state = user.state;
    this.zipcode = user.zipcode;
    this.country = user.country;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog modal-dialog-centered',
    });
  }

  updateDetails() {
    let params = {
      firstname: this.firstname,
      lastname: this.lastname,
      birth: this.birth,
      email: this.email,
      phone: this.phone,
      address: this.address,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      country: this.country,
    };
    let datas = {
      itemid: this.userid,
      param: params
    };
    console.log(datas);
    this.commonService.updateAdminInfo(datas).subscribe((data: any[]) => {
      this.modalRef.hide();
      this.getAdminInfo();
    });
    this.modalRef.hide();
  }

  about() {
    this.changePass = false;
    this.personalDetails = true;
    document.getElementById('about').classList.add('active');
    document.getElementById('pass').classList.remove('active');
  }

  pass() {
    this.changePass = true;
    this.personalDetails = false;
    document.getElementById('about').classList.remove('active');
    document.getElementById('pass').classList.add('active');
  }

  submit() {
    this.Router.navigateByUrl('/admin/doc-profile');
  }
}

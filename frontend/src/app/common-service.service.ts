import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  public patients: any = [
    {
      patientName: 'Richard Wilson',
      patient_id: 'P0016',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'New patient',
      email: 'richard@example.com',
      phone: '+1 923 782 4575',
      amount: 150,
      status: 0,
    }
  ];

  messages: '';
  SERVER_URL: string = 'http://localhost:3000/api/';
  message: BehaviorSubject<String>;

  constructor(public http: HttpClient) {
    this.message = new BehaviorSubject(this.messages);
  }

  nextmessage(data) {
    this.message.next(data);
  }

  getJSON(): Observable<any> {
    // return this.http.get("./assets/data.json");
    return this.patients;
  }

  update(id, status, list) {
    let filter = list.filter((a) => a.patient_id === id);
    if (filter.length != 0) {
      filter['status'] = status;
    }
  }

  doctorStatus(data) {
    return this.http.post(`${this.SERVER_URL + 'user/doctorStatus'}`, data);
  }

  getAdmininfo(user) {
    var userinfo = {};
    userinfo = {'email': user};
    return this.http.post(`${this.SERVER_URL + 'user/getAdmin'}`, userinfo);
  }

  getDoctorinfo(user) {
    var userinfo = {};
    userinfo = {'email': user};
    return this.http.post(`${this.SERVER_URL + 'user/getDoctor'}`, userinfo);
  }

  getPatientinfo(user) {
    var userinfo = {};
    userinfo = {'email': user};
    return this.http.post(`${this.SERVER_URL + 'user/getPatient'}`, userinfo);
  }

  adminAvatarChange(data) {
    return this.http.post(`${this.SERVER_URL + 'user/editAdminAvatar'}`, data);
  }

  patientChange(data) {
    return this.http.post(`${this.SERVER_URL + 'user/editPatientProfile'}`, data);
  }

  updateAdminInfo(data) {
    return this.http.post(`${this.SERVER_URL + 'user/updateAdminDetails'}`, data);
  }

  getSpeciality() {
    return this.http.get(this.SERVER_URL + 'specialties/getSpecialtiesList');
  }

  createSpeciality(data) {
    return this.http.post(`${this.SERVER_URL + 'specialties/addSpecialties'}`, data);
  }


  updateSpeciality(data) {
    return this.http.post(`${this.SERVER_URL + 'specialties/editSpecialties'}/`, data);
  }

  deleteSpeciality(id) {
    var data = {};
    data = {'_id': id};
    return this.http.post(`${this.SERVER_URL + 'specialties/deleteSpecialties'}`, data);
  }

  getDoctors() {
    return this.http.get(this.SERVER_URL + 'user/doctors');
  }

  getDoctorDetails(id) {
    return this.http.get(`${this.SERVER_URL + 'doctors'}/${id}`);
  }

  getAppointments() {
    return this.http.get(this.SERVER_URL + 'appointments');
  }

  getAppointments_byPatient(id) {
    var data = {};
    data = {'_id': id};
    return this.http.post(`${this.SERVER_URL + 'getAppointment'}`, data)
  }
  getPrescriptions_byPatient(id) {
    var data = {};
    data = {'_id': id};
    return this.http.post(`${this.SERVER_URL + 'getPrescription'}`, data)
  }
  getBillings_byPatient(id) {
    var data = {};
    data = {'_id': id};
    return this.http.post(`${this.SERVER_URL + 'getBills'}`, data)
  }

  updateAppointment(data, id) {
    return this.http.put(`${this.SERVER_URL + 'appointments'}/${id}`, data);
  }

  getpatients() {
    return this.http.get(this.SERVER_URL + 'user/patients');
  }

  createBlogs(data) {
    return this.http.post(`${this.SERVER_URL + 'blogs'}`, data);
  }

  getBlogs() {
    return this.http.get(this.SERVER_URL + 'blogs');
  }

  getBlogsDetails(id) {
    return this.http.get(`${this.SERVER_URL + 'blogs'}/${id}`);
  }

  updateBlog(data, id) {
    return this.http.put(`${this.SERVER_URL + 'blogs'}/${id}`, data);
  }

  deleteBlog(id) {
    return this.http.delete(`${this.SERVER_URL + 'blogs'}/${id}`);
  }

  createDoctor(data) {
    return this.http.post(`${this.SERVER_URL + 'auth/signup'}`, data);
  }

  createPatient(data) {
    return this.http.post(`${this.SERVER_URL + 'patients'}`, data);
  }

  getPatientDetails(id) {
    return this.http.get(`${this.SERVER_URL + 'patients'}/${id}`);
  }

  createAppointment(params) {
    return this.http.post(`${this.SERVER_URL + 'appointments'}`, params);
  }

  getFav() {
    return this.http.get(this.SERVER_URL + 'favourites');
  }

  getFav_byPatient(id) {
    var data = {};
    data = {'_id': id};
    return this.http.post(this.SERVER_URL + 'getFavourite_byPatients', data);
  }

  createFav(params) {
    return this.http.post(this.SERVER_URL + 'favourites', params);
  }

  getComments() {
    return this.http.get(this.SERVER_URL + 'comments');
  }

  createComment(params) {
    return this.http.post(this.SERVER_URL + 'comments', params);
  }

  deleteFav(id) {
    return this.http.delete(`${this.SERVER_URL + 'favourites'}/${id}`);
  }

  getTransactions() {
    return this.http.get(this.SERVER_URL + 'transactions');
  }

  deleteTransaction(id) {
    return this.http.delete(`${this.SERVER_URL + 'transactions'}/${id}`);
  }

  getReviews() {
    return this.http.get(this.SERVER_URL + 'reviews');
  }

  deleteReview(id) {
    return this.http.delete(`${this.SERVER_URL + 'reviews'}/${id}`);
  }

  getProducts() {
    return this.http.get(this.SERVER_URL + 'products');
  }

  deleteProduct(id) {
    return this.http.delete(`${this.SERVER_URL + 'products'}/${id}`);
  }

  getCategories() {
    return this.http.get(this.SERVER_URL + 'categories');
  }

  deleteCategory(id) {
    return this.http.delete(`${this.SERVER_URL + 'categories'}/${id}`);
  }

  getOrders() {
    return this.http.get(this.SERVER_URL + 'orders');
  }

  deleteOrder(id) {
    return this.http.delete(`${this.SERVER_URL + 'orders'}/${id}`);
  }

  getPharmacyReports() {
    return this.http.get(this.SERVER_URL + 'pharmacy_reports');
  }

  deletePharmacyReports(id) {
    return this.http.delete(`${this.SERVER_URL + 'pharmacy_reports'}/${id}`);
  }

  getPurchase() {
    return this.http.get(this.SERVER_URL + 'purchase');
  }

  deletePurchase(id) {
    return this.http.delete(`${this.SERVER_URL + 'purchase'}/${id}`);
  }

  getSales() {
    return this.http.get(this.SERVER_URL + 'sales');
  }

  deleteSale(id) {
    return this.http.delete(`${this.SERVER_URL + 'sale'}/${id}`);
  }

  getPharmacyTransactions() {
    return this.http.get(this.SERVER_URL + 'pharmacy_transactions');
  }

  deletePharmacyTransactions(id) {
    return this.http.delete(`${this.SERVER_URL + 'pharmacy_transactions'}/${id}`);
  }

  getPharmacy() {
    return this.http.get(this.SERVER_URL + 'pharmacy');
  }

  deletePharmacy(id) {
    return this.http.delete(`${this.SERVER_URL + 'pharmacy'}/${id}`);
  }
}

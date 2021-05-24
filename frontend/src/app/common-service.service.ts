import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
    },
    {
      patientName: 'Richard Wilson',
      patient_id: 'P0001',
      email: 'richard@example.com',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'Old patient',
      phone: '+1 828 632 9170',
      amount: 200,
      status: 0,
    },
    {
      patientName: 'Richard Wilson',
      patient_id: 'P0002',
      email: 'richard@example.com',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'New patient',
      phone: '+1 828 632 9170',
      amount: 350,
      status: 0,
    },
    {
      patientName: 'Richard Wilson',
      email: 'richard@example.com',
      patient_id: 'P0003',
      apptDate: 'Sat May 23 2020 13:35:47 GMT+0530 (India Standard Time)',
      purpose: 'General',
      type: 'New patient',
      amount: 400,
      status: 0,
    },
  ];

  messages: '';
  SERVER_URL: string = 'http://localhost:8080/api/';
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

  getSpeciality() {
    return this.http.get(this.SERVER_URL + 'specialityList');
  }

  createSpeciality(data) {
    return this.http.post(`${this.SERVER_URL + 'specialityList'}`, data);
  }

  updateSpeciality(data, id) {
    return this.http.put(`${this.SERVER_URL + 'specialityList'}/${id}`, data);
  }

  deleteSpeciality(id) {
    return this.http.delete(`${this.SERVER_URL + 'specialityList'}/${id}`);
  }

  getDoctors() {
    return this.http.get(this.SERVER_URL + 'doctors');
  }

  getDoctorDetails(id) {
    return this.http.get(`${this.SERVER_URL + 'doctors'}/${id}`);
  }

  getAppointments() {
    return this.http.get(this.SERVER_URL + 'appointments');
  }

  updateAppointment(data, id) {
    return this.http.put(`${this.SERVER_URL + 'appointments'}/${id}`, data);
  }

  getpatients() {
    return this.http.get(this.SERVER_URL + 'patients');
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
    return this.http.post(`${this.SERVER_URL + 'doctors'}`, data);
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

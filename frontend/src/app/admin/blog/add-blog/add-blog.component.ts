import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from '../../../common-service.service'

@Component({
  selector: 'app-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
	blogs : any = [];
	title ;
	description ;
	type ;
	modalRef:BsModalRef ;
	blogDetails;
  id;
  constructor(private modalService: BsModalService,private commonService: CommonServiceService) { }

  ngOnInit(): void {
  	this.getBlogs();
  }

  openModal(template: TemplateRef<any>) {
  	this.id = "";
	    this.title = "";
	    this.type = "";
	    this.description = "";
    this.modalRef = this.modalService.show(template,{class: 'modal-lg modal-dialog-centered'});
  }

  decline() {
    this.modalRef.hide();
  }

  editModal(template: TemplateRef<any>,blog) {
  	let data = blog;
  	this.blogDetails = blog;
  	this.id = blog['id'];
  	this.title = blog['title'];
  	this.type = blog['type'];
	   this.description = blog['description'];
  
    this.modalRef = this.modalService.show(template,{class: 'modal-lg modal-dialog-centered'});
  }

  deleteModal(template: TemplateRef<any>,blog) {
    this.modalRef = this.modalService.show(template,{class: 'modal-sm modal-dialog-centered'});
  }

  deleteBlog() {
  	this.commonService.deleteBlog(this.id).subscribe((data : any[])=>{      
      this.modalRef.hide();
      this.getBlogs();
    })
  }

  update() {
  	let params = {
      	id : this.id,
	    title : this.blogDetails.title,
	    description : this.blogDetails.description,
	    createdBy : "Dr. Deborah Angel",
	    createdAt : new Date(),
	    comments : 0,
	    type : this.type,
	    status : "active"
    }
    this.commonService.updateBlog(params,this.id).subscribe((data : any[])=>{
      	this.getBlogs();	
        this.modalRef.hide();
        
    })
  }

  save() {
  	let params = {
  		id : this.blogs.length+1,
	    title : this.title,
	    description : this.description,
	    createdBy : "Dr. Deborah Angel",
	    createdAt : new Date(),
	    comments : "",
	    type : this.type,
	    status : "active"
  	}
  	this.commonService.createBlogs(params).subscribe((data : any[])=>{
      this.modalRef.hide();
      this.getBlogs();
    })
  }

    getBlogs() {
	  	this.commonService.getBlogs()
	  		.subscribe(res=>{
	  			this.blogs = res;
	  		})
    }

}

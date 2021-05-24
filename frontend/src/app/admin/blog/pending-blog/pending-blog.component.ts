import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonServiceService } from '../../../common-service.service'

@Component({
  selector: 'pending-blog',
  templateUrl: './pending-blog.component.html',
  styleUrls: ['./pending-blog.component.css']
})
export class PendingBlogComponent implements OnInit {
	blogs: any = [];
  firstBlock: any = [];
  constructor(public commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.getBlogs();
    this.getBlogdetails();
    window.scrollTo(0, 0);
  }

  getBlogs() {
    this.commonService.getBlogs().subscribe((result) => {
      this.blogs = result;
    });
  }

  getBlogdetails() {
    this.commonService.getBlogsDetails(1).subscribe((res) => {
      this.firstBlock = res;
    });
  }
}

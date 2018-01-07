import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {

  data: any = null;
  
    constructor(private _http: Http) {
      this.getMyBlog();
    }
  
    private getMyBlog() {
      return this._http.get('http://localhost:5000/api/blogs/2')
                  .map((res: Response) => res.json())
                   .subscribe(data => {
                          this.data = data;
                          console.log(this.data);
                  });
    }

}

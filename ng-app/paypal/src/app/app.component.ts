import { Component, OnInit } from '@angular/core';
import { UserPostService } from './user-post.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  url = 'https://api.github.com/users/seeschweiler';
  userName: string;
  username: string;
    
  constructor(private http: HttpClient, private userPostService: UserPostService) {            
  }
  onFetchUser() {
      interface UserResponse {
            name: string;
      }
      this.http.get<UserResponse>(this.url)
        .subscribe(userData => {
            this.userName = userData.name;
          },
          err => {
            this.userName = 'Error. Can\'t retrieve data'; 
          }
      );
  }
  ngOnInit() {
  }
}

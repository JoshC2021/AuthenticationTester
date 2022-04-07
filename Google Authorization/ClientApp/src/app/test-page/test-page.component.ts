import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {


  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

  }

}

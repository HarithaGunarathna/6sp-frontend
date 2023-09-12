import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '6sp-frontend';
  userIcon;
  router1;

  constructor(public router: Router){
    this.userIcon = faUser
    this.router1 = router
  }

  ngOnInit(): void {

  }
}

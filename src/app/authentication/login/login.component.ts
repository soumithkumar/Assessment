import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute,Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: object = {};
  constructor( private authService:AuthService,private router:Router ) {
    console.error(authService)
  }

  ngOnInit() {
  }

  onClickLogin(){
     if(this.authService.validateUser(this.loginModel)){
       this.router.navigate(['/list']);
     }
  }

}

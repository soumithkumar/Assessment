import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  validateUser(loginModel){
       //Here we need to call REST API to authenticate an user, as of now we are returning true all the time
       return true;
  }
}

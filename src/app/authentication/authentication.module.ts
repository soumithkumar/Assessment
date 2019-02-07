import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { PasswordValidatorDirective } from './password-validator.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, PasswordValidatorDirective],
  imports: [
    CommonModule,FormsModule
  ],
  providers:[AuthService]

})
export class AuthenticationModule { }

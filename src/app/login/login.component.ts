import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData:FormGroup;


  constructor(private fbuild:FormBuilder,private authService:AuthService){

    this.loginData=this.fbuild.group({
      username:['',],
      password:['',]
    })
  }

  onSubmit(loginData:any){
    console.log(this.loginData.value)
   // this.authService.loginServices(loginData.value).subscribe(res=>{console.log('Server response is:',res)});
  }
}

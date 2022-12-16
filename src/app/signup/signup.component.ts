import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  regData:FormGroup;

  constructor(private fbuild:FormBuilder,private authService:AuthService){
      this.regData=this.fbuild.group({
        username:['',],
        password:['',],
        email:['',],
        roles:[]
      })
  }

  onSubmit(regData:any){
    console.log(regData.value);
    this.authService.regServices(regData.value).subscribe((res)=>{
      console.log("server response:",res);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private rounter: Router) { }

  ngOnInit(): void {}
  onSubmit(f: NgForm){
    console.log(f.value)
    console.log(f.valid);
    
    const {email, password} = f.form.value;
    this.auth.signUp(email, password)
    .then((res) => this.rounter.navigateByUrl('/'))
    .catch(err => console.log(err.message))
  }

}

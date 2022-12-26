import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    // private toastr: ToastrService
  ) { 
    auth.getUser().subscribe(user => {
      this.email = user ? user.email || '': '';
    })
  }

  ngOnInit(): void {}

  async handleSignOut(){
    try {
      const res = await this.auth.signOut()
      this.router.navigateByUrl('/signin');
      // this.toastr.info('Login Again to Continue..');
      this.email = '';
    } catch (error) {
      console.log('Something is wrong!');
      // this.toastr.error('Something is wrong!')
    }
  }
  

}

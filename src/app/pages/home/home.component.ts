import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any= null;
  username:any;
  error:any = null;
  isloading:boolean = true

  constructor( private githubService: GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleFind(){
    this.githubService.getUserDetails(this.username).subscribe( (user)=> {
      this.isloading=false
      this.user = user;
      console.log(this.user);
      
      this.error = null;
      this.ref.detectChanges();
      this.isloading=true;
    },
    (err) => {
      console.log("User not found")
      this.error = "User not found";
      this.ref.detectChanges();
    }
    )
  }
}

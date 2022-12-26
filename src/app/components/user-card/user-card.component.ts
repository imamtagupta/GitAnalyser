import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  statsUrl: string='';
  constructor() {}

  ngOnInit(): void {
    if(this.user){
      this.statsUrl = `https://github-readme-stats.vercel.app/api?username=${this.user.login}&show_icons=true&hide_rank=true&hide_border=true`;
      console.log(this.statsUrl);
    }
  }

}

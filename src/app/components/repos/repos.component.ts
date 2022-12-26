import { Component, Input, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from '../../services/github.service'

@Component({
  selector: 'app-repos',  
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() repoUrl: any;
  @Input() userName: any;
  repos: any = []
  repoNames: any = []

  langUrl: string = '';

  constructor(private githubService: GithubService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if(this.repoUrl){
      
      this.githubService.getRepos(this.repoUrl).subscribe((reps) => {

        this.repos = reps;

        if(this.userName){
          this.langUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${this.userName}&langs_count=8`;
          console.log(this.langUrl);
          this.repos.slice(-3).forEach((ele: any) => {
            this.repoNames.push(`https://github-readme-stats.vercel.app/api/pin/?username=${this.userName}&repo=${ele.name}`)
          });
          console.log(this.repoNames);
        }
        this.changeDetectorRef.detectChanges()
      },
      (err) => {
        console.log(err);
      })
    }
  }
  // ngOnChange(): void{    
  //   if(this.repoUrl){
      
  //     this.githubService.getRepos(this.repoUrl).subscribe((reps) => {

  //       this.repos = reps;
  //       if(this.userName){
  //         this.langUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${this.userName}&langs_count=8`;
  //         console.log(this.langUrl);
          
  //       }
  //       this.changeDetectorRef.detectChanges()
  //     },
  //     (err) => {
  //       console.log(err);
  //     })
  //   }
  // }

} 

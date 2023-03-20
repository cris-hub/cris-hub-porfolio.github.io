import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() imageCaption: string | undefined;
  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
    this.imageCaption = "Hi" 
  }



  cvUrl: any
  constructor(private profileService:ProfileService) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl
  }

  

}

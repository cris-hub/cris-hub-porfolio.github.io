import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  public eductions : any = [];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.eductions = this.profileService.education();
  }

}

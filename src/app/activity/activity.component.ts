import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {

  public activity: any = [];

  constructor(private _activityService: ActivityService) {
    _activityService.getActivity().subscribe(
      (data: any) => {
        this.activity = [data];
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  reload(){
    this._activityService.getActivity().subscribe(
      (data: any) => {
        this.activity = [data];
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }

}

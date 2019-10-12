import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photo: any;
  private _stateService: StateService;
  constructor(stateService: StateService) {
    this._stateService = stateService;
   }

  ngOnInit() {
    this.photo = this._stateService.data;
  }

}

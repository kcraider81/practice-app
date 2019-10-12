import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../shared/state.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  constructor(private stateService: StateService) {
   }

  ngOnInit() {
    let x = this.post;
  }

 
}

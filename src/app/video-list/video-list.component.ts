import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs:['videos']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

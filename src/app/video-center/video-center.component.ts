import { Component, OnInit } from '@angular/core';
import { Video } from './../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  video: Video[] = [
    {'_id': "1","title": "title1", "url": "Url1", "description": "desc1"},
    {'_id': "1","title": "title2", "url": "Url2", "description": "desc2"},
    {'_id': "1","title": "title3", "url": "Url3", "description": "desc3"}
  ];
  constructor() { }

  ngOnInit() {
  }

}

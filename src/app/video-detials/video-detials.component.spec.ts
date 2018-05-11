import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetialsComponent } from './video-detials.component';

describe('VideoDetialsComponent', () => {
  let component: VideoDetialsComponent;
  let fixture: ComponentFixture<VideoDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

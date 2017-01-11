import { Component } from '@angular/core';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-videos',
  template: `
    <div class="row">
  <div class="col-xs-6">
    <app-video-list></app-video-list>
  </div>
  <div class="col-xs-6">
    <app-video-detail></app-video-detail>
  </div>
</div>
  `
})
export class VideosComponent {
  constructor() {}



}

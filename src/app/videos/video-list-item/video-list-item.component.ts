import { Component, Input } from "@angular/core";
import { Video } from "../shared/video.model";
import { AppStateService } from "../../shared/app-state.service";

@Component({
  moduleId: module.id,
  selector: 'app-video-list-item',
  template: `
    <div class="row">
  <div class="col-xs-4">
    <a href="#" (click)="onClick()"><img src="{{video.thumbnailUrl}}" class="img-fluid"></a>
  </div>
  <div class="col-xs-8">
    <div class="row title"><a href="#" (click)="onClick()">{{video.title}}</a></div>
    <div class="row channel">
      <a href="http://youtube.com/channel/{{video.channelId}}" target="_blank">
        {{video.channelTitle}}
      </a>
    </div>
    <div class="row date">
      {{video.publishedAt}}
    </div>
    <div class="row hidden-sm-down description">
      {{video.description}}
    </div>
  </div>
</div>
  `
})
export class VideoListItemComponent {
  @Input() video: Video;

  constructor(private appState: AppStateService) {}

  onClick(){
    this.appState.activeVideo = this.video;
  }

}

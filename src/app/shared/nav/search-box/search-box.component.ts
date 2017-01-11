import { Component, OnInit } from '@angular/core';
import { VideoService } from "../../../videos/shared/video.service";
import { AppStateService } from "../../app-state.service";
import * as moment from 'moment';
import { Video } from "../../../videos/shared/video.model";


@Component({
  moduleId: module.id,
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  constructor(private videoService: VideoService, private appState: AppStateService) {}

  search(query: string) {
    this.videoService.fetchVideos(query)
      .subscribe(data => {
        this.appState.videoList = data.items.map(item => {
          return new Video(
            item.id.videoId,
            item.snippet.title,
            item.snippet.thumbnails.high.url,
            item.snippet.channelTitle,
            item.snippet.channelId,
            moment(item.snippet.publishedAt).fromNow(),
            item.snippet.description)
        });
      });
  }
}
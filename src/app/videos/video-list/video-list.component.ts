import { Component, OnInit } from "@angular/core";
import { VideoService } from "../shared/video.service";
import { Video } from "../shared/video.model";
import * as moment from "moment";
import { AppStateService } from "../../shared/app-state.service";

@Component({
  moduleId: module.id,
  selector: 'app-video-list',
  template: `
    <div class="row">
  <ul class="list-group border">
    <li class="list-group-item" [class.playing] = "v === appState.activeVideo" *ngFor="let v of appState.videoList | paginate: {itemsPerPage: 5, currentPage: p}">
      <app-video-list-item [video]="v"></app-video-list-item>
    </li>
  </ul>
</div>
<div *ngIf="appState.videoList.length > 0" class="pagination-centered">
  <pagination-controls #api (pageChange)="p = $event">
    <nav>
      <ul class="pagination">
        <li class="page-item" [class.disabled]="api.isFirstPage()">
          <a class="page-link" href="#" aria-label="Previous" (click)="api.previous()">
            <span aria-hidden="true" class="fa fa-arrow-left"></span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item" *ngFor="let page of api.pages" [class.active]="api.getCurrent() === page.value">
          <a class="page-link" href="#" (click)="api.setCurrent(page.value)" >
            <span>{{ page.label }}</span>
          </a>
        </li>
        <li class="page-item" [class.disabled]="api.isLastPage()">
          <a class="page-link" href="#" aria-label="Next" (click)="!api.isLastPage() && api.next()">
            <span aria-hidden="true" class="fa fa-arrow-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </pagination-controls>
</div>
  `
})
export class VideoListComponent implements OnInit {

  videoList:Video[] = [];

  constructor(private videoService:VideoService, private appState:AppStateService) {
  }


  ngOnInit() {
    this.videoService.fetchVideos('typescript')
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
        this.appState.activeVideo = this.appState.videoList[0];
      });
  }


}

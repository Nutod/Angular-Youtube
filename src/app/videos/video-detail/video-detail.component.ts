import { Component } from "@angular/core";
import { AppStateService } from "../../shared/app-state.service";

@Component({
  moduleId: module.id,
  selector: 'app-video-detail',
  template: `
    <div class="embed-container">
  <iframe width="560"
          height="315"
          frameborder="0"
          allowfullscreen
          [src]="appState.activeVideo?.videoId | youtubeSafeUrl">
  </iframe>
</div>
  `
})
export class VideoDetailComponent {

  constructor(private appState: AppStateService) {}

}


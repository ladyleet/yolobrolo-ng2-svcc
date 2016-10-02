import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  template: `
  <div class="container">
    <div class="row">
      <div class="col s12">
          <h1>Featured Video</h1>
          <h5>This video is actually useful. It's me live coding up an Angular 2 app. You'll get use out of it. The other stuff, YOLO!</h5>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="card-panel center-align">
          <div class="video-container">
            <iframe width="640" height="480" src="https://www.youtube.com/embed/YObmj7nYeLM?rel=0" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

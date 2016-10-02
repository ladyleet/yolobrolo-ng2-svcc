import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="container">
    <div class="row">
      <div class="col s12">
          <h1>About Yolobrolo</h1>
      </div>
      <div>
        <h5>
          The question truly becomes, what on earth are these videos? This site was created as a demo for a simple ember application. The real site, yolobrolo.com, will exist sometime in the near future. They might be useful. They might not. They might be watchable. They might not. But YOLO!
        </h5>
      </div>
      <div>
        <h5>You can find me on the internet <a href="http://twitter.com/ladyleet">@ladyleet</a> or follow along my medium posts for demoing this site <a href="http://medium.com/@ladyleet">here</a>.</h5>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

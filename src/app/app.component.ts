import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <div class="nav-wrapper purple">
      <a href="#" class="brand-logo center">Yolobrolo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/about">About</a></li>
        <li><a href="/videos">Videos</a></li>
        <li><a href="/featured">Featured</a></li>
      </ul>
    </div>
  </nav>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';
}

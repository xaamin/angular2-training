import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'APP works!';
  private header: string = 'NullData';

  private changeTitle(title: string) {
      this.title = title;
  }
}

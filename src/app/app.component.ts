import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-angular';
  name = 'Nutz Allstar';
  names = [];
  datas = [
    { id: 1, name: 'nutzallstar' },
    { id: 2, name: 'nutz' }
  ];

  doSth(newName: string) {
    console.log(newName);
    this.name = newName;
  }
}

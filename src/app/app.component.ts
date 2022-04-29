import { User } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // parentName = { id: 1, name: 'nutz' };
  parentName: User = { id: 1, name: 'nutz' };
  // parentName = new User(1, 'nutz');

  onResponse(event: User) {
    console.log('On response in parent');
    console.table(event);
  }

}

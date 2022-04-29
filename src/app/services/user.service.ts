import { Injectable } from '@angular/core';

const URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAllUsers() {
    console.log('Call getAllUsers()');
  }

}

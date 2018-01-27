import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from './user.model';

@Injectable()
export class UserDocsService {

  users;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

    getUsers(){
      return this.users;
    }
    addUser(UserName, docName, text){
      this.users.push({name: UserName, doc: docName, input: text});
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDocsService } from '../user-docs.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [UserDocsService]
})
export class WelcomeComponent implements OnInit {
  Users;
  constructor(private router: Router, private UserDocsService: UserDocsService) { }

  ngOnInit() {
    this.Users = this.UserDocsService.getUsers();
  }
  switchPage() {
    this.router.navigate(['work']);
  }
  newUser(UserName, docName, text) {
    this.UserDocsService.addUser(UserName, docName, text);
  }

}

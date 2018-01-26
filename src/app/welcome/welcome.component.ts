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

  constructor(private router: Router) { }

  ngOnInit() {
  }
  switchPage() {
    this.router.navigate(['work']);
  }

}

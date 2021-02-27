import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService";
import {first} from "rxjs/operators";

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'names', 'email', 'policies'];
  dataSource: any

  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.dataSource = users;
    });
  }

}

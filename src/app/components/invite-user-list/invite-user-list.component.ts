import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-invite-user-list',
  templateUrl: './invite-user-list.component.html',
  styleUrls: ['./invite-user-list.component.sass']
})
export class InviteUserListComponent implements OnInit {
  @Input() invitedUsers: User[];
  @Input() label: string;

  constructor() { }

  ngOnInit() {
    console.log('invitedUsers ', this.invitedUsers);
  }

}

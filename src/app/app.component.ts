import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
// import * as usersAction from './store/actions/users';

import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'invite-user-app';
  invitedUsers$: Observable<User[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.invitedUsers$ = store.select(fromRoot.getInvitedUser);
  }
}

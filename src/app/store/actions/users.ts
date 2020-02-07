import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export const INVITE_USER = '[Users] Invite user';

export class InviteUser implements Action {
  readonly type = INVITE_USER;
  constructor(public payload: User) { }
}

export type Action = InviteUser;

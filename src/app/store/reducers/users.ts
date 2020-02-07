import { Action } from '@ngrx/store';
import * as usersAction from '../actions/users';
import { User } from '../../models/user';

export interface State {
  invitedUsers: User[],
}

export const initialState: State = {
  invitedUsers: [{
    id: 1,
    name: 'John',
  }],
};

export function reducer(state = initialState, action: usersAction.Action) {
  switch (action.type) {
    case usersAction.INVITE_USER: {
      const newUser: User = action.payload;
      let newInvitedUsers = state.invitedUsers;
      newInvitedUsers.push(newUser);

      return {
        ...state,
        invitedUsers: newInvitedUsers,
      };
    }
    default:
      return state;
  }
}

export const getInvitedUsers = (state: State) => state.invitedUsers;

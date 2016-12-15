import {Injectable} from '@angular/core';
import {User} from '../../users/models/user.model';
import {extend} from 'underscore';
import {authenticated} from '../decorators/authenticated.decorator';

@Injectable()
@authenticated
export class AuthenticatedUser extends User {
  endpoint = '/me';

  defaults() {
    return extend(super.defaults(), {
      authenticated: false
    });
  }

}
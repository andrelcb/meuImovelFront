import {Injectable} from '@angular/core';
import {JwtTokenService} from './jwt-token.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public check: Boolean = false;

    constructor(private token: JwtTokenService) {
        this.check = this.token.token ? true : false;
    }

    logout(): void {
        this.token.token = null;
        this.check = false;
    }

}

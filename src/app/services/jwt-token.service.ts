import {Injectable} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
const TOKEN_KEY = 'token';
@Injectable({
    providedIn: 'root'
})
export class JwtTokenService {

    constructor(private session: LocalStorageService) {
    }

    get token(): any {
        return this.session.get(TOKEN_KEY);
    }

    set token(value) {
        value ? this.session.set(TOKEN_KEY, value) : this.session.remove(TOKEN_KEY);
    }
}

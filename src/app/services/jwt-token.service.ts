import {Injectable} from '@angular/core';
import {LocalStorageService} from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class JwtTokenService {

    private key = 'token'
    
    constructor(private session: LocalStorageService) {
    }

    get token(): any {
        return this.session.get(this.key);
    }

    set token(value) {
        value ? this.session.set(this.key, value) : this.session.remove(this.key);
    }
}

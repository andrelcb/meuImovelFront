import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl: string = "http://127.0.0.1:8000";
    private header = {
        Authorization: "",
    };

    constructor(private http: HttpClient, private session: LocalStorageService) {
    }

    public login(url: string, data: any): Observable<any> {
        this.header.Authorization = "";
        return this.http.post(`${this.baseUrl}${url}`, data, {
            headers: this.header
        });
    }

}

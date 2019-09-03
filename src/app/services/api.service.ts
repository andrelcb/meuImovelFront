import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocalStorageService } from "./local-storage.service";
import { Observable, throwError } from "rxjs";
import { JwtTokenService } from "./jwt-token.service";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private baseUrl: string = "http://127.0.0.1:8000/api/v1/";

  constructor(
    private http: HttpClient,
    private session: LocalStorageService,
    private tokenService: JwtTokenService
  ) {}

  get httpOptions() {
    return {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${this.tokenService.token}`,
    };
  }

  public login(url: string, data: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}${url}`, data, { headers: this.httpOptions })
      .pipe(catchError(this.handleError));
  }

  public get(url: string, param: any = null): Observable<any> {
    if (param != null) {
      return this.http
        .get(`${this.baseUrl}${url}`, {
          params: param,
          headers: this.httpOptions
        })
        .pipe(catchError(this.handleError));
    } else {
      return this.http
        .get(`${this.baseUrl}${url}`, { headers: this.httpOptions })
        .pipe(catchError(this.handleError));
    }
  }

  post(url: string, data: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}${url}`, data, { headers: this.httpOptions })
      .pipe(catchError(this.handleError));
  }

  handleError(error: any): Observable<any> {
    return throwError(error);
  }
}

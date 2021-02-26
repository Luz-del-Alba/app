import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

const api = environment.api;

@Injectable({providedIn: 'root'})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getModulesAvailables(): Observable<any> {
    return this.http.get(`${api}/rate/api/v1/module/available`);
  }
}

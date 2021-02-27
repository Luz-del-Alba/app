import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const api = environment.api;

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${api}/policy/api/v1/customer`);
  }
}

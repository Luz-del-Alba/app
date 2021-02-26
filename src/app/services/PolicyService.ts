import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const api = environment.api;

@Injectable({providedIn: 'root'})
export class PolicyService {

  constructor(private http: HttpClient) {
  }

  buy(name: string, email: string): Observable<any> {
    return this.http.post<any>(`${api}/policy/api/v1/policy`, {
      name: name,
      email: email
    });
  }
}

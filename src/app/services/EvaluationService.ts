import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const api = environment.api;

@Injectable({providedIn: 'root'})
export class EvaluationService {

  constructor(private http: HttpClient) {
  }

  calculate(): Observable<any> {
    return this.http.post<any>(`${api}/rate/api/v1/evaluate`, {});
  }
}

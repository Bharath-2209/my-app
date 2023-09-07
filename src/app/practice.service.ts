import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

 constructor (private _httpClient:HttpClient) { }

 getPractice():Observable<any>{
  return this._httpClient.get("https://api.publicapis.org/entries")
 }
}

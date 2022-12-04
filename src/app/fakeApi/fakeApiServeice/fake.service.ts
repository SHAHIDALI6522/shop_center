import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  snapshot: any;
  constructor(private http: HttpClient) {}
  getUserData() {
    let apiUrl = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(apiUrl);
  }
  geteditData(_id: any) {
    return this.http.get('${this.apiUrl}/${id}');
  }
}

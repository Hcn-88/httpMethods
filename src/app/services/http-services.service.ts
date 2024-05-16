import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../Post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  urlApi: string = "https://httpmethodsangular-default-rtdb.firebaseio.com/tasks.json";

  constructor(private http: HttpClient) {};

  getMethod(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlApi).pipe(map((response) => {
        const tasks: Post[] = [];
      // Response is of this type => 'key': {}
        for(let key in response) {
          if (response.hasOwnProperty(key)){
            tasks.push({ ...response[key], id: key });
          };
        };
        return tasks;
    }));
  };

  postMethod(data: any) {
    return this.http.post(this.urlApi, data);
  };

  deleteMethod(id: string | undefined) {
    return this.http.delete(`https://httpmethodsangular-default-rtdb.firebaseio.com/tasks/${id}.json`);
  };

  putMethod(id: string | undefined, data: any) {
    return this.http.put(`https://httpmethodsangular-default-rtdb.firebaseio.com/tasks/${id}.json`, data);
  };

};
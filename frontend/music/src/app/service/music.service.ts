import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../model/musicmodel';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  BASEURL ="http://localhost:3000/"
  constructor(private http: HttpClient) { }


  musicsave(music:Music):Observable<Music>{
    return this.http.post<Music>(`${this.BASEURL}music`,music,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }


  getmusic():Observable<Music[]>{
    return this.http.get<Music[]>(`${this.BASEURL}music`)
  }

  deletemusic(id:string):Observable<any>{
    return this.http.delete<any>(`${this.BASEURL}music/${id}`)
  }
}

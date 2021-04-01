import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PersonModel} from '../models/person.model';
import {observable, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RequestModel} from '../models/request-model';
import {hasOwnProperty} from 'tslint/lib/utils';

@Injectable({
  providedIn: 'root'
})
export class PrehealthdbService {
  // URLS to connect to local springboot server.
  // Can be replaced for other Databases but will need to modify some methods to match db's endpoints
  private URLPut = 'http://localhost:8080/api/v1/person/';
  private URLGetEvents = 'http://localhost:8080/api/v1/person/';
  private URLGetPeople = 'http://localhost:8080/api/v1/person/';
  private URLPost = 'http://localhost:8080/api/v1/person/';

  public username : string;

  loadedPosts: PersonModel[];

  constructor(private http: HttpClient) {
  }

// sends person info, but only events at this moment
  postPerson(person: RequestModel) {
    this.http
      // tslint:disable-next-line:no-shadowed-variable
      .put(this.URLPut + this.username, person).subscribe(person => {
      console.log(person);
    });
  }

// sends username and password
  register(username: string, pass: string) {
    this.http.post(this.URLPost, {username: username, password: pass}).subscribe(person => {
      console.log(person);
    });
  }

  // retrieves all posts atm, not from one specific user
  getPosts() {
    return this.http
      .get<RequestModel>(this.URLGetEvents + this.username)
      .pipe(
        map(responseData => {
          const postsArray: RequestModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        })
      );
  }

  // sends username and password to the database
  login(givenUsername: string, pass: string) {
    this.username = givenUsername;
    return this.http.get(this.URLGetPeople + givenUsername + '/' + pass);
  }
}

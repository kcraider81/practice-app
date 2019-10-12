import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { convertToParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _client: HttpClient;
    constructor(client: HttpClient) {
      this._client = client;
     }
  
  
    async getAllUsers() {
      return await this._client.get<any>('https://jsonplaceholder.typicode.com/users').toPromise();
      
    }
  
  }
  
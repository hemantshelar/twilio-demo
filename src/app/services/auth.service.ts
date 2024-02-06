import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile: any;
  constructor() { }

  userProfileChangeTracker = new Subject<any>();

  userProfileProvider() : Observable<string> {
    return this.userProfileChangeTracker.asObservable();
  }
  setUserProfile(param: any){
    this.userProfile = param;
    this.userProfileChangeTracker.next(this.userProfile);
  }
}

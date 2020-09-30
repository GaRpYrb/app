import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface AuthState {
  isLoggedIn: boolean;
  user: any;
}

const initialAuthState: AuthState = {
  isLoggedIn: null,
  user: null
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private store = new BehaviorSubject<AuthState>(initialAuthState);
  public isLoggedIn: Observable<boolean> = this.store.asObservable().pipe(
    map(state => state.isLoggedIn)
  );
  public user: Observable<any> = this.store.asObservable().pipe(
    map(state => state.user)
  );

  constructor() { }

  setUser(user: any): void {
    this.store.next({
      isLoggedIn: true,
      user,
    });
    localStorage.setItem('user', user.email);
  }

  initAuth(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.store.next({
        isLoggedIn: true,
        user,
      });
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.store.next({
      isLoggedIn: false,
      user: null
    });
  }
}

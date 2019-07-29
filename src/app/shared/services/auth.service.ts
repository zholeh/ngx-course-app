import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '@store/reducers/user.reducer';

@Injectable()
export class AuthService {
    public constructor(private _http: HttpClient) {}

    public login(user: any): Observable<any> {
        return this._http.post(`/auth/signin`, { ...user });
    }

    public signUp(user: any): Observable<IUser> {
        return this._http.post<IUser>(`/auth/signup`, { ...user });
    }

    public checkUser(): Observable<any> {
        return this._http.get(`/user/checkuser` );
    }

    public tokenToLocalStorage(user: any): Observable<any> {
        if (!user || !user.accessToken) {
            return of(null);
        }
        localStorage.setItem('accessToken', user.accessToken);
        return of(user);
    }

    public getTokenFromLocalStorage(): Observable<any> {
        return of(localStorage.getItem('accessToken'));
    }

    public removeFromLocalStorage(name: string): Observable<boolean> {
        localStorage.removeItem(name);
        return of(true);
    }
}

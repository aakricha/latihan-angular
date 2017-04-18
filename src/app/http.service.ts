import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    base = "http://172.26.100.82/slimapp/";
    constructor(private http: Http) { }

    get(url: string) {
        return this.http.get(this.base + url, this.createRequestOptions()).toPromise().then(res => res.json()).catch(this.handleError);
    }
    post(url: string, data) {
        return this.http.post(this.base + url, JSON.stringify(data), this.createRequestOptions()).toPromise().then(res => res.json()).catch(this.handleError);
    }
    put(url: string, data) {
        return this.http.put(this.base + url, JSON.stringify(data), this.createRequestOptions()).toPromise().then(res => res.json()).catch(this.handleError);
    }
    delete(url: string) {
        return this.http.delete(this.base + url, this.createRequestOptions()).toPromise().then(res => res.json()).catch(this.handleError);
    }
    private createRequestOptions():RequestOptions {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let option = new RequestOptions({headers: headers});
        return option;
    }
    private handleError(error: any): Promise<any> {
        console.log('An Error occured', error);
        return Promise.reject(error.message || error);
    }
}
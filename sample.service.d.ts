import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export declare class SampleService {
    private _http;
    response: any;
    jsonURL: string;
    constructor(_http: Http);
    getValues(): Observable<any>;
}

import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../services/storage.service";
import { API_CONFIG } from "../config/api.config";
import { Config } from "ionic-angular";


//Interceptor, como o próprio nome sugere, nos permite de forma bem simples interceptar e configurar 
//requisições antes delas serem disparadas para o servidor.
//https://medium.com/@cesarolvr/implementando-interceptor-para-requisi%C3%A7%C3%B5es-http-em-sua-aplica%C3%A7%C3%A3o-angular-4-5dba022dfcb1
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let localUser = this.storage.getLocalUser();

        let N = API_CONFIG.baseUrl.length;
        let requestToAPI = req.url.substring(0, N) == API_CONFIG.baseUrl;

        if(localUser && requestToAPI){
            //Clona a requisição original acrescentando o header Authorization
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
            return next.handle(authReq);
        }else{
            return next.handle(req);
        }
        
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};

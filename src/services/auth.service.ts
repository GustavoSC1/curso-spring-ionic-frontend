import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { StorageService } from "./storage.service";
import { LocalUser } from "../models/local_user";
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient, public storage: StorageService) {

    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post (
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                //Especifica que a requisição retorna objeto do tipo resposta, dessa forma é possivel ter acesso ao header
                observe: 'response',
                //Impede que o framework tente acessar o corpo do json, que não tem, e dê erro
                responseType: 'text'
            });        
    }

    refreshToken() {
        return this.http.post (
            //Token é incluido automaticamente na requisição pelo interceptor
            `${API_CONFIG.baseUrl}/auth/refresh_token`,
            {},
            {
                //Especifica que a requisição retorna objeto do tipo resposta, dessa forma é possivel ter acesso ao header
                observe: 'response',
                //Impede que o framework tente acessar o corpo do json, que não tem, e dê erro
                responseType: 'text'
            });        
    }

    successfulLogin(authorizationValue : string) {
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);

    }

    logout() {
        this.storage.setLocalUser(null);
    }

}
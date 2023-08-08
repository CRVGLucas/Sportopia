import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "environment/environment";

@Injectable({ providedIn: 'root' })

export class SoccerService {
    private api = API;
    constructor( private http: HttpClient ){}

    getTeams(){
        return this.http.get(this.api+`soccer/bra.1/teams`)
    }

    getTeam(id: number){
        return this.http.get(this.api+`soccer/bra.1/teams/${id}`)
    }

    getScoreBoard(){
        return this.http.get(this.api+`soccer/bra.1/scoreboard`)
    }

    getNews(){
        return this.http.get(this.api+`soccer/bra.1/news?lang=pt`)
    }

    getNew(id: number) {
        return this.http.get(this.api+`soccer/bra.1/news/${id}?lang=pt`)
    }
}
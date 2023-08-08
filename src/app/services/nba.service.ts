import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "environment/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})

export class NBAService {
    private api = API
    constructor(private http: HttpClient){}

    
    getTeams(): Observable<any> {
        return this.http.get(this.api+'basketball/nba/teams')
    }

    getTeam(id: number): Observable<any>{
        return this.http.get(this.api+`basketball/nba/teams/${id}`)
    }

    getScoreBoard(){
        this.http.get(this.api+`basketball/nba/scoreboard`)
    }

    getNews() {
        return this.http.get(this.api+`basketball/nba/news?lang=pt`)
    }

    getNew(id: number) {
        return this.http.get(this.api+`basketball/nba/news/${id}?lang=pt`)
    }


}
import { NBAService } from './../services/nba.service';
import { SoccerService } from './../services/soccer.service';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { SwitchSports } from '../services/switch-sports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private switchStateSubscription: Subscription = new Subscription();
  protected typeSport = ''
  protected news: any;
  constructor(private switchService: SwitchSports, private soccerService: SoccerService, private nbaService: NBAService){}

  ngOnInit(){
    this.switchStateSubscription = this.switchService.switchState$.subscribe((sport) => {
      this.typeSport = sport
      if(sport == 'soccer'){
        this.soccerService.getNews().subscribe((response) => {
          this.news = response
          console.log("fut: ", response)
        })
        
      } else {
        this.nbaService.getNews().subscribe((response) => {
          this.news = response
          console.log("baska: ", response)
        })
      }
      console.log("o que escolheu: ", sport)
    })
  }

  ngOnDestroy(){
    this.switchStateSubscription.unsubscribe()
  }

}

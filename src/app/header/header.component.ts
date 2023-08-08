import { Component } from '@angular/core';
import { SwitchSports } from '../services/switch-sports.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private switchStateSubscription: Subscription = new Subscription();
  protected typeSport = 'basketball'
  constructor(private switchService: SwitchSports){}

  ngOnInit(){
    this.switchStateSubscription = this.switchService.switchState$.subscribe((sport) => {
      this.typeSport = sport
    })
  }

  toggleSwitch(type: any){
    this.switchService.toggleSwitch(type)
  }

  ngOnDestroy(){
    this.switchStateSubscription.unsubscribe();
  }

}

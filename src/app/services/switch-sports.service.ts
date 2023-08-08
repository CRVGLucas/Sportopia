import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root'})
export class SwitchSports{
    private switchStateSubject = new BehaviorSubject<string>('nba');
    public switchState$ = this.switchStateSubject.asObservable();
    public toggleSwitch(sport: string): void {
        this.switchStateSubject.next(sport);
    }
}
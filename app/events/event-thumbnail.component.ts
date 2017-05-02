import {Component, Input} from '@angular/core'

import {IEvent} from './shared/index'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2 class="main-class" [ngClass]="getStartTimeClass()">{{event?.name}}</h2>
        <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}">Date: {{event?.date}}</div>
        <div [class.green]="event?.time === '8:00 am'"
                [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event.price}}</div>
        <div [hidden]="!event?.location">
            <span [style.color]="event?.time === '8:00 am' ? '#003300' : '#bbb'">Location: {{event?.location?.address}}</span>
            <span class="pad-left" style="font-size: medium" [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' : '#bbb', 'font-weight': event?.time === '8:00 am' ? 'bold': 'normal'}">
                {{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
    @Input() event:IEvent;

    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart}
    }

    getStartTimeClassSecond(){
        if (this.event && this.event.time === '8:00 am')
            return 'green bold';
        return '';
    }

    getStartTimeClassThird(){
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold'];
        return [];
    }

    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'};
        return {};
    }
}
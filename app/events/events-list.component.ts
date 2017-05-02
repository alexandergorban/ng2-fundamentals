import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'

import { EventService } from "./shared/event.service"
import { ToastrService } from "../common/toastr.service"

@Component({
    templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
    events:any;

    constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){

    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }
}

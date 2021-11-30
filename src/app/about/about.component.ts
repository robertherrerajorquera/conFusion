import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LEADERS } from '../shared/leaders';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  leader: Leader[] = LEADERS;

  constructor(
    private leaderservice: LeaderService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    //  const id = this.route.snapshot.params['id'];// anteponer + anthes del this
     this.leaderservice.getLeaders()
     .subscribe(leader => this.leader = leader);
    console.log(this.leader);
  }
  goBack(): void {
    this.location.back();
  }
}

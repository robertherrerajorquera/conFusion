import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Location } from '@angular/common';
import { LEADERS } from '../shared/leaders';

import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  leader: Leader[] = LEADERS;
  leaderPromotion: Leader = new Leader();
  dish : Dish = new Dish();
  promotion: Promotion = new Dish();
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
     this.dishservice.getFeaturedDish()
     .subscribe(dish => this.dish = dish);
     this.promotionservice.getFeaturedPromotion()
     .subscribe(promotion => this.promotion = promotion);
     this.leaderservice.getFeaturedLeader()
     .subscribe(leaderPromotion => this.leaderPromotion = leaderPromotion);
    console.log(this.leader);
  }

}

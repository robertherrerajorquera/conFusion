import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish = new Dish ;
  dishIds: string[];
  prev: string;
  next: string;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.dishservice.getDishIds()
    .subscribe((dishId) => this.dishIds = this.dishIds);
  this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
  .subscribe(dish =>{this.dish = dish;});
   console.log('la id obtenida es: '+id)

  }

  goBack(): void {
    this.location.back();
  }

}

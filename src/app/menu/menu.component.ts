import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})



export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;



 constructor(private dishService: DishService) { }

  ngOnInit() {
     this.dishService.getDishes().subscribe((dishes) => this.dishes = dishes);
    console.log('inicial dishes'+this.dishes.length);
   // console.log('inicial selectDishes'+this.selectedDish.description);

  }


}

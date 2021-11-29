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

  selectedDish: Dish = new Dish();

 // dishes: Dish[] = DISHES; ant


 // selectedDish: Dish = new Dish(); ant

 constructor(private dishService: DishService) { }

  ngOnInit() {
     this.dishService.getDishes()
     .then((dishes) => this.dishes = dishes);
    console.log('inicial dishes'+this.dishes.length);
    console.log('inicial selectDishes'+this.selectedDish.description);
  }
  onSelect(dish: Dish) {
    if(dish !== null || dish!== undefined) {
  this.selectedDish = dish;
    console.log(this.selectedDish);
    console.log('final selectDishes'+this.selectedDish.description);
    }

  }
}

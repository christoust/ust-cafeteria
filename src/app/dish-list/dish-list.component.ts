import { Component, OnInit } from '@angular/core';

interface Dish {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [
    { name: 'Pizza', description: 'Delicious pizza with toppings', price: 10 },
    { name: 'Burger', description: 'Juicy burger with fries', price: 8 },
    { name: 'Salad', description: 'Fresh salad with vinaigrette dressing', price: 6 }
  ];
  newDish: Dish = { name: '', description: '', price: 0 };
  searchTerm: string = '';
  filteredDishes: Dish[] = [];
  
  constructor() { }

  ngOnInit() {
    this.filteredDishes = this.dishes;
  }

  addDish() {
    this.dishes.push(this.newDish);
    this.newDish = { name: '', description: '', price: 0 };
  }

  deleteDish(index: number) {
    this.dishes.splice(index, 1);
  }

  searchDishes() {
    this.filteredDishes = this.dishes.filter(dish => {
      return dish.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}

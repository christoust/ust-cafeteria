import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dishName: string|null='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dishName = this.route.snapshot.paramMap.get('name');
  }

}

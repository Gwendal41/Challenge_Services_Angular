import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})
export class CocktailListComponentComponent implements OnInit {

  cocktails = this.cocktailService.getCocktails()

  constructor(public cocktailService: CocktailServiceService) { }

  ngOnInit(): void {

  }

}

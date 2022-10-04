import { Injectable } from '@angular/core';
import { Cocktail } from 'src/models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

cocktailList: Cocktail[] =[
    new Cocktail('Mojito', 8, 'data:image/jpeg;base64,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'),

    new Cocktail('Piña colada', 15, 'https://bakeitwithlove.com/wp-content/uploads/2022/07/Pina-Colada-Mocktail-sq.jpg'),
    new Cocktail ('Moscow mule', 12, 'https://resize.elle.fr/portrait_1280/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/cocktail-moscow-mule-1988856/21088454-7-fre-FR/Cocktail-Moscow-Mule.jpg')
  ] 

  constructor() { 
  }

  getCocktails(){
   return this.cocktailList
  }
}

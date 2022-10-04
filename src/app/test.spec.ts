import { TestBed, waitForAsync } from '@angular/core/testing';

import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';

import { CocktailServiceService  } from './cocktail-service.service';


describe('Quest Test Suite', () => {

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({

      declarations: [

        CocktailListComponentComponent

      ],

    }).compileComponents();

  }));


  fit('service should be created', () => {

    const service: CocktailServiceService = TestBed.inject(CocktailServiceService);

    expect(service).toBeTruthy();

  });


  fit('service should have a "getCocktails" method which returns at least one object', () => {

    const service: CocktailServiceService = TestBed.inject(CocktailServiceService);

    const tab = service.getCocktails();

    expect(tab.length).toBeGreaterThan(0);

  });


  fit('should create a CocktailListComponent instance', waitForAsync(() => {

    const fixture = TestBed.createComponent(CocktailListComponentComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();

  }));


  fit(

    'component should have a public property named "cocktails"',

    waitForAsync(

      () => {

        const fixture = TestBed.createComponent(CocktailListComponentComponent);

        fixture.detectChanges();

        expect(fixture.componentInstance.cocktails).toBeTruthy();

      }

    )

  );


  fit(

    'component should display at least one cocktail',

    waitForAsync(

      () => {

        const fixture = TestBed.createComponent(CocktailListComponentComponent);

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;

        const content = compiled.textContent;

        const first = fixture.componentInstance.cocktails[0];

        expect(content).toContain(first.name);

      }

    )

  );

});
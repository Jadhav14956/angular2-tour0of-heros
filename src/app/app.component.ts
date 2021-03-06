import { Component, OnInit } from '@angular/core';
import {Hero} from './hero/hero';
import {HeroService} from './services/hero.service';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
              <div>
                <ul class="heroes">
                  <li *ngFor="let hero of heroes"
                   [class.selected]="hero === selectedHero"
                    (click)="onSelect(hero)">
                      <span class="badge">{{hero.id}}</span> {{hero.name}}
                  </li>
                </ul>
             </div>
             
             <hero-detail [hero]="selectedHero"></hero-detail>`,
  styles: [
              `.selected {
                background-color: #CFD8DC !important;
                color: red;
              }
              .heroes {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
              }
              .heroes li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
              }
              .heroes li.selected:hover {
                background-color: #BBD8DC !important;
                color: yellow;
              }
              .heroes li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
              }
              .heroes .text {
                position: relative;
                top: -3px;
              }
              .heroes .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
              }`
          ],
    providers: [HeroService]
})

export class AppComponent implements OnInit  { 
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    console.log('In OnInit.');
    this.getHero();
  }
  title = 'Tour of heroes';
    selectedHero : Hero;
    
    constructor(private heroService : HeroService){ }

    

    // heroes : Hero[] = [
    //     { id: 11, name: 'Mr. Nice' },
    //     { id: 12, name: 'Narco' },
    //     { id: 13, name: 'Bombasto' },
    //     { id: 14, name: 'Celeritas' },
    //     { id: 15, name: 'Magneta' },
    //     { id: 16, name: 'RubberMan' },
    //     { id: 17, name: 'Dynama' },
    //     { id: 18, name: 'Dr IQ' },
    //     { id: 19, name: 'Magma' },
    //     { id: 20, name: 'Tornado' }
    // ];

    heroes : Hero[] = [];

    onSelect(hero : Hero): void{
      this.selectedHero = hero;
      console.log('Newly selected hero : '+ JSON.stringify(this.selectedHero));
    }

    getHero() : void {
      console.log('Getting heroes.');
      this.heroService.getHeroes().then(heroList => {
        console.log('HEROES : ' + JSON.stringify(heroList));
        this.heroes = heroList;
      });
    }
};


// {{hero}} and {{title}} are interpolation


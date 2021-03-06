import { Component }              from '@angular/core';

import { HEROES }                 from './heroes';

@Component({
    selector: 'flying-heroes',
    templateUrl: 'app/flying-heroes.component.html',
    styles: ['#flyers, #all {font-style: italic}']
})
export class FlyingHeroesComponent {
    heroes: any[] = [];
    canFly = true;
    mutate = true;
    title = 'Flying Heroes (pure pipe)';

    constructor() { this.reset(); }

    addHero(name: string) {
        name = name.trim();
        if (!name) { return; }
        let hero = {name, canFly: this.canFly};
        if (this.mutate) {
            this.heroes.push(hero);
        } else {
            this.heroes = this.heroes.concat(hero);
        }
    }

    reset() { this.heroes = HEROES.slice(); }
}

@Component({
    selector: 'flying-heroes-impure',
    templateUrl: 'app/flying-heroes-impure.component.html',
    styles: ['.flyers, .all {font-style: italic}'],
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
    title = 'Flying Heroes (impure pipe)';
}
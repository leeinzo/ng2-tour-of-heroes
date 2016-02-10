import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	
	getHero(id: number) {
		return Promise.resolve(HEROES).then(
			heroes => heroes.filter(hero => hero.id === id)[0]
		);
	}

	/*
	// 'Take it slowly' appendix
	getHeroesSlowly() {
		return new Promise(resolve => 
			setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
		);
	}
	*/
}
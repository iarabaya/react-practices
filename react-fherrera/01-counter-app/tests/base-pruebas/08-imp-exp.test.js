import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
describe('Pruebas de 08-impor-exp', () => { 

	test('getHeroeById debe de retornar un héroe por Id', () => { 
		const id = 1;
		const hero = getHeroeById(id);

		expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC'})
	});

	test('getHeroeById debe de retornar undefined si no existe', () => { 
		const id = 100;
		const hero = getHeroeById(id);

		expect(hero).toBeFalsy();
	});

	test('getHeroeByOwner debe de retornar un arreglo con los héroes de DC', () => { 
		const owner = 'DC';
		const heroesArr = getHeroesByOwner(owner);

		expect(heroesArr.length).toBe(3);
		heroesArr.forEach(e => expect(e.owner).toEqual(owner))
		expect(...heroesArr).toEqual(
		[{
			id:1,
			name: 'Batman',
			owner: 'DC'
		},
		{
			id:3,
			name: 'Superman',
			owner: 'DC'
		},
		{
			id:4,
			name: 'Flash',
			owner: 'DC'
		}]);
	});

	test('getHeroeById debe de retornar un arreglo con los héroes de Marvel', () => { 
		const owner = 'Marvel';
		const heroesArr = getHeroesByOwner(owner);

		expect(heroesArr.length).toBe(2);
		expect(...heroesArr).toEqual(
		{
			id:2,
			name: 'Spiderman',
			owner: 'Marvel'
		},
		{
			id:5,
			name: 'Wolverine',
			owner: 'Marvel'
		});
	});

})
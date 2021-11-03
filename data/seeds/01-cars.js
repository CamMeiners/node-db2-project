// STRETCH
const cars = [
  {
    vin: '1GNDM19Z5NB205914',
    make: 'Chevy',
    model: 'Astro',
    mileage: 180810,
    title: 'clean',
    transmission: 'automatic',
  },
  {
    vin: '1GNDM19Z5NB205915',
    make: 'Chevy',
    model: 'Astro',
    mileage: 180810,
    title: 'clean',
    transmission: 'automatic',
  },
  {
    vin: '1GNDM19Z5NB205916',
    make: 'Chevy',
    model: 'Astro',
    mileage: 180810,
    title: 'clean',
    transmission: 'automatic',
  },
  {
    vin: '1GNDM19Z5NB205917',
    make: 'Chevy',
    model: 'Astro',
    mileage: 180810,
    title: 'clean',
    transmission: 'automatic',
  },
];
exports.seed = function (knex) {
  return knex('cars')
    .truncate()
    .then(() => {
      return knex('cars').insert(cars);
    });
};

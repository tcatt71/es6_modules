class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  info() {
    document.getElementById('car-make').innerText = this.make;
    document.getElementById('car-model').innerText = this.model;
    document.getElementById('car-year').innerText = this.year;
  }
}
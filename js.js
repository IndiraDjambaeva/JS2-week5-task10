//Task 10-1
document.write("Restaurant data" + "<br>");
document.write("<hr>");

class Restaurant {
  constructor(name, cousin, served) {
    this.name = name;
    this.cousin = cousin;
    this.served = 0;
  }

  showInfo() {
    return `This is ${this.name} with ${this.cousin} cousin`;
  }

  isOpen() {
    // let currentHour = new Date()
    //let currentHour = new Date().now()
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay();

    if (currentDay === 6 || currentDay === 0) {
      return `${this.name} is closed`;
    } else {
      if (currentHour > 1 && currentHour < 22) {
        return `${this.name} is open`;
      } else {
        return `${this.name} is closed`;
      }
    }
  }

  serve() {
    return (this.served += 1);
  }

  setServed(numOfServed) {
    document.write(
      `Served: ${this.name} - ${(this.served += numOfServed)} <br>`
    );
  }

  showTotalServed(d) {
    document.write(`Total served: ${this.name} - ${this.served}<br>`);
  }
}

const aaa = new Restaurant("AAA", "asian");
const bbb = new Restaurant("BBB", "europe");

console.log(aaa.showInfo());
console.log(bbb.showInfo());
console.log(aaa.isOpen());

console.log(aaa.serve());
console.log(bbb.serve());
console.log(aaa.setServed(20));
console.log(bbb.setServed(25));
console.log(aaa.showTotalServed());
console.log(bbb.showTotalServed());
document.write("<hr> ");



//Task 10-2

document.write("<br>" + "Cars data" + "<br>");
document.write("<hr> ");

class Cars {
  constructor(model, year, power, color) {
    this.model = model;
    this.year = year;
    this.power = power + "kWatt";
    this.color = color;
  }

  showInfo() {
    document.write(`
          Model: ${this.model}<br>
          Year: ${this.year}<br>
          Power: ${this.power}<br>
          Color: ${this.color}<br>
      `);
  }
}
// const ferrari = new Cars("Ferrari", 2020, 4.0, "red");
// ferrari.showInfo();


class ElectroCars extends Cars {
  constructor(model, year, power, color, battery) {
    super(model, year, power, color);
    this.battery = battery;
  }

  showInfo() {
    super.showInfo()
    document.write (`Battery: ${this.battery} <br>`);     
  }

  promote() {
    document.write (`Be smart in saving world! Buy ${this.model}!`);
  }
}

const ferrari = new Cars("Ferrari", 2020, 4.0, "red");
ferrari.showInfo();

document.write("<hr> ");

const tesla = new ElectroCars("Tesla", 2021, 7.0, "blue", 3000);

tesla.showInfo();
tesla.promote();

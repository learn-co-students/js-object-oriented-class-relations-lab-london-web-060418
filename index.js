let store = { drivers:[], passengers:[], trips:[]} 

let driverID = 0;
let passengerID = 0;
let tripID = 0;

//Has many trips, has many passengers through trips.

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverID;
    store.drivers.push(this);
  }
  
  trips() {
    return store.trips.filter((trip) => trip.driverId === this.id);
  }
  
  passengers() {
    let passengerArray = [];
    this.trips().forEach((trip) => passengerArray.push(trip.passenger()));
    return passengerArray;
  }
  
  
}

//has many trips, has many drivers through trips.
class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerID;
    store.passengers.push(this);
  }
  
  trips() {
    return store.trips.filter((trip) => trip.passengerId === this.id);
  }
  
  drivers() {
   let driversArray = [];
   this.trips().filter((trip) => driversArray.push(trip.driver()));
   return driversArray;
  }
  
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripID;
    store.trips.push(this);
  }
  
  driver() {
    return store.drivers.find((driver) => this.driverId === driver.id);
  }
  
  passenger() {
    return store.passengers.find((passenger) => this.passengerId === passenger.id);
  }
  
}






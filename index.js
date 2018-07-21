let store = { drivers:[], passengers:[], trips:[]}

let driverId = 0;
let passengerId = 0;
let tripId = 0;

//has many relationship, has many pasengers through trip.

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter((trip) => trip.driverId === this.id);
  }

  passengers(){
    // let passArray = [];
    // this.trips().forEach((trip) => passArray.push(trip.passenger()));
    // return passArray;
    let trips = this.trips();
    let passengers = trips.map((trip) => {
      return trip.passenger();
    })
    return passengers
  }

}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter((trip) => trip.passengerId == this.id);
  }

  drivers(){
    let trips = this.trips();
    let drivers = trips.map((trip) => {
      return trip.driver();
    })
    return drivers
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    store.trips.push(this);

    if (driver) {this.driverId = driver.id}
    if (passenger) {this.passengerId = passenger.id}
  }

  passenger(){
    return store.passengers.find((passenger) => {
      return passenger.id === this.passengerId;
    })
  }

  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId;
    }.bind(this))
  }
}

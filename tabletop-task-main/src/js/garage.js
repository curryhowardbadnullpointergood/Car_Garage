
const garage = {
    "count": 1,
    "cars":[{'reg':'AA19 AAA'},{'rag':'AA19EEE'},{}]
};

export const Garage = {
    add(value){
        garage.cars.push(value); 
        garage.count = garage.cars.length; 
    },
    delete(reg){
        const initialCount = garage.cars.length;
        garage.cars = garage.cars.filter(car => car.reg !== reg);
        garage.count = garage.cars.length;
        return initialCount > garage.cars.length; 
    },
    get(reg){
        return garage.cars.find(car => car.reg === reg); 
    }
};
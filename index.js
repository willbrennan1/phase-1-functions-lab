// Code your solution in this file!
const pickUp = 42;
const feet = 264;
const price = 0.02;

function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return someValue - pickUp;
    } else if (someValue < 42) {
        return pickUp - someValue;
    }
}

function distanceFromHqInFeet(num1) {
        distanceFromHqInBlocks();
        return distanceFromHqInBlocks(num1) * feet;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * feet;
    } else {
        return (destination - start) * feet;
    }
}

function calculatesFarePrice(start, destination) {
        distanceTravelledInFeet();
        if (distanceTravelledInFeet(start, destination) <= 400) {
            return 0;
        } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
            return ((distanceTravelledInFeet(start, destination) - 400) * price);
        } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
            return 25;
        } else {
            return 'cannot travel that far'
        }
}

const street = 42;
function distanceFromHqInBlocks(block) {
    if (block>street) {
        return block - street;
    }
    else{
        return street - block;
    }
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}
distanceFromHqInFeet();
function distanceTravelledInFeet(begin, arrival ) {
    if (begin>arrival) {
        return (begin - arrival) * 264;
    }
    else{
        return (arrival - begin) * 264;
    }
}
distanceTravelledInFeet();
function calculatesFarePrice(begin, arrival) {
    let charges = distanceTravelledInFeet(begin, arrival);
    if (charges < 400) {
        return 0;
    }
    else if (charges > 400 && charges < 2000) {
        return (charges - 400) * 0.02;
    }
    else if (charges > 2000 && charges < 2500){
        return charges = 25;
    }
    else{
        return 'cannot travel that far';
    }
}
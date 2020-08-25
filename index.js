function distanceFromHqInBlocks(blocknum){
  return Math.abs(42-blocknum)
}
function distanceFromHqInFeet(blocknum){
  return distanceFromHqInBlocks(blocknum)*264
}
function distanceTravelledInFeet(stat, end){
  return Math.abs((end-stat)*(264))
}

function calculatesFarePrice(start, destination){
  let totalfeet = distanceTravelledInFeet(start, destination)
  switch (totalfeet){
  case totalfeet < 400;
    return 0; 
  case totalfeet>=400 && totalfeet<=2000;
    return totalfeet * 2;
  case totalfeet >2000;
    return 25;
  case totalfeet > 2500 ;
    return 'No Ride';
  }
}

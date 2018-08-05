const getSleepHours = day => {
  switch(day){
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 7;
    case 'thursday':
      return 5;
    case 'friday':
      return 6;
    case 'saturday':
      return 6;
    case 'sunday':
      return 9;
    default:
      return 'wrong day';
      break;
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt () {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let hoursDiference = actualSleepHours-idealSleepHours;
  if(actualSleepHours === idealSleepHours){
    return 'You are sleeping the right amount of hours per week';
  }else if(actualSleepHours >= idealSleepHours){
    return 'You are sleeping more than you need to, over' + hoursDiference + 'hours';
  }else{
    return 'You need to sleep more,' + hoursDiference + ' hours under your ideal sleeping time';
  }
}

console.log(calculateSleepDebt());
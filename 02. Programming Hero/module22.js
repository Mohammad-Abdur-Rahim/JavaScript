

function isLeapYear(year) {
   
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 'Leap Year';
    } else {
      return 'Not Leap Year';
    }
  }
  
  // Test cases
  console.log(isLeapYear(2000)); 
  console.log(isLeapYear(1900)); 
  console.log(isLeapYear(2004));
  console.log(isLeapYear(2001)); 
  
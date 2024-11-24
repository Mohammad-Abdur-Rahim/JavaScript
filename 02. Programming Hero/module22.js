function leafYear(year) {
    if (year % 4 === 0) {
      return 'leaf Year';
    } else {
      return 'Not leaf Year';
    }
  }
  
  const year = 2001;
  const output = leafYear(year);
  console.log(output); // Prints "Not leaf Year"
  
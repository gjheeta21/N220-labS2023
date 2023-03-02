function setup() {
    createCanvas(400, 400);
    
    let div = createDiv('');
    for (let i = 1; i <= 25; i++) {
      let output = '';
      if (i % 3 === 0) {
        output += 'beep';
      }
      if (i % 5 === 0) {
        output += 'bop';
      }
      if (output === '') {
        output += i;
      }
      div.child(output + ' ');
    }
  }
  
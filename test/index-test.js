const expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


describe('index', () => {

  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })


  it('runs', () => {
    expect(true).toBe.true
  })
})

var dodger = document.getElementById('dodger');

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '');
  var right = parseInt(rightNumbers, 10);
  
  if (right > 0) {
    dodger.style.right = `${right - 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight();
  }
});
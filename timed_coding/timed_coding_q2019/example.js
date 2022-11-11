const Runner = require('../../_runners/runner.js');

function isEnglishLetter(asciiCode) {
  return (asciiCode >= 65 && asciiCode <= 90)
      || (asciiCode >= 97 && asciiCode <= 122);
}

function getMostFrequentLetter(input) {
  let frequencyMap = new Map();
  let mostFrequent = { letter: null, count: 0 };

  for (let i = 0; i < input.length; i++) {
    if (isEnglishLetter(input.charCodeAt(i))) {
      const letter = input[i].toLowerCase();

      frequencyMap.set(letter, (frequencyMap.get(letter) ?? 0) + 1);

      if (frequencyMap.get(letter) > mostFrequent.count) {
        mostFrequent = { letter, count: frequencyMap.get(letter) };
      } else if (frequencyMap.get(letter) === mostFrequent.count) {
        if (mostFrequent.letter > letter) {
          mostFrequent = { letter, count: mostFrequent.count };
        }
      }
    }
  }

  return mostFrequent.letter;
}

const run = Runner(getMostFrequentLetter);

console.log('Public');
run(['abcc'], 'c', 'Simple case.');
run(['CasE InsEnSitIve'], 'e', 'Case insensitive.');
run(['O.n.l.y c.o.u.n.t t.h.e l.e.t.t.e.r.s.'], 't', 'Should only count letters.');
run(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante mauris, iaculis et nisi eget, laoreet tristique sapien.'], 'i', 'Lorem ipsum has 15 i\'s.');

console.log('\nPrivate');
run(['Aenean odio ipsum, tempor feugiat condimentum sed, bibendum nec quam. Praesent faucibus risus non erat mattis fringilla.'], 'e', 'More lorem ipsum.');
run([''], null, 'Empty string.');
run(['$$$'], null, 'Only non-letters.');
run(['AAA'], 'a', 'Only caps.');
run(['___'], null, 'Underscore is sometimes counted as a word character.');

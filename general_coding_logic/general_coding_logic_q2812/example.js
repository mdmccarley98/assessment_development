const str_regex = /^[A-Z]*[a-zA-Z][0-9]*=[0-9][a-z]*[0-9]*$/

console.log(
  str_regex.test('ABCDEFm0=0ABCDEFm0') + " " +
  str_regex.test('abedQ0=Q0') + " " +
  str_regex.test('g233230=0') + " " +
  str_regex.test('T1=8aaaaaaaaaaaa'))

const str2_regex1 = /^[12]?[0-9]{1,2}$/
console.log(
  str2_regex1.test('267') + " " +
  str2_regex1.test('0267') + " " +
  str2_regex1.test('66') + " " +
  str2_regex1.test('567'))
const convertDnaToRna = require('./index');

function runTests() {
  const input1 = 'ATGC';
  const expectedOutput1 = 'UACG';
  const result1 = convertDnaToRna(input1);
  console.log(result1 === expectedOutput1 ? 'Test 1 passed' : 'Test 1 failed');

  const input2 = 'ATGZX';
  try {
    convertDnaToRna(input2);
    console.log('Test 2 failed');
  } catch (error) {
    console.log(
      error.message === 'Invalid DNA sequence. Only A, C, G, and T are allowed.'
        ? 'Test 2 passed'
        : 'Test 2 failed'
    );
  }

  const input3 = '';
  const expectedOutput3 = '';
  const result3 = convertDnaToRna(input3);
  console.log(result3 === expectedOutput3 ? 'Test 3 passed' : 'Test 3 failed');

  const input4 = 'AAAAAAAAAA';
  const expectedOutput4 = 'UUUUUUUUUU';
  const result4 = convertDnaToRna(input4);
  console.log(result4 === expectedOutput4 ? 'Test 4 passed' : 'Test 4 failed');

  const input5 = 'ACGTACGT';
  const expectedOutput5 = 'UGCAUGCA';
  const result5 = convertDnaToRna(input5);
  console.log(result5 === expectedOutput5 ? 'Test 5 passed' : 'Test 5 failed');
}

runTests();

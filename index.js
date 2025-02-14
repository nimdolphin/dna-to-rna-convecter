function convertDnaToRna(dnaSequence) {
  if (!/^[ACGT]*$/.test(dnaSequence)) {
    throw new Error('Invalid DNA sequence. Only A, C, G, and T are allowed.');
  }

  const result = dnaSequence
    .replace(/G/g, 'X')
    .replace(/C/g, 'G')
    .replace(/X/g, 'C')
    .replace(/T/g, 'D')
    .replace(/A/g, 'U')
    .replace(/D/g, 'A');

  return result;
}

module.exports = convertDnaToRna;

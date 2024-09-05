# DNA to RNA Converter

## Description

This package provides a function to convert DNA sequences into RNA sequences by replacing the nucleotides according to standard transcription rules.

## Installation

You can install the package via npm:

```bash
npm install dna-to-rna-converter
```

## Usage

Here is an example of how to use the package:

```bash
const convertDnaToRna = require('dna-to-rna-converter');

const dnaSequence = 'ATGC';
const rnaSequence = convertDnaToRna(dnaSequence);
console.log(rnaSequence); // Output: UACG
```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

import fs from 'fs';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

function parseInput() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'input.txt');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.trim().split('\n');
    const column1 = [];
    const column2 = [];
    lines.forEach(line => {
        const [n1, n2] = line.trim().split(/\s+/);
        column1.push(n1);
        column2.push(n2);
    });
    return [column1, column2];
}

function part1() {
    const [column1, column2] = parseInput();
    column1.sort((a, b) => a - b);
    column2.sort((a, b) => a - b);
    let sum = 0;

    for (let i = 0; i < column1.length; i++) {
        sum += Math.abs(column1[i] - column2[i]);
    }

    return sum;
}

function part2() {
    const [column1, column2] = parseInput();
    const freq = new Map();

    for (let n of column2) {
        freq.set(n, freq.get(n) + 1 || 1);
    }

    let sum = 0;

    for (let n of column1) {
        sum += n * (freq.get(n) || 0)
    }

    return sum;
}

// console.log(part1());
console.log(part2());

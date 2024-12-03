import fs from 'fs';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

function parseInput() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'input.txt');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return fileContent.trim();
}

function part1() {
    const input = parseInput();
    let res = 0;

    const pattern = /mul\((?<num1>\d{1,3}),(?<num2>\d{1,3})\)/g;

    const matches = input.match(pattern);

    for (let match of matches) {
        const parsed = /mul\((?<num1>\d{1,3}),(?<num2>\d{1,3})\)/.exec(match);
        const {num1, num2} = parsed.groups;
        res += num1 * num2;
    }

    return res;
}

function part2() {
    const input = parseInput();
    let res = 0;
    let command = true;

    const pattern = /(don't\(\))|do\(\)|mul\(\d{1,3},\d{1,3}\)/g;
    const mul = /mul\((?<num1>\d{1,3}),(?<num2>\d{1,3})\)/;


    let match;
    while ((match = pattern.exec(input)) !== null) {
        if (match[0] === "don't()") {
            command = false;
        } else if (match[0] === "do()") {
            command = true;
            continue;
        }

        if (command) {
            const parsed = mul.exec(match);
            const {num1, num2} = parsed.groups;
            res += num1 * num2;
        }
    }

    return res;
}


// console.log(parseInput());
// console.log(part1());
console.log(part2());

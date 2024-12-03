import fs from 'fs';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

function parseInput() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'input.txt');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.trim().split('\n');
    const data = [];
    lines.forEach(line => {
        const report = line.trim().split(/\s+/);
        data.push(report);
    });
    return data;
}

function part1() {
    const input = parseInput();
    let count = 0;
    for (let line of input) {
        if (checkIfValid(line)) count += 1;
    }
    return count;
}

function part2() {
    const input = parseInput();
    let count = 0;

    for (let line of input) {
        if (checkIfValid(line)) {
            count += 1;
            return;
        }

        let safe = 0;
        for (let i = 0; i < line.length; i++) {
            const test = [...line];
            test.splice(i, 1);
            if (checkIfValid(test)) {
                safe++;
            } else {
                break;
            }
        }

        if (safe === 1) count += 1;
    }
    return count;
}

function checkIfValid(nums) {
    const k = nums.length;
    const isIncreasing = nums[k - 1] - nums[0] > 0;

    let increasing = 0;
    let decreasing = 0;

    for (let i = 0; i < k; i++) {
        const diff = nums[i + 1] - nums[i];
        if (isIncreasing && diff <= 3 && diff >= 1) {
            increasing++;
        } else if (!isIncreasing && diff <= -1 && diff >= -3) {
            decreasing++;
        } else {
            return false;
        }
    }

    return isIncreasing ? increasing === k - 1 : decreasing === k - 1;
}

// console.log(part1());
console.log(part2());

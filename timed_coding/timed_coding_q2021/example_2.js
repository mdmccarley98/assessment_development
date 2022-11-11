function largestClearing(unitPath, days) {
    if (days < 1) return -1;


    let left = 0, right = 0, count = 0, max = 0, result = 0;
    while (right < unitPath.length) {

        while (right < unitPath.length && count <= days) {
            if (unitPath.charAt(right) === 'X') {
                if (count === days) break;
                count++;
            }

            right++;

            if (right - left > max) {
                result = left;
                max = right - left;
            }

            //max = Math.max(max, right - left);
        }

        while (left < right) {
            left++;

            if (unitPath.charAt(left - 1) === 'X') {
                count--;
            }

            if (count < days)
                break;
        }
    }
console.log(result)
    return  result;
}

console.log('Public: ')
largestClearing('___', 3, 0, 'No boulders to clear.')
largestClearing('XX_', 1, 1, 'Would remove middle boulder.')
largestClearing('XX_X_X_X_X', 3, 2, 'Clearing starts with an opening.')
largestClearing('XXXX_X_XX_', 2, 3, 'Clearing starts with a boulder.')


console.log('\nPrivate: ')
largestClearing('_X_', 1, 0, 'Clears entire wall.')
largestClearing('_______X', 1, 0, 'Clears entire wall, bigger.')
largestClearing('X_X', 0, 1, 'Zero days just finds the index of largest opening.')
largestClearing('XXXXXXX', 1, 0, 'Completely obstructed.')
largestClearing('XXXXXXX', 8, 0, 'Days longer than wall.')
largestClearing('XXXXX_X', 2, 3, 'Clears two before existing opening.')
largestClearing('_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXX_XXXXXX', 50, 42, 'Large example.')


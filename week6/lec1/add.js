function add(str) {
    let splitStrRegExp;
    if (!str) {
        return 0;
    }

    const delimiterArr = str.match(/^\/\/(.+)\n/);
    if (delimiterArr) {
        let [{length}, delimiter] = delimiterArr;

        if (/^\[.*\]\[.*\]$/.test(delimiter)) {
            delimiter = delimiter
                            .match(/[^[\]]+(?=])/g)
                            .map(d => escapeRegExp(d))
                            .join('|')
                            ;
        }

        splitStrRegExp = new RegExp(delimiter, 'g');
        str = str.slice(length);
    } else {
        splitStrRegExp = /,|\n/g;
    }

    const numArr = str.split(splitStrRegExp).map(str => +str).filter(num => num < 1000);
    const negativeNumbersString = numArr.filter(num => num < 0).join(', ');

    if (negativeNumbersString) {
        throw new Error(`negatives not allowed: ${negativeNumbersString}`);
    }

    return numArr.reduce((sum, next) => sum + next, null);
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

module.exports = add;

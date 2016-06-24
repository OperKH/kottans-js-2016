import test from 'ava';
import add from './add';

test('Should return "0" on empty string', t => {
    t.is(add(''), 0);
});

test('Should be a Number, if only one numner specified in String', t => {
    t.is(add('5'), 5);
});

test('Should return sum of a two Numbers in String, separated by comma', t => {
    t.is(add('4,7'), 11);
});

test('Should handle an unknown amount of numbers', t => {
    t.is(add('4,7,31,52,68,90,260'), 512);
});

test('Should handle new lines(\\n) between numbers (instead of commas)', t => {
    t.is(add('4,7\n9'), 20);
});

test('Should support different delimiters “//[delimiter]\\n[numbers…]”', t => {
    t.is(add('//;\n4;7'), 11);
});

test('Should throw an exception “negatives not allowed” and numbers, thar negative when calling Add with a negative number', t => {
    t.throws(() => add('4,-7'), RegExp('negatives not allowed.+$', 'i'));
});


test('Should ignore numbers bigger than 1000', t => {
    t.is(add('4,1001,7'), 11);
});

test('Should handle delimiters of any length', t => {
    t.is(add('//[***]\n4***7***9'), 20);
});

test('Should handle multiple delimiters', t => {
    t.is(add('//[a][%]\n4a7%9'), 20);
});

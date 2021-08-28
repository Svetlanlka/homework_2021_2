'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски размерностью 0 не бывает', function (assert) {
		assert.strictEqual(chess(0), null);
	});
	
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
	});

	QUnit.test('Некорректный тип данных параметра размерности шахматной доски', function (assert) {
		assert.strictEqual(chess(null), null);
		assert.strictEqual(chess(undefined), null);
		assert.strictEqual(chess(Infinity), null);
		assert.strictEqual(chess(NaN), null);
		assert.strictEqual(chess([1, 2]), null);
		assert.strictEqual(chess('str'), null);
	});

	QUnit.test('Параметр для размерности шахматной доски - не целое число', function (assert) {
		assert.strictEqual(chess(1.23), null);
	});

	QUnit.test('Параметр для размерности шахматной доски не может быть отрицательным', function (assert) {
		assert.strictEqual(chess(-1), null);
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
	});

	QUnit.test('Присутствует преобразование параметра-строки', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
	});

	QUnit.test('Шахматная доска 4 на 4', function (assert) {
		const expected =
			'* * \n' +
			' * *\n' +
			'* * \n' +
			' * *\n';
		assert.strictEqual(chess(4), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
	});

});

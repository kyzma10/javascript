//object not a constructor and check
const ObjMathFunc = {

	summing: function(number1, number2) {
		return number1 + number2;
	},

	summingPrint: function(number1, number2) {
		console.log(number1 + number2);
	},

	substraction: function(number1, number2) {
		return number2 - number1;
	},

	substractionPrint: function(number1, number2) {
		console.log(number2 - number1);
	},

	multiple: function(number1, number2) {
		return number1 * number2;
	},

	multiplePrint: function(number1, number2) {
		console.log(number1 * number2);
	},

	division: function(number1, number2) {
		return number2 / number1;
	},

	divisionPrint: function(number1, number2) {
		console.log(number2 / number1);
	},

	absolute: function(number) {
		return Math.abs(number);
	},

	absolutePrint: function(number) {
		console.log(Math.abs(number));
	},

	quadratic: function(a, b, c) {
		
		const discrim = Math.pow(b, 2) - 4 * a * c;

		if (discrim > 0) {
		const x1 = (-b + Math.sqrt(discrim)) / 2 * a;
		const x2 = (-b - Math.sqrt(discrim)) / 2 * a;
		return 'Корни уравнения: х1= ' + x1.toFixed(2) + ' x2= ' + x2.toFixed(2);
		}
		
		else if (discrim === 0) {
		const x = -b / 2 * a;
		return 'Корни уравнения: х1= ' + x.toFixed(2) + ' x2= ' + x.toFixed(2);
		}
		
		else
			return 'Действительных корней нет!';
	},

	quadraticPrint: function(a, b, c) {
		
		const discrim = Math.pow(b, 2) - 4 * a * c;

		if (discrim > 0) {
		const x1 = (-b + Math.sqrt(discrim)) / 2 * a;
		const x2 = (-b - Math.sqrt(discrim)) / 2 * a;
		console.log('Корни уравнения: х1= ' + x1.toFixed(2) + ' x2= ' + x2.toFixed(2));
		}
		
		else if (discrim === 0) {
		const x = -b / 2 * a;
		console.log('Корни уравнения: х1= ' + x.toFixed(2) + ' x2= ' + x.toFixed(2));
		}
		
		else
			console.log('Действительных корней нет!');
	}

};

ObjMathFunc.summingPrint(2, 4);
ObjMathFunc.substractionPrint(3,8);
ObjMathFunc.multiplePrint(5, 7);
ObjMathFunc.divisionPrint(4,32);
ObjMathFunc.absolutePrint(-34);
ObjMathFunc.quadraticPrint(2, 4, 2);
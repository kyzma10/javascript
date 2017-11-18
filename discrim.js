let a, b, c, x1, x2, discrim;

a = Number(prompt('Введите значение а квадратного ур-я: '));
b = Number(prompt('Введите значение b квадратного ур-я: '));
c = Number(prompt('Введите значение c квадратного ур-я: '));

if (typeof(a) !== 'number' && typeof(b) !== 'number' && typeof(b) !== 'number')
	alert('Неверные данные');

else
{
	discrim = Math.pow(b, 2) - 4 * a * c;

	if (discrim > 0)
	{
		x1 = (-b + Math.sqrt(discrim)) / 2 * a;
		x2 = (-b - Math.sqrt(discrim)) / 2 * a;
		alert('Корни уравнения: х1= ' + x1.toFixed(2) + ' x2= ' + x2.toFixed(2));
	}
	else if (discrim === 0)
	{
		x1 = x2 = -b / 2 * a;
		alert('Корни уравнения: х1= ' + x1.toFixed(2) + ' x2= ' + x2.toFixed(2));
	}
	else
		alert('Действительных корней нет!');
}
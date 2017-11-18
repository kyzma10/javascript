const pi = 3.141592653589793238462643;

let r, h, roundRes, volume;
r = Number(prompt('Введите значение радиуса цилиндра: '));
h = Number(prompt('Введите значение высоты цилиндра: '));
roundRes = Number(prompt('До какого значения хотите округлить результат?'));

if (typeof(r) !== 'number' && typeof(h) !== 'number')
	alert('Неверные данные');

else if (r < 0 || h < 0)
	alert('Неверные данные');

else if (roundRes < 0 || roundRes > 10)
	alert('Значение должно быть от 0 до 10');

else
{
	volume = pi * r * h;
	alert('Обьем цилиндра равен: ' + volume.toFixed(roundRes));
}

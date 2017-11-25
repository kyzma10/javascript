const inNumber = Number(prompt('Введите число для проверки: '));

if (isNaN(inNumber))
	alert('Неверное число!');

else if (inNumber < 0 || inNumber === 0)
	alert('Значение должно быть больше нуля!');

else
{
	let result = 0;
	for (let i = 1; i < inNumber - 1; i++)
	{
		if (inNumber % i === 0)
			result += i;
	}

	if (inNumber === result)
		alert('Число: ' + inNumber + ' - совершенное число.');

	else
		alert('Число: ' + inNumber + ' - НЕ совершенное число.');
}
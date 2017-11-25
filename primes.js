const startNum = Number(prompt('Введите начальное число: '));
const endNum = Number(prompt('Введите конечное число: '));

if (isNaN(startNum) && isNaN(endNum))
	alert('Проверьте ваши данные!');

else if (startNum === endNum)
	alert('Ваши данные не корректны!');

else if (startNum % 1 !== 0 || endNum % 1 !== 0)
	alert('Введенные данные дробные! Нужно ввести целые числа.');

else
{
	let ind = 1;
	if (startNum < endNum)
	{
		for (let i = startNum; i <= endNum; i++)
		{
			console.log('Число' + ind + ': = ' + i);
			ind++;
		}
	}

	else
	{
		for (let i = endNum; i <= startNum; i++)
		{
			console.log('Число' + ind + ': = ' + i);
			ind++;
		}
	}
	
}
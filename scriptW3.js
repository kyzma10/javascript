const myArray = [24, 3, 8, 76, 57, 65, 154, 163];

for (let i = 0; i < 5; i++)
{
	for (let j = 0; j < myArray.length; j ++)
	{
		console.log(myArray[j]);
	}
}

let i = 0;
while (i < 5)
{
	let j = 0;
	while (j < myArray.length)
	{
		console.log(myArray[j]);
		j++;
	}
	i++;
}

let i = 0;
do
{
	let j = 0;
	while (j < myArray.length)
	{
		console.log(myArray[j]);
		j++;
	}
	i++;
}
while (i < 5)

for (let i = 0; i < 5; i++)
{
	for (let j in myArray)
	{
		console.log(myArray[j]);
	}
}

for (let i = 0; i < 5; i++)
{
	for (let j of myArray)
	{
		console.log(j);
	}
}
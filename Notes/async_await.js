async function getData(){
	const response = await fetch("https://api.github.com/users");
	const data = await response.json();

	return data
}

let data = getData();
console.log(data)    //promise:pending
data.then(returnedValue =>console.log(returnedValue))
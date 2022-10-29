module.exports = async function (change, inp, check, url) {
    await fetch(url)
	.then(data => data.json())
	.then(date => {
		date.forEach((todoObj, id) =>{
			if(todoObj.done === "true"){
				inp[id].style.color = "green";
				check[id].checked = true;
				check[id].disabled = true;
				change[id].style.display = "none";
			}
		});
	});
}
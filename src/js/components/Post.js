module.exports = function Post(form, screenInput, url){
	form.addEventListener("submit", async function (e) {
		e.preventDefault();
		const val = screenInput.value.trim();
	
		if (val !== "") {
			await fetch(url, {
				method: "POST",
				headers: {
					"content-type":"application/json"
				},
				body: JSON.stringify({
					title: val, 
					done: "false"
				})
			});
		}
	});
}
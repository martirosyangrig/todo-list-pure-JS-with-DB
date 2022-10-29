module.exports = function (checkarr, spanId, url, ){
    checkarr.forEach((chek, id) =>{
		chek.addEventListener("change", async function() {
			const fakeId = parseInt(spanId[id].textContent)
			if(this.checked){
				await fetch(`${url}/${fakeId}`, {
					method: "PATCH",
					headers:{
					"Content-Type": "application/json"
					},
					body: JSON.stringify({
						done: "true"
					})
				});
			}
		})
	})

}
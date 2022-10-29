module.exports = function Delete(removeBtnsArray, spanId, url){
	removeBtnsArray.forEach((btn, id) => {
		btn.addEventListener("click", async function () {
			
			this.parentElement.remove();
			const fakeId = parseInt(spanId[id].textContent);
			await fetch(`${url}/${fakeId}`, {
				method: "DELETE",
				headers: {
					"content-type" : "application/json"
				}
			});
			
		});
	
	});	
		
}
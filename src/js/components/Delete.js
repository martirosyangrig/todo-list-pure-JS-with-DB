const modalWrapper = document.querySelector(".modal_wrapper")
const buttons = document.querySelectorAll(".modal_window > button")


module.exports = function Delete(removeBtnsArray, spanId, inp, url ){
	removeBtnsArray.forEach((btns, id) => {
		btns.addEventListener("click", async function (e) {
			modalWrapper.classList.add("active")
			
			buttons.forEach(btn =>{
				btn.addEventListener("click", async()=>{
					if(btn.textContent === "Yes"){
						
						await fetch(`http://localhost:8888/history`, {
							method: "POST",
							headers: {
								"content-type" : "application/json"
							},
							body: JSON.stringify({
								title: inp[id].value, 
								status: "deleted"
							})
						});

						// this.parentElement.remove();
						const fakeId = parseInt(spanId[id].textContent);
						await fetch(`http://localhost:8888/todos/${fakeId}`, {
							method: "DELETE",
							headers: {
								"content-type" : "application/json"
							}
						});
					}else{
						modalWrapper.classList.remove("active")
					}
				})
			})
			modalWrapper.addEventListener("click", (e)=>{
				if(e.target && e.target.classList.contains("active")){
					modalWrapper.classList.remove("active")
				}
			})
		});
	});	
		
}





let a = "http://localhost:8888/todos?done=true"
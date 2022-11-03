module.exports = function Put(spanId, change, inp, url){
	change.forEach((btn, id)=>{
		btn.addEventListener("click", (e)=>{
            
			inp[id].classList.toggle("inp");

            inp[id].addEventListener("change", async function (e){
                const fakeId = parseInt(spanId[id].textContent)
    
                await fetch(`http://localhost:8888/todos/${fakeId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"  
                    },
                    body: JSON.stringify({
                        title: e.target.value
                    })
                })
            })
		});
	});

}
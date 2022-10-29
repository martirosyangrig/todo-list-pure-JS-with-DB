module.exports = function Put(spanId, change, inp, url){
	change.forEach((btn, id)=>{
		btn.addEventListener("click", ()=>{
			inp[id].classList.toggle("inp");

            inp[id].addEventListener("change", async function (e){
                const fakeId = parseInt(spanId[id].textContent)
    
                await fetch(`${url}/${fakeId}`, {
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
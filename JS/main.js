"use strict";

// CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const root = document.querySelector("#root");
const form = document.createElement("form");

const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenBtnAdd = document.createElement("button");

const listsBlock = document.createElement("div");

form.id = "todo-form";
screenBlock.id = "screenBlock";
listsBlock.id = "listsBlock";

screenInput.type = "text";
screenInput.placeholder = "Type here...";
screenBtnAdd.textContent = "ADD";

root.append(form);
form.prepend(screenBlock);
form.append(listsBlock);
screenBlock.append(screenInput, screenBtnAdd);

const url = "http://localhost:8888/todo";

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = screenInput.value.trim();

	if (val !== "") {
		fetch(url, {
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

	this.reset();
});

fetch(url)
.then(data => data.json())
.then(data => {
	data.forEach(todoObj => {
		listsBlock.innerHTML += `
			<div class="listsBlock__item">
				<p>
					<span class = "todo_list_id">${todoObj.id}</span>
					<input type="checkbox" id="check">
                    <input type="text" value="${todoObj.title}" id = "text" class = "inp">
				</p>
                <div data-cg ><img src="./img/pencil-icon-vector-21894351.jpg" alt="" ></div>
				<button data-rm>Remove</button>
			</div>
		`;
	});

	return data;
})
.then(data => {
	const removeBtnsArray = document.querySelectorAll("[data-rm]");
	removeBtnsArray.forEach(btn => {
		btn.addEventListener("click", function () {
			this.parentElement.remove();
			data.forEach(todoObj => {
				const fakeId = this.previousElementSibling.previousElementSibling.firstElementChild.textContent;

				if (parseInt(fakeId) === todoObj.id) {
					fetch(`${url}/${todoObj.id}`, {
						method: "DELETE",
						headers: {
							"content-type" : "application/json"
						}
					});
				}
			});
		});
       
	});
    return data;
})
.then(data => {
    const change = document.querySelectorAll("[data-cg]");
    const inp = document.querySelectorAll(".inp");
    change.forEach((btn, id)=>{
        btn.addEventListener("click", ()=>{
            inp[id].classList.toggle("inp");
           
        });
    });

    return data;
})
.then(date => {
	const spanId = document.querySelectorAll(".todo_list_id");
    const inp = document.querySelectorAll(".inp");
    inp.forEach((inputs, id)=>{
        inputs.addEventListener("change", function (e){
			const fakeId = parseInt(spanId[id].textContent);
			
            fetch(`${url}/${fakeId}`, {   
                method: "PATCH",   
                headers: {     
                    "Content-Type": "application/json"   
                },   
                body: JSON.stringify({    
                     title: e.target.value
                }) 
            });    
        });
    });
	return date;
})
.then(date =>{
	const spanId = document.querySelectorAll(".todo_list_id")
	const check = document.querySelectorAll("#check");
	check.forEach((checkbox, id) =>{
		checkbox.addEventListener("change", function (){
			const fakeId = parseInt(spanId[id].textContent);
			if(this.checked){
				fetch(`${url}/${fakeId}`, {
					method: "PATCH",
					headers:{
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						done: "true"
					})
				});
			}
		});
	});
	return date;
})
.then(date => {
	const change = document.querySelectorAll("[data-cg]");
	const check = document.querySelectorAll("#check");
	const inp = document.querySelectorAll(".inp");
	date.forEach((todoObj, id) =>{
		if(todoObj.done === "true"){
			inp[id].style.color = "green";
			check[id].checked = true;
			check[id].disabled = true;
			change[id].style.display = "none";
		}
	});
});
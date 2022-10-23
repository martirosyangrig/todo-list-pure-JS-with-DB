"use strict";

const root = document.querySelector("#root");
const url = "http://localhost:8888/todos"; 

const UI = {
	
	title: document.createElement("h1"),
	subTitle : document.createElement("p"),
	form : document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),

	elementOptions () {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Asyn Application";

		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.textContent = "ADD";
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";
	},

	appendElements () {
		root.append(this.title, this.subTitle, this.form, this.listsBlock);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
	},

	start () {
		this.elementOptions();
		this.appendElements();
	}
};

UI.start();



function POST(){
	UI.form.addEventListener("submit", function (e) {
		e.preventDefault();
		const val = UI.screenInput.value.trim();
	
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
	console.log(0);
}
function GET(){
	return fetch(url)
	.then(data => data.json())
	.then(data => {
		data.forEach(todoObj => {
			UI.listsBlock.innerHTML += `
				<div class="listsBlock_Item">
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

	});	
	
}
function DELETE(){
	const removeBtnsArray = document.querySelectorAll("[data-rm]");
	const spanId = document.querySelectorAll(".todo_list_id");
	removeBtnsArray.forEach((btn, id) => {
		btn.addEventListener("click", function () {
			
			this.parentElement.remove();
			const fakeId = parseInt(spanId[id].textContent);
			fetch(`${url}/${fakeId}`, {
				method: "DELETE",
				headers: {
					"content-type" : "application/json"
				}
			});
			
		});
	
	});	
		
}
function activeInputeChange(){
	const change = document.querySelectorAll("[data-cg]");
	const inp = document.querySelectorAll(".inp");
	change.forEach((btn, id)=>{
		btn.addEventListener("click", ()=>{
			inp[id].classList.toggle("inp");
		});
	});
	
}
function PUT(){
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
}
function checkboxDbUpdate(){
	const spanId = document.querySelectorAll(".todo_list_id");
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

}
function makeListDone(){
	fetch(url)
	.then(data => data.json())
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
}

POST();
GET()
.then(data =>{
	checkboxDbUpdate();
	DELETE();
	activeInputeChange();
	PUT();
	makeListDone();
});



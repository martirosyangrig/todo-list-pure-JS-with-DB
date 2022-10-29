"use strict";
const UI = require("./components/UI");
const Post = require("./components/Post");
const Get = require("./components/Get");
const Put = require("./components/Put");
const Delete = require("./components/Delete");
const Complete = require("./components/Complete");
const ListDone = require("./components/makeListdone");
const filterList = require("./components/filterList")

const root = document.querySelector("#root");
const url = "http://localhost:8888/todos"; 


const{form, screenInput, listsBlock, fillterButtons} = UI;
UI.start();

Post(form, screenInput, url)

async function init(){
	await Get(url, listsBlock );
	Put( 
		document.querySelectorAll(".todo_list_id"), 
		document.querySelectorAll("[data-cg]"), 
		document.querySelectorAll(".inp"), 
		url 
	)
	Delete (
		document.querySelectorAll("[data-rm]"), 
		document.querySelectorAll(".todo_list_id"), 
		url 
	)
	Complete (
		document.querySelectorAll("#check"),  
		document.querySelectorAll(".todo_list_id"),
		url,
		document.querySelectorAll("[data-cg]"),
		document.querySelectorAll(".inp")
	);
	ListDone(
		document.querySelectorAll("[data-cg]"),
		document.querySelectorAll(".inp"),
		document.querySelectorAll("#check"),
		url

	)
	filterList(fillterButtons, url, listsBlock)
}
init()
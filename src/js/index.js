"use strict";
const render = require("./components/Render");
const Select = require("./components/Select");
const UI = require("./components/UI");
const Post = require("./components/Post");
const Put = require("./components/Put");
const Delete = require("./components/Delete");
const Complete = require("./components/Complete");
const ListDone = require("./components/makeListdone");
const filterList = require("./components/filterList")

const root = document.querySelector("#root");
const url = "http://localhost:8888/todos"; 


const{form, screenInput} = UI;
UI.start();

Post(form, screenInput, url)

async function init(){
	await render(url, UI );
	await Select(Put, Delete, Complete,ListDone, url );
	await filterList(
		document.querySelectorAll("[data-filter]"),
	 	url, 
	  	UI, 
	  	Put, 
	  	Delete, 
	  	Complete, 
	  	ListDone
	)
	
}
init()
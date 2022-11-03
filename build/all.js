/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/Complete.js":
/*!***************************************!*\
  !*** ./src/js/components/Complete.js ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = function (checkarr, spanId, url, ){\r\n    checkarr.forEach((chek, id) =>{\r\n\t\tchek.addEventListener(\"change\", async function() {\r\n\t\t\tconst fakeId = parseInt(spanId[id].textContent)\r\n\t\t\tif(this.checked){\r\n\t\t\t\tawait fetch(`http://localhost:8888/todos/${fakeId}`, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders:{\r\n\t\t\t\t\t\"Content-Type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({\r\n\t\t\t\t\t\tdone: \"true\"\r\n\t\t\t\t\t})\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/Complete.js?");

/***/ }),

/***/ "./src/js/components/Delete.js":
/*!*************************************!*\
  !*** ./src/js/components/Delete.js ***!
  \*************************************/
/***/ ((module) => {

eval("const modalWrapper = document.querySelector(\".modal_wrapper\")\r\nconst buttons = document.querySelectorAll(\".modal_window > button\")\r\n\r\n\r\nmodule.exports = function Delete(removeBtnsArray, spanId, inp, url ){\r\n\tremoveBtnsArray.forEach((btns, id) => {\r\n\t\tbtns.addEventListener(\"click\", async function (e) {\r\n\t\t\tmodalWrapper.classList.add(\"active\")\r\n\t\t\t\r\n\t\t\tbuttons.forEach(btn =>{\r\n\t\t\t\tbtn.addEventListener(\"click\", async()=>{\r\n\t\t\t\t\tif(btn.textContent === \"Yes\"){\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tawait fetch(`http://localhost:8888/history`, {\r\n\t\t\t\t\t\t\tmethod: \"POST\",\r\n\t\t\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\tbody: JSON.stringify({\r\n\t\t\t\t\t\t\t\ttitle: inp[id].value, \r\n\t\t\t\t\t\t\t\tstatus: \"deleted\"\r\n\t\t\t\t\t\t\t})\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t// this.parentElement.remove();\r\n\t\t\t\t\t\tconst fakeId = parseInt(spanId[id].textContent);\r\n\t\t\t\t\t\tawait fetch(`http://localhost:8888/todos/${fakeId}`, {\r\n\t\t\t\t\t\t\tmethod: \"DELETE\",\r\n\t\t\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t}else{\r\n\t\t\t\t\t\tmodalWrapper.classList.remove(\"active\")\r\n\t\t\t\t\t}\r\n\t\t\t\t})\r\n\t\t\t})\r\n\t\t\tmodalWrapper.addEventListener(\"click\", (e)=>{\r\n\t\t\t\tif(e.target && e.target.classList.contains(\"active\")){\r\n\t\t\t\t\tmodalWrapper.classList.remove(\"active\")\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t});\r\n\t});\t\r\n\t\t\r\n}\r\n\r\n\r\n\r\n\r\n\r\nlet a = \"http://localhost:8888/todos?done=true\"\n\n//# sourceURL=webpack://todo/./src/js/components/Delete.js?");

/***/ }),

/***/ "./src/js/components/Post.js":
/*!***********************************!*\
  !*** ./src/js/components/Post.js ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = function Post(form, screenInput, url){\r\n\tform.addEventListener(\"submit\", async function (e) {\r\n\t\te.preventDefault();\r\n\t\tconst val = screenInput.value.trim();\r\n\t\r\n\t\tif (val !== \"\") {\r\n\t\t\tawait fetch(url, {\r\n\t\t\t\tmethod: \"POST\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\":\"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify({\r\n\t\t\t\t\ttitle: val, \r\n\t\t\t\t\tdone: \"false\"\r\n\t\t\t\t})\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/Post.js?");

/***/ }),

/***/ "./src/js/components/Put.js":
/*!**********************************!*\
  !*** ./src/js/components/Put.js ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = function Put(spanId, change, inp, url){\r\n\tchange.forEach((btn, id)=>{\r\n\t\tbtn.addEventListener(\"click\", (e)=>{\r\n            \r\n\t\t\tinp[id].classList.toggle(\"inp\");\r\n\r\n            inp[id].addEventListener(\"change\", async function (e){\r\n                const fakeId = parseInt(spanId[id].textContent)\r\n    \r\n                await fetch(`http://localhost:8888/todos/${fakeId}`, {\r\n                    method: \"PATCH\",\r\n                    headers: {\r\n                        \"Content-Type\": \"application/json\"  \r\n                    },\r\n                    body: JSON.stringify({\r\n                        title: e.target.value\r\n                    })\r\n                })\r\n            })\r\n\t\t});\r\n\t});\r\n\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/Put.js?");

/***/ }),

/***/ "./src/js/components/Render.js":
/*!*************************************!*\
  !*** ./src/js/components/Render.js ***!
  \*************************************/
/***/ ((module) => {

eval("\r\nmodule.exports = async function render(url, Ui){\r\n   return await fetch(url)\r\n    .then(data => data.json())\r\n    .then(data =>{\r\n        data.forEach(todoObj => {\r\n            if(url === `http://localhost:8888/history` ){\r\n                Ui.listsBlock.innerHTML += `\r\n                <div class=\"listsBlock_Item\">\r\n                    <p>\r\n                        <span class = \"todo_list_id\">${todoObj.id}</span>\r\n                        <input type=\"text\" value=\"${todoObj.title}\" id = \"text\" class = \"inp\">\r\n                    </p>\r\n                </div>\r\n            `;\r\n            }else{\r\n                Ui.listsBlock.innerHTML += `\r\n                <div class=\"listsBlock_Item\">\r\n                    <p>\r\n                        <span class = \"todo_list_id\">${todoObj.id}</span>\r\n                        <input type=\"checkbox\" id=\"check\" >\r\n                        <input type=\"text\" value=\"${todoObj.title}\" id = \"text\" class = \"inp\">\r\n                    </p>\r\n                    <button data-cg class=\"fa fa-pencil\"></button>\r\n                    <button data-rm class=\"fa fa-trash\"></button>\r\n                </div>\r\n            `;\r\n            }\r\n\r\n        });\r\n    })\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/Render.js?");

/***/ }),

/***/ "./src/js/components/Select.js":
/*!*************************************!*\
  !*** ./src/js/components/Select.js ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = async function (Put, Delete, Complete, ListDone, Filtrurl) {\r\n\tPut( \r\n\t\tdocument.querySelectorAll(\".todo_list_id\"), \r\n\t\tdocument.querySelectorAll(\"[data-cg]\"), \r\n\t\tdocument.querySelectorAll(\".inp\"), \r\n\t\tFiltrurl\r\n\t)\r\n\tDelete (\r\n\t\tdocument.querySelectorAll(\"[data-rm]\"), \r\n\t\tdocument.querySelectorAll(\".todo_list_id\"), \r\n\t\tdocument.querySelectorAll(\".inp\"), \r\n\t\tFiltrurl\r\n\t)\r\n\tComplete (\r\n\t\tdocument.querySelectorAll(\"#check\"),  \r\n\t\tdocument.querySelectorAll(\".todo_list_id\"),\r\n\t\tFiltrurl\r\n\t);\r\n    ListDone(\r\n\t\tdocument.querySelectorAll(\"[data-cg]\"),\r\n\t\tdocument.querySelectorAll(\".inp\"),\r\n\t\tdocument.querySelectorAll(\"#check\"),\r\n\t\tFiltrurl\r\n\r\n\t)\r\n    \r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/Select.js?");

/***/ }),

/***/ "./src/js/components/UI.js":
/*!*********************************!*\
  !*** ./src/js/components/UI.js ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = {\r\n\ttitle: document.createElement(\"h1\"),\r\n\tsubTitle : document.createElement(\"p\"),\r\n\tform : document.createElement(\"form\"),\r\n\tscreenBlock: document.createElement(\"div\"),\r\n\tscreenInput: document.createElement(\"input\"),\r\n\tscreenAddBtn: document.createElement(\"button\"),\r\n\tlistsBlock: document.createElement(\"div\"),\r\n\tfillterButtons: document.createElement(\"div\"),\r\n\tfilterComplete: document.createElement(\"button\"),\r\n\tfilterUnComplete: document.createElement(\"button\"),\r\n\tfilterAll: document.createElement(\"button\"),\r\n\tshowDeleted: document.createElement(\"button\"),\r\n\telementOptions () {\r\n\t\tthis.title.textContent = \"CRUD\";\r\n\t\tthis.subTitle.textContent = \"Asyn Application\";\r\n\r\n\t\tthis.form.id = \"app-form\";\r\n\t\tthis.screenBlock.id = \"screenBlock\";\r\n\t\tthis.screenInput.type = \"text\";\r\n\t\tthis.screenInput.placeholder = \"Type here...\";\r\n\t\tthis.screenAddBtn.classList.add(\"fa\", \"fa-plus-circle\");\r\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\r\n\t\tthis.listsBlock.id = \"listBlock\";\r\n\t\tthis.fillterButtons.className = \"show_cont\"\r\n\t\tthis.filterComplete.setAttribute(\"data-filter\", \"filterComplete\");\r\n\t\tthis.filterUnComplete.setAttribute(\"data-filter\", \"filterUnComplete\");\r\n\t\tthis.filterAll.setAttribute(\"data-filter\", \"filterAll\");\r\n\t\tthis.showDeleted.setAttribute(\"data-filter\", \"showdelet\");\r\n\t\tthis.filterComplete.textContent = \"Show Completed\"\r\n\t\tthis.filterUnComplete.textContent = \"Show UnCompleted\"\r\n\t\tthis.filterAll.textContent = \"Show All\"\r\n\t\tthis.showDeleted.textContent = \"Show Deleted\"\r\n\r\n\t},\r\n\r\n\tappendElements () {\r\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock, this.fillterButtons);\r\n\t\tthis.form.append(this.screenBlock);\r\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\r\n\t\tthis.fillterButtons.append(this.filterComplete, this.filterUnComplete, this.filterAll, this.showDeleted);\r\n\r\n\t},\r\n\r\n\tstart () {\r\n\t\tthis.elementOptions();\r\n\t\tthis.appendElements();\r\n\t}\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/UI.js?");

/***/ }),

/***/ "./src/js/components/filterList.js":
/*!*****************************************!*\
  !*** ./src/js/components/filterList.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const render = __webpack_require__(/*! ./Render */ \"./src/js/components/Render.js\");\r\nconst Select = __webpack_require__(/*! ./Select */ \"./src/js/components/Select.js\")\r\nmodule.exports = async function (btnArr, url,Ui, Put, Delete, Complete, ListDone) {\r\n    btnArr.forEach(btn=>{\r\n        btn.addEventListener(\"click\", ()=>{\r\n            Ui.listsBlock.innerHTML = \"\"\r\n            let filterURL;\r\n            if (btn.dataset.filter === \"filterComplete\") {\r\n                filterURL = `${url}?done=true`;\r\n                \r\n            } else if (btn.dataset.filter === \"filterUnComplete\") {\r\n                filterURL = `${url}/?done=false`;\r\n               \r\n            } else if (btn.dataset.filter === \"filterAll\") {\r\n                filterURL = url;\r\n                \r\n            }else if (btn.dataset.filter === \"showdelet\") {\r\n                filterURL = `http://localhost:8888/history`;\r\n               \r\n            }\r\n            render(filterURL, Ui)\r\n            .then(()=>{\r\n                Select(Put, Delete, Complete, ListDone, filterURL)\r\n            })\r\n              \r\n        })\r\n        \r\n    })\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/filterList.js?");

/***/ }),

/***/ "./src/js/components/makeListdone.js":
/*!*******************************************!*\
  !*** ./src/js/components/makeListdone.js ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = async function (change, inp, check, url) {\r\n    await fetch(url)\r\n\t.then(data => data.json())\r\n\t.then(date => {\r\n\t\tdate.forEach((todoObj, id) =>{\r\n\t\t\tif(todoObj.done === \"true\"){\r\n\t\t\t\tinp[id].style.color = \"green\";\r\n\t\t\t\tcheck[id].checked = true;\r\n\t\t\t\tcheck[id].disabled = true;\r\n\t\t\t\tchange[id].style.display = \"none\";\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/makeListdone.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\nconst render = __webpack_require__(/*! ./components/Render */ \"./src/js/components/Render.js\");\r\nconst Select = __webpack_require__(/*! ./components/Select */ \"./src/js/components/Select.js\");\r\nconst UI = __webpack_require__(/*! ./components/UI */ \"./src/js/components/UI.js\");\r\nconst Post = __webpack_require__(/*! ./components/Post */ \"./src/js/components/Post.js\");\r\nconst Put = __webpack_require__(/*! ./components/Put */ \"./src/js/components/Put.js\");\r\nconst Delete = __webpack_require__(/*! ./components/Delete */ \"./src/js/components/Delete.js\");\r\nconst Complete = __webpack_require__(/*! ./components/Complete */ \"./src/js/components/Complete.js\");\r\nconst ListDone = __webpack_require__(/*! ./components/makeListdone */ \"./src/js/components/makeListdone.js\");\r\nconst filterList = __webpack_require__(/*! ./components/filterList */ \"./src/js/components/filterList.js\")\r\n\r\nconst root = document.querySelector(\"#root\");\r\nconst url = \"http://localhost:8888/todos\"; \r\n\r\n\r\nconst{form, screenInput} = UI;\r\nUI.start();\r\n\r\nPost(form, screenInput, url)\r\n\r\nasync function init(){\r\n\tawait render(url, UI );\r\n\tawait Select(Put, Delete, Complete,ListDone, url );\r\n\tawait filterList(\r\n\t\tdocument.querySelectorAll(\"[data-filter]\"),\r\n\t \turl, \r\n\t  \tUI, \r\n\t  \tPut, \r\n\t  \tDelete, \r\n\t  \tComplete, \r\n\t  \tListDone\r\n\t)\r\n\t\r\n}\r\ninit()\n\n//# sourceURL=webpack://todo/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
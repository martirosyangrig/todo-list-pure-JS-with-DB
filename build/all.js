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

eval("module.exports = function (checkarr, spanId, url, ){\r\n    checkarr.forEach((chek, id) =>{\r\n\t\tchek.addEventListener(\"change\", async function() {\r\n\t\t\tconst fakeId = parseInt(spanId[id].textContent)\r\n\t\t\tif(this.checked){\r\n\t\t\t\tawait fetch(`${url}/${fakeId}`, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders:{\r\n\t\t\t\t\t\"Content-Type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({\r\n\t\t\t\t\t\tdone: \"true\"\r\n\t\t\t\t\t})\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/Complete.js?");

/***/ }),

/***/ "./src/js/components/Delete.js":
/*!*************************************!*\
  !*** ./src/js/components/Delete.js ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = function Delete(removeBtnsArray, spanId, url){\r\n\tremoveBtnsArray.forEach((btn, id) => {\r\n\t\tbtn.addEventListener(\"click\", async function () {\r\n\t\t\t\r\n\t\t\tthis.parentElement.remove();\r\n\t\t\tconst fakeId = parseInt(spanId[id].textContent);\r\n\t\t\tawait fetch(`${url}/${fakeId}`, {\r\n\t\t\t\tmethod: \"DELETE\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\t\r\n\t\t});\r\n\t\r\n\t});\t\r\n\t\t\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/Delete.js?");

/***/ }),

/***/ "./src/js/components/Get.js":
/*!**********************************!*\
  !*** ./src/js/components/Get.js ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = async function (url, listsBlock){\r\n\treturn await fetch(url)\r\n\t.then(data => data.json())\r\n\t.then(data => {\r\n\t\tdata.forEach(todoObj => {\r\n\t\t\tlistsBlock.innerHTML += `\r\n\t\t\t\t<div class=\"listsBlock_Item\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<span class = \"todo_list_id\">${todoObj.id}</span>\r\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"check\">\r\n\t\t\t\t\t\t<input type=\"text\" value=\"${todoObj.title}\" id = \"text\" class = \"inp\">\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<button data-cg class=\"fa fa-pencil\"></button>\r\n\t\t\t\t\t<button data-rm class=\"fa fa-trash\"></button>\r\n\t\t\t\t</div>\r\n\t\t\t`;\r\n\t\t});\r\n\t\treturn data;\r\n\r\n\t});\t\r\n\t\r\n} \n\n//# sourceURL=webpack://todo/./src/js/components/Get.js?");

/***/ }),

/***/ "./src/js/components/Post.js":
/*!***********************************!*\
  !*** ./src/js/components/Post.js ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = function Post(form, screenInput, url){\r\n\tform.addEventListener(\"submit\", async function (e) {\r\n\t\te.preventDefault();\r\n\t\tconst val = screenInput.value.trim();\r\n\t\r\n\t\tif (val !== \"\") {\r\n\t\t\tawait fetch(url, {\r\n\t\t\t\tmethod: \"POST\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\":\"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify({\r\n\t\t\t\t\ttitle: val, \r\n\t\t\t\t\tdone: \"false\"\r\n\t\t\t\t})\r\n\t\t\t});\r\n\t\t}\r\n\t\r\n\t\tthis.reset();\r\n\t});\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/Post.js?");

/***/ }),

/***/ "./src/js/components/Put.js":
/*!**********************************!*\
  !*** ./src/js/components/Put.js ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = function Put(spanId, change, inp, url){\r\n\tchange.forEach((btn, id)=>{\r\n\t\tbtn.addEventListener(\"click\", ()=>{\r\n\t\t\tinp[id].classList.toggle(\"inp\");\r\n\r\n            inp[id].addEventListener(\"change\", async function (e){\r\n                const fakeId = parseInt(spanId[id].textContent)\r\n    \r\n                await fetch(`${url}/${fakeId}`, {\r\n                    method: \"PATCH\",\r\n                    headers: {\r\n                        \"Content-Type\": \"application/json\"  \r\n                    },\r\n                    body: JSON.stringify({\r\n                        title: e.target.value\r\n                    })\r\n                })\r\n            })\r\n\t\t});\r\n\t});\r\n\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/Put.js?");

/***/ }),

/***/ "./src/js/components/UI.js":
/*!*********************************!*\
  !*** ./src/js/components/UI.js ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = {\r\n\ttitle: document.createElement(\"h1\"),\r\n\tsubTitle : document.createElement(\"p\"),\r\n\tform : document.createElement(\"form\"),\r\n\tscreenBlock: document.createElement(\"div\"),\r\n\tscreenInput: document.createElement(\"input\"),\r\n\tscreenAddBtn: document.createElement(\"button\"),\r\n\tlistsBlock: document.createElement(\"div\"),\r\n\tfillterButtons: document.createElement(\"div\"),\r\n\r\n\telementOptions () {\r\n\t\tthis.title.textContent = \"CRUD\";\r\n\t\tthis.subTitle.textContent = \"Asyn Application\";\r\n\r\n\t\tthis.form.id = \"app-form\";\r\n\t\tthis.screenBlock.id = \"screenBlock\";\r\n\t\tthis.screenInput.type = \"text\";\r\n\t\tthis.screenInput.placeholder = \"Type here...\";\r\n\t\tthis.screenAddBtn.classList.add(\"fa\", \"fa-plus-circle\");\r\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\r\n\t\tthis.listsBlock.id = \"listBlock\";\r\n\t},\r\n\r\n\tappendElements () {\r\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock, this.fillterButtons);\r\n\t\tthis.form.append(this.screenBlock);\r\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\r\n\t},\r\n\r\n\tstart () {\r\n\t\tthis.elementOptions();\r\n\t\tthis.appendElements();\r\n\t}\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/UI.js?");

/***/ }),

/***/ "./src/js/components/filterButtons/showAll.js":
/*!****************************************************!*\
  !*** ./src/js/components/filterButtons/showAll.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Get = __webpack_require__(/*! ../Get */ \"./src/js/components/Get.js\");\r\n\r\nmodule.exports = function (btns, url, listsBlock){\r\n    btns.forEach(btn=>{\r\n        if(btn.textContent === \"Show all\"){\r\n            btn.addEventListener(\"click\", async ()=>{\r\n                location.reload();\r\n            })\r\n           \r\n        }\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/filterButtons/showAll.js?");

/***/ }),

/***/ "./src/js/components/filterButtons/showAllComplited.js":
/*!*************************************************************!*\
  !*** ./src/js/components/filterButtons/showAllComplited.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("module.exports = function (btns, url, listsBlock){\r\n    btns.forEach(btn=>{\r\n        if(btn.textContent === \"All complite\"){\r\n            btn.addEventListener(\"click\", async ()=>{\r\n                let data;\r\n                await fetch(url)\r\n                .then(async (date) =>{\r\n                    data = await date.json()\r\n                    data = data.filter((todo)=>{\r\n                        return todo.done === \"true\"\r\n                    })\r\n\r\n                })\r\n                data.forEach((todoObj, id) => {\r\n                    id === 0 ? listsBlock.innerHTML = \"\" :\"\"\r\n                    \r\n                    listsBlock.innerHTML += `\r\n                        <div class=\"listsBlock_Item\">\r\n                            <p>\r\n                                <span class = \"todo_list_id\">${todoObj.id}</span>\r\n                                <input type=\"text\" value=\"${todoObj.title}\" id = \"text\" class = \"inp\">\r\n                            </p>\r\n                            <button data-rm class=\"fa fa-trash\"></button>\r\n                        </div>\r\n                    `;\r\n                });\r\n            })\r\n           \r\n        }\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/filterButtons/showAllComplited.js?");

/***/ }),

/***/ "./src/js/components/filterButtons/showNoneComplited.js":
/*!**************************************************************!*\
  !*** ./src/js/components/filterButtons/showNoneComplited.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("module.exports = function (btns, url, listsBlock){\r\n    btns.forEach(btn=>{\r\n        if(btn.textContent === \"Not complited\"){\r\n            btn.addEventListener(\"click\", async ()=>{\r\n                let data;\r\n                await fetch(url)\r\n                .then(async (date) =>{\r\n                    data = await date.json()\r\n                    data = data.filter((todo)=>{\r\n                        return todo.done === \"false\"\r\n                    })\r\n\r\n                })\r\n                data.forEach(todoObj => {\r\n                    listsBlock.innerHTML = \"\"\r\n                    listsBlock.innerHTML += `\r\n                        <div class=\"listsBlock_Item\">\r\n                            <p>\r\n                                <span class = \"todo_list_id\">${todoObj.id}</span>\r\n                                <input type=\"checkbox\" id=\"check\" >\r\n                                <input type=\"text\" value=\"${todoObj.title}\" id = \"text\" class = \"inp\">\r\n                            </p>\r\n                            <button data-cg class=\"fa fa-pencil\"></button>\r\n                            <button data-rm class=\"fa fa-trash\"></button>\r\n                        </div>\r\n                    `;\r\n                });\r\n            })\r\n           \r\n        }\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/filterButtons/showNoneComplited.js?");

/***/ }),

/***/ "./src/js/components/filterList.js":
/*!*****************************************!*\
  !*** ./src/js/components/filterList.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const showAllComp = __webpack_require__(/*! ./filterButtons/showAllComplited */ \"./src/js/components/filterButtons/showAllComplited.js\")\r\nconst showNoneComp = __webpack_require__(/*! ./filterButtons/showNoneComplited */ \"./src/js/components/filterButtons/showNoneComplited.js\")\r\nconst showAll = __webpack_require__(/*! ./filterButtons/showAll */ \"./src/js/components/filterButtons/showAll.js\")\r\nmodule.exports = async function (listblock, url, listsBlock) {\r\n    let sum = 0\r\n    await fetch(url)\r\n    .then(data =>{\r\n        return data.json()\r\n    })\r\n    .then(data => {\r\n        \r\n        data.forEach(todo=>{\r\n            if(todo.done === \"true\"){\r\n                sum++\r\n            }\r\n        })\r\n        listblock.innerHTML += `\r\n        <div class=\"show_cont\">\r\n            <div class=\"done_count\">\r\n                <span>${sum}/${data.length}</span>\r\n            </div>\r\n            \r\n            <button class=\"show\">All complite</button>\r\n            <button class=\"show\">Not complited</button>\r\n            <button class=\"show\">Show all</button>\r\n        </div>\r\n    `\r\n    })\r\n\r\n    \r\n    showAllComp(document.querySelectorAll(\".show\"), url, listsBlock)\r\n    showNoneComp(document.querySelectorAll(\".show\"), url, listsBlock)\r\n    showAll(document.querySelectorAll(\".show\"), url, listsBlock)\r\n}\n\n//# sourceURL=webpack://todo/./src/js/components/filterList.js?");

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
eval("\r\nconst UI = __webpack_require__(/*! ./components/UI */ \"./src/js/components/UI.js\");\r\nconst Post = __webpack_require__(/*! ./components/Post */ \"./src/js/components/Post.js\");\r\nconst Get = __webpack_require__(/*! ./components/Get */ \"./src/js/components/Get.js\");\r\nconst Put = __webpack_require__(/*! ./components/Put */ \"./src/js/components/Put.js\");\r\nconst Delete = __webpack_require__(/*! ./components/Delete */ \"./src/js/components/Delete.js\");\r\nconst Complete = __webpack_require__(/*! ./components/Complete */ \"./src/js/components/Complete.js\");\r\nconst ListDone = __webpack_require__(/*! ./components/makeListdone */ \"./src/js/components/makeListdone.js\");\r\nconst filterList = __webpack_require__(/*! ./components/filterList */ \"./src/js/components/filterList.js\")\r\n\r\nconst root = document.querySelector(\"#root\");\r\nconst url = \"http://localhost:8888/todos\"; \r\n\r\n\r\nconst{form, screenInput, listsBlock, fillterButtons} = UI;\r\nUI.start();\r\n\r\nPost(form, screenInput, url)\r\n\r\nasync function init(){\r\n\tawait Get(url, listsBlock );\r\n\tPut( \r\n\t\tdocument.querySelectorAll(\".todo_list_id\"), \r\n\t\tdocument.querySelectorAll(\"[data-cg]\"), \r\n\t\tdocument.querySelectorAll(\".inp\"), \r\n\t\turl \r\n\t)\r\n\tDelete (\r\n\t\tdocument.querySelectorAll(\"[data-rm]\"), \r\n\t\tdocument.querySelectorAll(\".todo_list_id\"), \r\n\t\turl \r\n\t)\r\n\tComplete (\r\n\t\tdocument.querySelectorAll(\"#check\"),  \r\n\t\tdocument.querySelectorAll(\".todo_list_id\"),\r\n\t\turl,\r\n\t\tdocument.querySelectorAll(\"[data-cg]\"),\r\n\t\tdocument.querySelectorAll(\".inp\")\r\n\t);\r\n\tListDone(\r\n\t\tdocument.querySelectorAll(\"[data-cg]\"),\r\n\t\tdocument.querySelectorAll(\".inp\"),\r\n\t\tdocument.querySelectorAll(\"#check\"),\r\n\t\turl\r\n\r\n\t)\r\n\tfilterList(fillterButtons, url, listsBlock)\r\n}\r\ninit()\n\n//# sourceURL=webpack://todo/./src/js/index.js?");

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
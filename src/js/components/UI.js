module.exports = {
	title: document.createElement("h1"),
	subTitle : document.createElement("p"),
	form : document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),
	fillterButtons: document.createElement("div"),
	filterComplete: document.createElement("button"),
	filterUnComplete: document.createElement("button"),
	filterAll: document.createElement("button"),
	showDeleted: document.createElement("button"),
	elementOptions () {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Asyn Application";

		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.classList.add("fa", "fa-plus-circle");
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";
		this.fillterButtons.className = "show_cont"
		this.filterComplete.setAttribute("data-filter", "filterComplete");
		this.filterUnComplete.setAttribute("data-filter", "filterUnComplete");
		this.filterAll.setAttribute("data-filter", "filterAll");
		this.showDeleted.setAttribute("data-filter", "showdelet");
		this.filterComplete.textContent = "Show Completed"
		this.filterUnComplete.textContent = "Show UnCompleted"
		this.filterAll.textContent = "Show All"
		this.showDeleted.textContent = "Show Deleted"

	},

	appendElements () {
		root.append(this.title, this.subTitle, this.form, this.listsBlock, this.fillterButtons);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
		this.fillterButtons.append(this.filterComplete, this.filterUnComplete, this.filterAll, this.showDeleted);

	},

	start () {
		this.elementOptions();
		this.appendElements();
	}
}
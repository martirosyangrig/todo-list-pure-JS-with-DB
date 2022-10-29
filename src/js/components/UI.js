module.exports = {
	title: document.createElement("h1"),
	subTitle : document.createElement("p"),
	form : document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),
	fillterButtons: document.createElement("div"),

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
	},

	appendElements () {
		root.append(this.title, this.subTitle, this.form, this.listsBlock, this.fillterButtons);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
	},

	start () {
		this.elementOptions();
		this.appendElements();
	}
}
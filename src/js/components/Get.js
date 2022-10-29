module.exports = async function (url, listsBlock){
	return await fetch(url)
	.then(data => data.json())
	.then(data => {
		data.forEach(todoObj => {
			listsBlock.innerHTML += `
				<div class="listsBlock_Item">
					<p>
						<span class = "todo_list_id">${todoObj.id}</span>
						<input type="checkbox" id="check">
						<input type="text" value="${todoObj.title}" id = "text" class = "inp">
					</p>
					<button data-cg class="fa fa-pencil"></button>
					<button data-rm class="fa fa-trash"></button>
				</div>
			`;
		});
		return data;

	});	
	
} 
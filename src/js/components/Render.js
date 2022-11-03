
module.exports = async function render(url, Ui){
   return await fetch(url)
    .then(data => data.json())
    .then(data =>{
        data.forEach(todoObj => {
            if(url === `http://localhost:8888/history` ){
                Ui.listsBlock.innerHTML += `
                <div class="listsBlock_Item">
                    <p>
                        <span class = "todo_list_id">${todoObj.id}</span>
                        <input type="text" value="${todoObj.title}" id = "text" class = "inp">
                    </p>
                </div>
            `;
            }else{
                Ui.listsBlock.innerHTML += `
                <div class="listsBlock_Item">
                    <p>
                        <span class = "todo_list_id">${todoObj.id}</span>
                        <input type="checkbox" id="check" >
                        <input type="text" value="${todoObj.title}" id = "text" class = "inp">
                    </p>
                    <button data-cg class="fa fa-pencil"></button>
                    <button data-rm class="fa fa-trash"></button>
                </div>
            `;
            }

        });
    })
}
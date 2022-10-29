module.exports = function (btns, url, listsBlock){
    btns.forEach(btn=>{
        if(btn.textContent === "Not complited"){
            btn.addEventListener("click", async ()=>{
                let data;
                await fetch(url)
                .then(async (date) =>{
                    data = await date.json()
                    data = data.filter((todo)=>{
                        return todo.done === "false"
                    })

                })
                data.forEach(todoObj => {
                    listsBlock.innerHTML = ""
                    listsBlock.innerHTML += `
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
                });
            })
           
        }
    })


}
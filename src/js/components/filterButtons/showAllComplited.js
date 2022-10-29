module.exports = function (btns, url, listsBlock){
    btns.forEach(btn=>{
        if(btn.textContent === "All complite"){
            btn.addEventListener("click", async ()=>{
                let data;
                await fetch(url)
                .then(async (date) =>{
                    data = await date.json()
                    data = data.filter((todo)=>{
                        return todo.done === "true"
                    })

                })
                data.forEach((todoObj, id) => {
                    id === 0 ? listsBlock.innerHTML = "" :""
                    
                    listsBlock.innerHTML += `
                        <div class="listsBlock_Item">
                            <p>
                                <span class = "todo_list_id">${todoObj.id}</span>
                                <input type="text" value="${todoObj.title}" id = "text" class = "inp">
                            </p>
                            <button data-rm class="fa fa-trash"></button>
                        </div>
                    `;
                });
            })
           
        }
    })


}
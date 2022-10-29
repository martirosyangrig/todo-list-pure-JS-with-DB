const showAllComp = require("./filterButtons/showAllComplited")
const showNoneComp = require("./filterButtons/showNoneComplited")
const showAll = require("./filterButtons/showAll")
module.exports = async function (listblock, url, listsBlock) {
    let sum = 0
    await fetch(url)
    .then(data =>{
        return data.json()
    })
    .then(data => {
        
        data.forEach(todo=>{
            if(todo.done === "true"){
                sum++
            }
        })
        listblock.innerHTML += `
        <div class="show_cont">
            <div class="done_count">
                <span>${sum}/${data.length}</span>
            </div>
            
            <button class="show">All complite</button>
            <button class="show">Not complited</button>
            <button class="show">Show all</button>
        </div>
    `
    })

    
    showAllComp(document.querySelectorAll(".show"), url, listsBlock)
    showNoneComp(document.querySelectorAll(".show"), url, listsBlock)
    showAll(document.querySelectorAll(".show"), url, listsBlock)
}
const render = require("./Render");
const Select = require("./Select")
module.exports = async function (btnArr, url,Ui, Put, Delete, Complete, ListDone) {
    btnArr.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            Ui.listsBlock.innerHTML = ""
            let filterURL;
            if (btn.dataset.filter === "filterComplete") {
                filterURL = `${url}?done=true`;
                
            } else if (btn.dataset.filter === "filterUnComplete") {
                filterURL = `${url}/?done=false`;
               
            } else if (btn.dataset.filter === "filterAll") {
                filterURL = url;
                
            }else if (btn.dataset.filter === "showdelet") {
                filterURL = `http://localhost:8888/history`;
               
            }
            render(filterURL, Ui)
            .then(()=>{
                Select(Put, Delete, Complete, ListDone, filterURL)
            })
              
        })
        
    })
}
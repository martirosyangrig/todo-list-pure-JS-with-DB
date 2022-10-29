const Get = require("../Get");

module.exports = function (btns, url, listsBlock){
    btns.forEach(btn=>{
        if(btn.textContent === "Show all"){
            btn.addEventListener("click", async ()=>{
                location.reload();
            })
           
        }
    })


}
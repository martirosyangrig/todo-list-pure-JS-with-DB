module.exports = async function (Put, Delete, Complete, ListDone, Filtrurl) {
	Put( 
		document.querySelectorAll(".todo_list_id"), 
		document.querySelectorAll("[data-cg]"), 
		document.querySelectorAll(".inp"), 
		Filtrurl
	)
	Delete (
		document.querySelectorAll("[data-rm]"), 
		document.querySelectorAll(".todo_list_id"), 
		document.querySelectorAll(".inp"), 
		Filtrurl
	)
	Complete (
		document.querySelectorAll("#check"),  
		document.querySelectorAll(".todo_list_id"),
		Filtrurl
	);
    ListDone(
		document.querySelectorAll("[data-cg]"),
		document.querySelectorAll(".inp"),
		document.querySelectorAll("#check"),
		Filtrurl

	)
    
}
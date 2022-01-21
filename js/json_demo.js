
book = {title : "The Outliers", price : 550}   // JavaScript object 

book_json = JSON.stringify(book)  // Convert JS to JSON
console.log(book_json)

book_obj = JSON.parse(book_json) // Convert JSON to JS
console.log(book_obj)
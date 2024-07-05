let bookData = [];
function saveBookData(){
    localStorage.setItem('bookData',JSON.stringify(bookData));
}
function getBookData(){
    const storedData = localStorage.getItem('bookData');
    if (storedData) {
        bookData = JSON.parse(storedData);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    getBookData();
    showBookDetails();
});


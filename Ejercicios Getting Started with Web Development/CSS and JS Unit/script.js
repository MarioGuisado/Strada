document.getElementById('subscribe-button').addEventListener('click', function(){
    alert('Thank you for subscribing!');
});

var rows = document.getElementById('blog-posts').getElementsByTagName('tr');

for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener('click', function() {
        var blogTitle = this.cells[0].innerText;
        alert('You clicked on ' + blogTitle);
    });
}

var links = document.getElementById('favorite-blogs').getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(event){
        event.preventDefault();
        this.style.color = 'red';
    });
}
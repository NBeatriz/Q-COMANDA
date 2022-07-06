$(document).ready(function(){

$('nav-item').click(function(e){
e.preventDefault()

let url = $(this).attr('href')

$('#content').empty()
$('#content').load(url)

})
})

//função que monitora os nav-links
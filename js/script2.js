$.getJSON('data.json', function(data) {
    let skills = data.skills.graphicdesigner
    let comments = data.comments
    let education = data.about.education
    let work = data.about.work
    console.log(education)
    
    
    $(document).ready(function(){
        $("button").click(function(obj){
            $('#comment').html('');
            var obj = { name: $("#name").val(), email : $("#email").val(), rate : $("#rate").val(), text : $("#value").val()};
            comments.push(obj);
            $.each(comments, function(i, data) {
                $('#comment').append('<div class="col-md-4 "><h2>'+ data.name +'</h2><p style="color: gray;">'+ data.email +'</p><i class="fas fa-star pt-2" style="font-size: 30px;">'+ data.rate +'</i><br><br><p>'+ data.text +'</p></div>')
            });
            
        });
    });

    $.each(education, function(i, data) {
        $('#education').append('<div class="col-sm-3 pb-5 pt-5"><i class="'+ data.icon +'"></i></div><div class="col-sm-9"><h1>'+ data.institution +'</h1><h4>'+ data.start.year +' - '+ data.end.year +'</h4></div>');
    });
    $( "#comingsoon" ).insertAfter( "#content:last-child");

    $.each(skills, function(i, data) {
        $.each(data.imagegd, function(y, image) {
            $('#designimg').append('<div class="col-4"><a href="images/thumbs/'+ image +'" data-lightbox="corel" data-title="'+ image +'"><img src="images/thumbs/'+ image +'" alt=""><div></div></a></div>');
        })
    });

    $.each(skills, function(i, data) {
      $.each(data.imageps, function(y, image) {
          $('#designps').append('<div class="col-4"><a href="images/thumbs/'+ image +'" data-lightbox="photoshop" data-title="'+ image +'"><img src="images/thumbs/'+ image +'" alt=""><div></div></a></div>');
      })
    });
    
    $.each(work, function(i, data) {
      $('#experience').append('<div class="row pb-5"><div class="col-md-6"><h2>'+ data.company +'</h2><h5>'+ data.position +'</h5><h4>'+ data.start.month +' '+ data.start.year +' - '+ data.end.month +' '+ data.end.year +'</h4><a href="'+ data.website +'" target="_blank">website</a></div><div class="col-md-6"><p>Job Description: <br>'+ data.summary +'</p></div></div>')
  });
});

$(document).ready(function(){
    $("nav a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });

    $('#header img').show(1000);
    // OR $('div.toshow').show(2200);
    // OR $('div.toshow').slideDown("slow");
  });

  var imageSources = ["images/profil/gallery2.jpg", "images/profil/gallery3.jpg", "images/profil/gallery1.jpg"]

  var index = 0;
  setInterval (function(){
    if (index === imageSources.length) {
      index = 0;
    }
    document.getElementById("image").src = imageSources[index];
    index++;
  } , 3000);
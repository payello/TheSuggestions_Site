$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '3174001547',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '3174001547.8a995f6.d4e8d922262849f19c3973db6fd00c84',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


userFeed.run();
    
    $('.gallery').magnificPopup({
type: 'image',
delegate: 'a',
gallery:{
enabled:true
  }
});
    
});

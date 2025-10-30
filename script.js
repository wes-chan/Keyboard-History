function navigation() {
    var dots = $('.timeline-nav .dot');

   var sectionIds = [];

   $('.timeline-nav a[href^="#"]').each(function() {
    sectionIds.push($(this).attr('href'));
   });

   $(sectionIds.join(',')).each(function () {
    var section = $(this);
    var id = section.attr('id');

    section.waypoint(function (direction) {
        if (direction === 'down'){
            dots.removeClass('active');
            $('.timeline-nav a[href="#' + id + '"] .dot').addClass('active');
        }
    }, { offset: '25%'});

    section.waypoint(function (direction) {
        if (direction === 'up'){
            dots.removeClass('active');
            $('.timeline-nav a[href="#' + id + '"] .dot').addClass('active');
        }
    }, {offset : '-25%'});
   })
}

function timelineFadeIn(eventSelector) {
    $(eventSelector).each(function() {
        var event = $(this);
        event.waypoint(function (direction){
            if(direction === 'down'){
            event.addClass('animate__animated animate__fadeIn');
            this.destroy();
            }
        }, {offset: '50%'});

    })
}

function explodeKeyboard(){
   
   const keyboard = $('.keyboard');
   const layers = $('.keyboard-layer');
   const size = 150*2;
    $('.keyboard').waypoint(function(direction) {
        if(direction === 'down') {
            
            layers.each(function(index) {
             
                let distance = (index) * 150; 
                
                $(this).css('transform', `translateY(${distance}px)`);
                
            });

            keyboard.css('height', (keyboard.height() + size) + 'px');
        } else {
            
            layers.css('transform', 'translateY(0)');
          
            keyboard.css('height', (keyboard.height() - size) + 'px');
        }
    }, { offset: '10%' });
}


$(document).ready(function() {
   navigation();
   timelineFadeIn('.ibm-event')
   
   explodeKeyboard();
   

   
})




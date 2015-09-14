
$(function () {

    /*
     * Slideshow
     */
    // 對每個有slideshow類別的元素進行處理
    $('.slideshow').each(function () {

        var $slides = $(this).find('img'), // 所有Slide
            slideCount = $slides.length,   // Slide個數
            currentIndex = 0;              // 目前Slide的index
        // 淡入顯示首張Slide
        $slides.eq(currentIndex).fadeIn();

        // 每7500毫秒就執行showNextSlide函數
        setInterval(showNextSlide, 4000);

          // 顯示下一張Slide的函數
        function showNextSlide () {

                        //下張Slide的index
                        //(如果是最後一張Slide，則會到第一張)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 目前的Slide淡出顯示
            $slides.eq(currentIndex).fadeOut();

            // 下一張Slide淡入顯示
            $slides.eq(nextIndex).fadeIn();

               // 更新目前的index
            currentIndex = nextIndex;
        }

    });

    $('.poem').each(function () {

        var $window = $(window), 
            $slide = $('#wowslider-container1'),  
            $poem = $('.poem'); 
        
            slideOffsetTop = $slide.offset().top;

        
        $window.on('scroll', function () {
            
            if ($window.scrollTop() > 600) {
                // $poem.fadeIn('5000');
                $poem.animate({
                    left : '850px',
                    opacity:1
                },1500);
                
             } else {
            
            }
        });
        

    });

    var wid = $('.wd').width;
    $('.wd').hover(
        function(){           
            $(this).stop().animate({ 
                width: '330px',
                // left: '-=2%'
            },500);
                
        }, //fun1
        function(){
            $(this).stop().animate({ 
                width: '300px',
                // left: '+=2%'
            },500);
                
        } //fun2
    ); //end hover


});

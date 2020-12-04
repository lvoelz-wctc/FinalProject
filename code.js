$(document).ready(
    function () {
        // event handlers
        $("#tabs a").click(showTab);
        $("#next").click(nextSlide);
        $("#previous").click(previousSlide);

        var currentImage = 1;
        var totalImages = 4;

        //show the first slide on page load
        $("#image1").slideToggle();

        //scrolls image down, used for previous and next functions
        //Keeps the viewport scrolled to the bottom of the screen
        function scrollDown() {
            $("html, body").animate({scrollTop: $(document).height()}, "slow");
        }

        //-----------------------Next Logic-----------------------------//
        //runs when next button is clicked.
        function nextSlide() {
            //Provides a function call when the slide animation is finished
            $("#image" + currentImage).slideToggle(showNext);
        }

        //jQuery animation to show next question
        function showNext() {
            if (currentImage === totalImages){
                currentImage = 1;
                $("#image" + currentImage).slideToggle(scrollDown);
            }
            else {
                currentImage++;
                //Provides a function to call when the slide animation is finished.
                $("#image" + currentImage).slideToggle(scrollDown);
            }
        }


        //-----------------------"Previous Image" Logic---------------------//

        function previousSlide() {
            $("#image" + currentImage).slideToggle(showPrevious);
        }

        function showPrevious() {
            if (currentImage === 1){
                currentImage = 4;
                $("#image" + currentImage).slideToggle(scrollDown);
            }
            else{
                currentImage--;
                $("#image" + currentImage).slideToggle(scrollDown);
            }
        }


        //----------------------Other Logic-------------------------------//
        //shows tabs
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }
    });
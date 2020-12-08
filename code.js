$(document).ready(
    function () {
        // event handlers
        $("#tabs a").click(showTab);
        $("#next").click(nextSlide);
        $("#previous").click(previousSlide);
        $("#submit_address").click(submitAddress);
        $("#synth_recs_button").click(synthRecs);

        loadImages();

        //---Album Image Array---//
        function loadImages() {
            var imageArray = ['images/eastward.jpg', 'images/forge.jpg', 'images/wired.jpg'];
            var imageCount = 1;

            for (x of imageArray){
                $("#album_"+imageCount).append( $(`<img src="${x}" height="300" width="300"/>`) );
                imageCount++;
            }
        }


        //---Synth Picker Images---//

        //Studio Slide Vars--//
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

        //recommend synth
        function synthRecs(event){
            event.preventDefault();

            var selectedRadioButton_SynthBudget = $("input[name=synth_budget]:checked");
            var synthBudget = selectedRadioButton_SynthBudget.data("userbudget");

            var selectedRadioButton_SynthType = $("input[name=synth_type]:checked");
            var synthType = selectedRadioButton_SynthType.data("usertype");

            if (synthType === "keyboard"){
                if (synthBudget === 1){
                    $("#synthRecText").text("At $499.99, the Roland JD-XI is an excellent option for new synth players on a budget. It features" +
                        " a monophonic analog synth engine as well as a 128-voice digital synth engine. You can build on your basic patches" +
                        "with several different effects including a vocoder, delay, and reverb.");
                    $("#synthRecImage").attr("src", "images/jdxi.jpg");
                }
                else if (synthBudget === 2){

                    $("#synthRecText").text("Ready to move up? Check out the Korg Prologue 16-voice for $1999.99. Korg's latest keyboard synthesizer " +
                        "features an analog synth engine with up to 16 voices, as well as splitting, layering, and crossfading. " +
                        "Each voice offers two analog oscillators, with an extra digital oscillator for frequency modulation" +
                        "and wavetable synthesis.");
                    $("#synthRecImage").attr("src", "images/prologue.jpg");
                }
                else if (synthBudget === 3){
                    $("#synthRecText").text("Professional synthesizer performers can rely on the Moog One to cover all their" +
                        "sound generation and performance needs. At $8,500, Moog's first polyphonic synthesizer in over 30 years features" +
                        "16 tri-timbral analog voices with extensive modulation options. Customize your patches with a variable state" +
                        "filter and Moog's famous ladder filter.");
                    $("#synthRecImage").attr("src", "images/moogone.jpg");
                }
            }
            else if (synthType === "modular"){
                if (synthBudget === 1){
                    $("#synthRecText").text("Looking to enter the world of modular synthesis but not sure where to start? Check" +
                        "out the Behringer Neutron for a flexible but budget-friendly introduction. At only $289.99, this semi-modular" +
                        "desktop unit offers two oscillators and a patch bay with 56 patch points.");
                    $("#synthRecImage").attr("src", "images/neutron.jpg");
                }
                else if (synthBudget === 2){
                    $("#synthRecText").text("The Erica Synths Fusion Drone System offers a powerful modular patching interface for" +
                        "$1789. Each of the primary modules uses vacuum tubes to generate powerful intense, noisy waveforms suited" +
                        "perfectly for aggressive and experimental performance. The Fusion Drone System is fully modular, so when" +
                        "you're ready to try something new you can remove the default modules and replace them as needed.");
                    $("#synthRecImage").attr("src", "images/fusiondrone.jpg");
                }
                else if (synthBudget === 3){
                    $("#synthRecText").text("Discerning modular synths players know the style started with Moog Music. Get back" +
                        "to the masters with the Moog Model 10, a $10,000 near-exact recreation of the first Moog modular system from 1971. The" +
                        "two oscillators, ladder filter, and 907 fixed filter bank will give you the smooth analog sounds that permeated" +
                        "the 70s.");
                    $("#synthRecImage").attr("src", "images/moogmten.jpg");
                }
            }
            else if (synthType === "drum"){
                if (synthBudget === 1){
                    $("#synthRecText").text("At only $399.99, Roland has distilled their legendary drum machine history into the affordable Roland TR-6S" +
                        "Rhythm Performer. The digital sound engine uses Roland's own Analog Circuit Behavior to give a near-perfect" +
                        "rendition of their classic analog drum machine sounds.");
                    $("#synthRecImage").attr("src", "images/tr6s.png");
                }
                else if (synthBudget === 2){
                    $("#synthRecText").text("The Roland TR-8S Rhythm Performer expands on the 6S's capabilities with sample support," +
                        "more patch memory, and more onboard sound design options for each of the audio channels. At $699.99, it's" +
                        "a great way for drum machine performers looking to take their sound to the next level.");
                    $("#synthRecImage").attr("src", "images/tr8s.jpg");
                }
                else if (synthBudget === 3){
                    $("#synthRecText").text("Ready to go all-in on a legendary drum machine? Try hunting down a used Roland TR-808." +
                        "The drum machine that defined house music in the 80s and 90s can still be found on vintage gear exchange sites" +
                        "for devoted performers who are willing to spend some extra time and money. Prices usually range between" +
                        "$5000 and $7000 based on condition.");
                    $("#synthRecImage").attr("src", "images/tr-808.png");
                }
            }
        }

        //shows tabs
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }

        //submit and show address
        function submitAddress(event) {
            event.preventDefault();
            var name = $("#delivery_1").val();
            var address = $("#delivery_2").val();
            var phone = $("#delivery_3").val();
            var email =$("#delivery_4").val();
            $("#user_address").show();
            $("#customer_name").text(name);
            $("#customer_address").text(address);
            $("#customer_phone").text(phone);
            $("#customer_email").text(email);
        }
    });
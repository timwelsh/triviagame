$('document').ready(function() {
    
    //Variable declarations
    var arrayOfQuestions = [];
    var correct = 0;
    var incorrect = 0;
    var timer = 30;
    var counter = 1;
    
    //Trivia Questions/Answers array object

    var triviaQuestions = [
        question1 = {
            question: 'What is the only sea without any coasts?',
            answer: 'Sargasso Sea',
            options: ['Sea of Galilie', 'Sargasso Sea','Mediteranian Sea','Adriatica Sea'],
            answerText: 'The Sargasso Sea is a region in the middle of the North Atlantic Ocean. Surrounded by ocean currents, it is the only sea on Earth which has no coastline. It is bounded on the west by the Gulf Stream; on the north, by the North Atlantic Current; on the east, by the Canary Current; and on the south, by the North Atlantic Equatorial Current.'
        },
        question2 = {
            question: 'What percentage of the River Nile is located in Egypt?',
            answer: '22%',
            options: ['16%', '65%','22%','45%'],
            answerText: 'Although it is generally associated with Egypt, only 22% of the Nile\'s course runs through Egypt.'
        },
        question3 = {
            question: 'What is the driest place on earth?',
            answer: 'McMurdo, Antacricta',
            options: ['Death valley, California', 'Atacama Desert','Kufra Libya','McMurdo, Antacricta'],
            answerText: 'The driest place on Earth: the McMurdo Dry Valleys in Antactica. It hasn\'t rained there for more than 2 million years!'
        },
        question4 = {
            question: 'To visit Machu Picchu what country would you be in?',
            answer: 'Peru',
            options: ['Equidor', 'Peru','Columbia','Brazil'],
            answerText: 'Machu Picchu is a 15th-century Inca citadel located in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred Valley.'
        },
        question5 = {
            question: 'What African country has the most pyramids?',
            answer: 'Sudan',
            options: ['Algeria', 'Egypt','Libya','Sudan'],
            answerText: 'Sudan is home to over 200 pyramids, more than twice that of Egypt.'
        },
        question6 = {
            question: 'What is the oldest city in the world?',
            answer: 'Damascas',
            options: ['Damascus', 'Jericho','Tyre','Bahgdad'],
            answerText: 'Damascus, the capital of Syria, is widely believed to be the oldest continuously inhabited city in the world, with evidence of habitation dating back at least 11,000 years. Its location and persistence have made the city a nexus for civilizations come and gone. Today its metropolitan area is home to about 2.5 million people, and in 2008 it was named the Arab Capital of Culture.'
        },
        question7 = {
            question: 'What city is the capital of Australia?',
            answer: 'Canberra',
            options: ['Canberra', 'Melbourne','Perth','Sydney'],
            answerText: 'After a long and bitter dispute over whether Sydney or Melbourne should be the national capital of Australia, a compromise was reached to build a new capital between the two cities. The project was completed in 1908 when Canberra replaced Melbourne as the capital of Australia. Located approximately 300 kilometers southwest of Sydney and 650 kilometers northeast of Melbourne, Canberra is the largest inland city in Australia.'
        },
        question8 = {
            question: 'What is the smallest independent country on Earth?',
            answer: 'Vatican City',
            options: ['San Marino', 'Nauru','Monaco','Vatican City'],
            answerText: 'With an area of just 0.44 kilometers, Vatican City is the world\'s smallest country. Also known as the Holy See, it fits within the Italian capital city of Rome, and is the center of the Catholic Church.'
        },
        question9 = {
            question: 'What mountain is nicknamed the "Savage Mountain"?',
            answer: 'K2',
            options: ['K2', 'Everest','Matterhorn','Mount Kilimanjaro'],
            answerText: 'K2 is known as the Savage Mountain due to the extreme difficulty of ascent. It has the second-highest fatality rate among the eight thousanders--about one person dies on the mountain for every four who summit.'
        },
        question10 = {
            question: 'What country occupies the southern end of the Arabian Peninsula?',
            answer: 'Yemen',
            options: ['Saudi Arabia', 'Qatar','Oman','Yemen'],
            answerText: 'Yemen occupies the southern end of the Arabian Peninsula. It is bordered by Saudi Arabia to the north, the Red Sea to the west, the Gulf of Aden and Arabian Sea to the south, and Oman to the east and northeast.'
        }
    ];
    
    // button click
    $("#start").on('click', function() {
        console.log("click");
        $(this).hide();
        showQuestion();
        showAnswers();
        // play();
        if (counter < triviaQuestions.length) {
            showQuestion(counter);
            // counter += 1;
            // runTimer();
        } else {
            endTrivia();
        }
    });

    //Start countdown
    function play() {
        intervalId = setInterval(timerCount, 1000);
    }
    function endTrivia() {
        clearInterval(intervalId);
    }

    // show question
    function showQuestion() {
        $("#question").text(triviaQuestions[counter].question);
        answerSelection();
    }

    function showAnswers() {
        $(".answer1").text(triviaQuestions[counter].options[0]);
        $(".answer2").text(triviaQuestions[counter].options[1]);
        $(".answer3").text(triviaQuestions[counter].options[2]);
        $(".answer4").text(triviaQuestions[counter].options[3]);
    }

    function answerSelection() {
        $(".answers").on("click",function(){
            var text= $(this).text();
            if(text === triviaQuestions[counter].answer) {
                correct ++;
                $("#resultArea1").text("Correct!")
                $("#resultArea2").text(triviaQuestions[counter].answerText)
            } else {
                incorrect ++;
                $("#resultArea1").text("Nope! The correct answer is " + triviaQuestions[counter].answer)
                $("#resultArea2").text(triviaQuestions[counter].answerText)
            }
        });
            
    }
});  // Close document ready
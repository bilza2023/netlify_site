Following is a js object that contain a quiz 
const data = [
{id:1 , question : "First Question" , selectedAnswer:0 ,correctAnswer:1, 
explanation : "This is the explanation of the answer to the first question",
    answers : [ 
    {id:1,content:"q1 Answer"},
    {id:2,content:"q1 Second Answer"},
    {id:3,content:"q1 Third Answer"},
    {id:4,content:"q1 Fourth Answer"},
    ]
    },
{id:2 , question : "Second Question" ,selectedAnswer:0 ,correctAnswer:1, 
explanation : "This is the explanation of the answer to the first question", 
    answers : [ 
    {id:1,content:"q2 First Answer"},
    {id:2,content:"q2 Second Answer"},
    {id:3,content:"q2 Third Answer"},
    {id:4,content:"q2 Fourth Answer"},
    ]
    }
];

- This is an array of objects with each object as a question.
- The "question" field contains the content of the question.
- The answers is again an array of objects with with in the question. This contain the options that will be presented to the user. one of the option among these is correct while other are not (just like any quiz test)/
- The "correctAnswer" inside the question object is the number of correct answer inside answers array of object ("correctAnswer" is not zero based rather start at 1).

---------------------------------
Please create quiz test in the same format on the topic of "Interesting Georaphical Facts". THis should have 10-15 interesting questions about world Geography.

Each question should have options inside the answers object with in which one should be correct.
The number of correct answer should be written in "correctAnswer"

The questions can be for example
Which of these 2 coutries are neighbours:
option 1 : Spain and Algeria (correct answer)
option 2 : India and Afghanistan
option 3 : xxx
option 4 :xxx

- correctAnswer :1


--following is an example to follow-ADD MORE QUESTIONS TO THIS ==>
const data = 
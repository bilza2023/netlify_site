Following is json format for quiz test that I am making.


export const QuizJson = {
"title": "The Most Comprehensive Quiz Test",
"saveResponse" : true,
"introText" : "introText introText introText introText introText introText inText introText introText introText ",
"farewellText" : "farewellText farewellText farewellText farewellText farewellText farewellText farewellText farewellText ",
"showIntro" : true,
"showResult" : true,
"userId": "640c60780a87835ced6122af",

  "questions": [
    {
      "content": "How will it look if the question has more text than a simple single line?",
      "id": "6a1ca9f9-f592-4a20-bdc9-0b2e1c90e58a",
      "correctOption"  : "bc32734b-2d87-47cd-98f1-8d0a4786fb08",
      "selectedOption" : null,
      "explanation" : "explanation explanation explanation explanation explanation explanation ",
      "options": [
        {
          "id": "bc32734b-2d87-47cd-98f1-8d0a4786fb08",
          "content": "correct",
        },
        {
          "id": "38781586-0799-4428-8894-4abb074ea48d",
          "content": "option--2",
        },
        {
          "id": "33b0e2f5-e4ba-43f2-9e98-99eed20e0a72",
          "content": "option--3",
        },
        {
          "id": "02df4333-0af5-447c-8ea1-ac39dad4300f",
          "content": "option--4",
        }
      ],

    },
    {
      "content": "This is a more descriptive question with more text to overflow and create moe paragraphs. Also do mention that this is for real stuff and not jokes",
      "id": "d9f7c597-4950-4d4f-9499-de70a8bcbaba",
      "correctOption": "5954af8a-6d7d-4010-b2e6-52f0f895b81c",
      "selectedOption" : null,
      "explanation" : "explanation explanation explanation explanation explanation explanation ",
      "options": [
        {
          "id": "690766a5-c418-4dd4-95ab-ef43e549c6ee",
          "content": "option--1",
        },
        {
          "id": "5954af8a-6d7d-4010-b2e6-52f0f895b81c",
          "content": "correct",
        },
        {
          "id": "b3eb5235-25e1-4cf2-8233-41fc86506c45",
          "content": "option--3",
        },
        {
          "id": "db351619-3168-4f63-969c-53adf4a105ab",
          "content": "option--4",
        }
      ],
    },
     {
      "content": "This is a more descriptive question with more text to overflow and create moe paragraphs. Also do mention that this is for real stuff and not jokes. Also do mention that this is for real stuff and not jokes",
      "id": "6a1ca9f9-f592-4a20-bdc9-0b2e1c90e58a",
      "correctOption"  : "bc32734b-2d87-47cd-98f1-8d0a4786fb08",
      "selectedOption" : null,
      "explanation" : "explanation explanation explanation explanation explanation explanation ",
      "options": [
        {
          "id": "bc32734b-2d87-47cd-98f1-8d0a4786fb08",
          "content": "correct",
        },
        {
          "id": "38781586-0799-4428-8894-4abb074ea48d",
          "content": "jj nhbg  fddd",
        },
        {
          "id": "33b0e2f5-e4ba-43f2-9e98-99eed20e0a72",
          "content": "some great message",
        },
        {
          "id": "02df4333-0af5-447c-8ea1-ac39dad4300f",
          "content": "welcome to hell",
        }
      ],

    }
  ],
}


Explanation:
title = title of the quiz test.

"introText" =  a brief introduction of what this quiz is isAbsolute. 3-4 lines.

questions : it is an array of object with question object inside.

question: each qestion has 
  "content" : the statement of the question.
  options : few 3/4/5 possible answers.
  correctOption is the id of the correct option.
  you have to generate id using uuid4.

PLEASE CREATE ME A QUIZ(in the same format) ABOUT INTERESTING GEOGRAPHICAL FACTS IN THE WORLD. have 5 question 
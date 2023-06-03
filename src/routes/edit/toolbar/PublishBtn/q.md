I have a javascript object called "question" which has "options" array (containing option objects which has option.id) and another array called "correctOptions" . The correctOptions array contain the option.id of all those options in options array which are considered correct by the autheor.

I want to write a function that takes in a question object and go throught the ids stored in correctOptions array and compare them to option.id in options array to ensure that every item in correctOptions array has a corresponding item in options array and no correctOptions item is orphan.
here is the structure of a question object ==>
{
      "id": "a79c4ec4-7733-41f7-90b2-539c39a83b0f",
      "required": false,
      "content": "Question Statement",
      "explanation": "",
      "questionType": "SurveyMCQ",
      "_id": {
        "$oid": "647ab7af89ae037343a5d62b"
      },
      "__t": "SurveyMCQ",
      "multiSelect": true,
      "selectedOptions": [],
      "correctOptions": [
        "2af22ad4-b010-43f4-8fb7-81f07ae29b28",
        "f45e13d7-5542-4beb-b46c-c88e12c0bc66",
        "4baf282b-7eb1-4084-81b6-98040e88b10c"
      ],
      "displayOptions": "bars",
      "options": [
        {
          "id": "4baf282b-7eb1-4084-81b6-98040e88b10c",
          "content": "one"
        },
        {
          "id": "2af22ad4-b010-43f4-8fb7-81f07ae29b28",
          "content": "two"
        }
      ]
}

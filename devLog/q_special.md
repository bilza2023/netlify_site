I am creating a quiz / test automation app. My questions are in the following format. 
You have to generate questions for me in this format about the topic I tell you to.
The questions are MCQs (multiple choice questions).
The multiple choice questions can be multiSelect = false (when only one of the given option is correct) or multiSelect = true when more than one option among the given options is correct (so the student will have to pick more than one option).
There are instructions written on top of each item (as comments) that will tell you how to use this item/field.

const question =  
{
    //use uuid to generate id like this. each question needs to have a unique id
      "id": "6da74cd7-6a89-4c4e-a871-fcf2595d16d5", 
    // This is the statment of the question (the actual question)  
      "content": "2ddd",
    // This is the explanation that we will reveal to the student after the completion of the test immediately, it is an explanation of the answer.  
      "explanation": "",
    // half of the questions generated will be "multiSelect": true and half multiSelect": false 
      "multiSelect": true,

    // This string array just has the list of correct options. These ids must exist in the options array. If the question is multiSelect = false then there can only be one entry in this array.   If the question is multiSelect = true then there will be as many entries in this array as there are correct options in the options array.
      "correctOptions": [
        "28c98ab7-2aec-4f50-84be-a3bfe2ef6d1e",
        "f42658a6-da2d-4e0a-bc16-715b7718d456",
        "116b72de-304a-41e2-b034-bb736ea0d694",
        "666e52ff-ac93-4345-97da-7e76b6d8cbde"
      ],
      //---each question will have options for the student to pick from. if the question has multiSelect = false then there will just be 1 correct option and its id will be written the correctOptions array. however if the question has multiSelect = true then there will multiple correct options here and all of their ids should be in correctOptions array 

      "options": [
        {
        //use uuid here as well
          "id": "28c98ab7-2aec-4f50-84be-a3bfe2ef6d1e",
          "content": "cc",
          "_id": "6480785734e2fcd4cd885392"
        },
        {
          "id": "116b72de-304a-41e2-b034-bb736ea0d694",
          "content": "vv",
          "_id": "6480785734e2fcd4cd885393"
        },
        {
          "id": "f42658a6-da2d-4e0a-bc16-715b7718d456",
          "content": "dd",
          "_id": "6480785734e2fcd4cd885394"
        },
        {
          "id": "666e52ff-ac93-4345-97da-7e76b6d8cbde",
          "content": "44"
        },
        {
          "id": "09a817a3-4e8e-4a6c-8173-c5935974bb6c",
          "content": "55"
        }
      ]
    }
////////////////////////////////////


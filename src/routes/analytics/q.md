
i have a survey object with an array of objects called "questions" . each question has an id.

question {
id : "8005255c-fd18-4601-808d-f30796b72d94",
required :false,
content :"Question Statement"
}

write me a function called getQuestionContent. This func will take the survey object (with questions array of objects) and an id. it will then look inside question to find the question with the given id and return question.content.
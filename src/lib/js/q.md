I am creating a node.js express app with mongodb / mongoose on back end and sveltekit on front end.
i have a mongodb object called "quiz" which further has an array of objects called "questions" . This array has an objects called "question. 

The problem is that there are many types of questions and i want all of them to bestored in this "questions" array of objects. All question types has some fileds common between them and then have unique fields in each question type. how to solve this? 
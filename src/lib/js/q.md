i am report object which has an array of objects called "answers".
The "answers" contain answer objects collection; each question is in following format:
answers
: 
Array(2)
0
: 
content
: 
"Single Select"
correctOptions
: 
['d066f294-db67-4fae-8a03-f59a438d7cf1']
id
: 
"be5acb18-1f54-4b73-9157-14b0a2ddc6d7"
marksObtained
: 
10
multiSelect
: 
false
payload
: 
""
questionId
: 
"761b42c3-78be-4899-8c25-bddf11fc8242"
questionType
: 
"SurveyMCQ"
required
: 
false
selectedOptions
: 
['d066f294-db67-4fae-8a03-f59a438d7cf1']
totalMarks
: 
10

Write me a function (calcGTotal)that takes the report object. it should loop through each report and then loop throught their answers array of objects.

For each report item it should add the following items to the report object
    "examTotalMarks" : this to be the total of all the answer.totalMarks with in this report.  
    "TotalMarksObtained" : this to be the total of all the answer.marksObtained with in this report.  
    "percentage" : (TotalMarksObtained/examTotalMarks)*100

 4-June-2023 The Edit Page

 # Publish Vs Save.
 - Previously the update/save was the only way to save the survey to database and the Publish/Unpublish button would just add the data into quiz/survey object in memory but now :: Publish and Save both save the survey into database using seperate routes.The update/save will always save it with publish = false. Where as the Publish button will save it with publish = true and this happens only after the "checkBeforePub" series of tests are completed.
 - checkBeforePub : They are a series of tests in which we start the errors array empth and at the end after checking everything we see if the errors array contains something or not.
 
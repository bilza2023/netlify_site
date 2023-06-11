I am creating a testing app.

I save my tests in mongodb with a field called "published"

This published field is also an object and contain data if the test is available or not (from the point of view of time).

the published object has 2 important pieces of information to have

  published.startTime and published.endTime

and since both the startTime and endTime can take values in different formats we will also have 2 accompanying varibles set to show their type so that it may be easy to distinguish
these variables are called

published.startTimeType  and
published.startTimeType

published.startTime can have following value
      published.startTime = immediate; (startTimeType:immediate)
      published.startTime =  x Day, y Month, z Year, hour a , monutes b ; (aspecific data and time) (startTimeType:dateTime)
      published.startTime = after x hours and y minutes;(startTimeType:time)

published.endTime can have following value      

    published.endTime = after x hours y minutes (to be counted from start time). so 2hours 30 min will mean to stop it 2.3 hours after start.(endTimeType:time)

    published.endTime =  x Day, y Month, z Year, hour a , monutes b ; (aspecific data and time) (endTimeType:datetime)

    published.endTime = manual (unless stopped)(endTimeType:manual)

Question 1:
  if one has to write a function called isPublished which will just return a true or false value based on published.startTime and published.endTime to decide if the test is available now or not.
  Please write the isPublished function

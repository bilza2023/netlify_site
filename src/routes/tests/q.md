
    write me a javascript object called "ErrorObj" . 
    - this should have an array of objects called "errorMessages".
    - each  "errorMessage" inside this is array of objects will be of the format :
    this.errorMessages = [
         {
            "slug" : "serverError",
            "errorMessage" :  "Some thing went wrong on the server",
            "statusCode" : 404
         },
         {
            "slug" : "dbError",
            "errorMessage" :  "The database has crashed",
            "statusCode" : 500
         }

    ];

    - the second feature should be a method "addErrorMessage". which should take in a "errorMessage" object and just endure that the slug is unique and then add it to the array.

    - the third feature that i need is  a method "getErrorMessage".
      this.getErrorMessage(slug, req,);
      this method should search the errorMessages for slug which is unique and the prepare the response and return the response. i will add more detials in this method later.
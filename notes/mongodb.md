<script>
import Code from '$lib/cmp/Code.svelte';
	import HdgMain from '$lib/cmp/HdgMain.svelte';
	import Hdg2 from '$lib/cmp/Hdg2.svelte';
	import P from '$lib/cmp/P.svelte';
</script>

<h1>MongoDb</h1>


<h2>Important Shell Commands</h2>

<ol>
<li>show db</li>
<li>exit</li>
<li>show collections</li>
<li>db : To exit from any db</li>
<li>We can also add simple variable to a db by (while inside a db) name = "Mike" </li>
<li>help</li>
<li>use dbName : Will move you to the database if exists if not the database is created.</li>
<li>db.books.insertOne( ...json obj) : When we are in a databse (after use dbName) we can refer to that databse as "db". "books" is a collection in this db if not will be created and finally insertOne is a method on books object.</li>

<Code>
bookstore &#x3E; db.books.insertOne( &#x7B; "title" : "Magic Book" , "author" : "Henry Hill" , "pages" : 300 , "rating" : 5 , genres : [ "magic" , "fantacy"]    &#x7D; )
&#x7B;
  acknowledged: true,
  insertedId: ObjectId("6401cf97bb1e7de57cff21d7")
&#x7D;

</Code>

<li>db.books.insertManj( [ array of json objs ] )</li>
<li> db.books.find() : This wil lgive us all the records, in this case all the books.</li>
<li>db.books.find( &#x7B; author : "Mike" &#x7D; )</li>
<li>The second object to find method are the names of the fields that needs to be included. You have to mention &#x7B; author : 1 &#x7D;</li>
<li>We can also send an empty object as first argument of find method.</li>
<li>db.books.findOne( &#x7B; _id : ObjectId("6401cf97bb1e7de57cff21d7")   &#x7D;  )</li>
<li>db.books.find().count() : We can usemethod chaining.</li>
<li>db.books.find().limit( 3 ) : To put limits.</li>
<li>db.books.find().sort( &#x7B; author : 1 &#x7D; ) : Sort takes in field names and with that either 1 or -1.</li>
<li> db.books.find().sort( &#x7B pages : -1  &#x7d )</li>
<li>db.books.find( &#x7B rating :  &#x7B  $gt:7   &#x7d &#x7d)</li>
<li>$gt , $lt , $gte : Greater Than OR Equal , $lte : Less Than OR Equal</li>
<li>We can use multiple filters</li>
<li>OR</li>
<li>$in and $nin : </li>
<li>finding inside Arrays: Exact array Match Vs finding inside an Array.</li>
<li>$all</li>
<li></li>



</ol>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
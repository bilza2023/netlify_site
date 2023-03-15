<script>
/// <reference path="./tailwind.config.js" />
</script>

<br>
<div class="flex items-center bg-red-900 m-4 p-4">
<h1 class="mx-auto  text-white ">Skillzaa.com Interactive Tools for Learners</h1>
</div>

<div class="grid-container">

    <div class="text-white border border-red-100 border-2 m-2 p-6 rounded-md text-xl leading-24">
        <p>My name is Bilal Tariq and I am creator of Skillzaa.com. The main objective of Skillzaa.com is to <b> Provide Interactive Tools for Learning and Education.</b></p>

        <hr class="border border-gray-300 border-opacity-50 my-6">

        
        <p>Some of the tools that you will see shortly on this website are:</p>

    <ul class="list-disc pl-8">
        <li class="mb-2">Interactive Animations.</li>
        <li class="mb-2">Educational Games.</li>
        <li class="mb-2">Presentations.</li>
        <li class="mb-2">Quizzes.</li>
        <li class="mb-2">And much, much more.</li>
    </ul>
        <hr class="border border-gray-300 border-opacity-50 my-6">

        <p>During this journey I will need your help and support.</p>
    </div>

   <div class=" border border-red-100 border-2 m-2 p-2 rounded-md  flex flex-col justify-center items-center">
   <img   src="/images/author.jpg" alt="author pic">
   <p class="p-3 pt-5 pb-5  m-4 mt-6 bg-red-900 rounded-lg">Hobbyist Coder of The Century</p>
   
   </div> 

</div>


<style>
.grid-container {
  display: grid;
    grid-template-columns: 4fr 2fr;
}
@media screen and (max-width: 1000px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  
}
/* 
@media screen and (max-width: 640px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  .grid-container > div:last-child {
    display: none;
  }
} */

</style>
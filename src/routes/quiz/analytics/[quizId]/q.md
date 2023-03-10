<script>

const questions = [
    {
      content: "11111111111111111111111111",
      correctOptionId: "kqa2z9",
      selectedOptionId: null,
      options: [
        { _id: "jud3ng", content: "The content of the option" },
        { _id: "kqa2z9", content: "The content of the option" },
        { _id: "v87hjyxds", content: "The content of the option" },
      ],
    },
    {
      content: "222222222222222222222222222222",
      correctOptionId: "234234df",
      selectedOptionId: null,
      options: [
        { _id: "234234df", content: "The content of the option" },
        { _id: "nht67df4", content: "The content of the option" },
        { _id: "6jkp4", content: "The content of the option" },
      ],
    },
  ];


</script>


{#each questions as question, qIndex}
<div class="questionCard" id={qIndex}>
<h1>{question.content}</h1>
<hr/>
    <ol>
    {#each question.options as option }
        <li>{option.content}</li>
    {/each}
    </ol>
</div>
{/each}


- This is my svelte component. It generates divs (class="questionCard") for each item in the questions array.
- Each div has different id based on id={qIndex}
- please add "next" and "previous" buttons such that at one time just 1 card is visible and others are hidden. 

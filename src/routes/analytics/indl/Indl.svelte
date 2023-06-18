<script>
import NavBtns from "./NavBtns.svelte";
import Details from "./Details.svelte";
import StudentReportHead from "./StudentReportHead.svelte";
export let results;
let count = 0;

function inc(){
    count += 1;
    if (count >= results.length - 1) {
        count = results.length - 1;
    }
}
function dec(){
    count -= 1;
    if (count < 0 ){count = 0;}
}
/////////////////////////////////////////////
</script>

<NavBtns {count} length={results.length} {inc} {dec} />
<br/>
<StudentReportHead result={results[count]} />
<br/>
<Details {count} {results}  />

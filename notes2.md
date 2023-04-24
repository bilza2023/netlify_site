Svelte Store Variables
In summary, use the .set method when you want to set the value of a writable store directly, and use the .update method when you want to update its value based on its current value.

This
let members;
storeMembers.subscribe(value => {
    members = value;
  });

and this are equal
$: members = $storeMembers;


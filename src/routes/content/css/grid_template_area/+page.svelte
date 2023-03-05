<script>
	import P_dark from '$lib/cmp/P_dark.svelte';
	import Code from '$lib/cmp/Code.svelte';
	import HdgMain from '$lib/cmp/HdgMain.svelte';
	import Hdg2 from '$lib/cmp/Hdg2.svelte';
	import P from '$lib/cmp/P.svelte';
</script>

<HdgMain>Grid Template Areas</HdgMain>


<P>One of the easies way to layout a page is by using "grid-template-areas". Following is a simple example of creatign a classic layout using "grid-template-areas".</P>


<Hdg2>HTML Code</Hdg2>

<Code>
&lt;div class="grid_container"&gt;
	&lt;div class="grid_item nav"&gt;Nav&lt;/div&gt;
	&lt;div class="grid_item sidebar"&gt;SideBar&lt;/div&gt;
	&lt;div class="grid_item article"&gt;Main Article&lt;/div&gt;
	&lt;div class="grid_item footer"&gt;Footer&lt;/div&gt;
&lt;/div&gt;
</Code>

<Hdg2>The CSS Code</Hdg2>

<Code>
.grid_container &#123;
	display:grid;
  	grid-template-columns: 2fr 4fr 4fr;
  	grid-template-rows: auto 1fr auto;
	grid-template-areas:	
	 		"nav 	 	nav 	nav "
			"sidebar 	article 	article"
			"sidebar 	footer 	footer";
			
	padding : 4px;
	background-color: pink;

&#125;

.grid_item &#123;
padding: 5px;
margin :5px;
background-color: beige;
color:red;
border: 2px solid black;
&#125;

.nav &#123;	grid-area: nav;	&#125;
.sidebar &#123;	grid-area: sidebar;	&#125;
.article &#123;	
grid-area: article;	
  height: 80vh;
&#125;
.footer &#123;	grid-area: footer;	&#125;
</Code>


<Hdg2>Result</Hdg2>

<img src="/images/grid_template_area_result.png" alt="result image">



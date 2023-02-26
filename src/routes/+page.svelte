<script>
let data;
 import { Carousel, CarouselTransition } from 'flowbite-svelte'
  // ./imageData/+server.js has the following
  export const images = [
  {
    id: 0,
    name: "Cosmic timetraveler",
    imgurl: "/images/001.webp",
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
  {
    id: 1,
    name: "Cristina Gottardi",
    imgurl: "/images/002.webp",
    attribution: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
  },
  {
    id: 2,
    name: "Johannes Plenio",
    imgurl: "/images/003.webp",
    attribution: "johannes-plenio-RwHv7LgeC7s-unsplash.com",
  },
  {
    id: 3,
    name: "Jonatan Pie",
    imgurl: "/images/004.webp",
    attribution: "jonatan-pie-3l3RwQdHRHg-unsplash.com",
  },
  {
    id: 4,
    name: "Mark Harpur",
    imgurl: "/images/005.webp",
    attribution: "mark-harpur-K2s_YE031CA-unsplash",
  },
  {
    id: 5,
    name: "Pietro De Grandi",
    imgurl: "/images/006.webp",
    attribution: "pietro-de-grandi-T7K4aEPoGGk-unsplash",
  },
  {
    id: 6,
    name: "Sergey Pesterev",
    imgurl: "/images/007.webp",
    attribution: "sergey-pesterev-tMvuB9se2uQ-unsplash",
  },
  {
    id: 7,
    name: "Solo travel goals",
    imgurl: "/images/008.webp",
    attribution: "solotravelgoals-7kLufxYoqWk-unsplash",
  },
];

</script>




<div class="max-w-4xl">
  <Carousel {images} />
</div>

<!-- 
<h1>id</h1>
{data.item.id}
<h1>user id</h1>
{data.item.userId}
<h1>Title</h1>
{data.item.title} -->
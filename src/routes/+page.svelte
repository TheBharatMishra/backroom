<script>
	// import './styles.css'
	import {Quotes} from '../vendors/quotes';
	import { onMount } from 'svelte';
	import { createScene } from "./main";
	

	/**
	 * @type {string | null}
	*/
let quoteDone;


	/**
	 * @type {string | null}
	*/
let authorDone;

const WorkQuote =async () => {
	let {quote,author} = await Quotes();
	
	quoteDone= quote;
	authorDone=author;

}

setInterval(() => {
	
	WorkQuote()
}, 4000);
/**
 * @type {HTMLElement | null}
 */
let el;


onMount(() => {
	WorkQuote()
	createScene(el)
  });
</script>

<svelte:head>
	<title>Backr00m</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="w-screen text-green-500 bg-black font-mono">
	<canvas class="absolute bottom-0" bind:this={el}></canvas>
	<div class="font-bold bottom-0 text-5xl p-4 absolute ">__COMING_SOON__</div>
	<div class="flex flex-col justify-center items-center top-0 absolute right-0 p-4">
		<!-- <div id="text-xl absolute left-0">Bharat Mishra</div> -->
		<p class="text-xl ">{quoteDone}</p>
		<p id="text-5xl">~{authorDone}</p>
	</div>
</div>
 

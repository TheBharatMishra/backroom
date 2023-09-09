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

	/**
	 * @type {HTMLElement | null}
	 */
	let el;

	
onMount(() => {
	createScene(el)
	WorkQuote()
  });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="w-screen flex items-center flex-col justify-center ">
	<div class="bg-black text-green-500 flex flex-col justify-center items-center p-5 w-screen ">
		<p class="text-xl font-mono">{quoteDone}</p>
		<p id="text-xl font-mono">~{authorDone}</p>
	</div>
	<canvas class="h-full" bind:this={el}></canvas>
</div>
 

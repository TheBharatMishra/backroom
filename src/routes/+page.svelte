<script>
// import './styles.css'
import Quotes from '../vendors/quotes';
import { onMount } from 'svelte';
import { createScene } from "./main";

	/**
	 * @type {HTMLElement | null}
	 */
let el;
const quoting = Quotes();
console.log(quoting)

  onMount(() => {
    createScene(el)
  });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 on:click={Quotes}><button>Hello {quoting}</button></h1>
<canvas class="h-screen w-screen" bind:this={el}></canvas>
 

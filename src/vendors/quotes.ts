import axios from 'axios';

export const Quotes = async () => {
	const res = await axios.get('https://api.quotable.io/quotes/random');

	const apiRes: any = await res.data[0];
	let quote = apiRes.content;
	let author = apiRes.author;
	console.log(quote);

	return { quote, author };
};

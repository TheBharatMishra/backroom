import axios from 'axios';

export const Quotes = async () => {
	const res = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes/');

	const apiRes: any = await res.data[0];
	let quote = apiRes.quote;
	let author = apiRes.author;
	console.log(quote);

	return { quote, author };
};

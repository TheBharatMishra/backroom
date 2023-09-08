import axios from 'axios';

export default async function Quotes() {
	const res = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes/');
	const data = res.data[0].author;
	// console.log(data);
	return data;
}

import axios from 'axios';
import {URL_CONFIG} from '../../config';
import {IMemeEgineResponse} from '../../types';

class MemeEgine {
	limit = 1;
	queryString = '';
	offset = 0;
	constructor(queryString: string, limit?: number, offset?: number) {
		this.limit = limit;
		this.queryString = queryString;
		this.offset = offset;
	}

	getMeme = async () => {
		const {limit, queryString: q, offset} = this;
		const {data} = await axios.post(
			URL_CONFIG.MEME_EGINE.url,
			{
				limit,
				offset,
				q,
				matches: true,
			},
			{
				headers: {
					[URL_CONFIG.MEME_EGINE.headers[0].name]:
						URL_CONFIG.MEME_EGINE.headers[0].value,
				},
			},
		);
		return data as IMemeEgineResponse;
	};
}

export default MemeEgine;

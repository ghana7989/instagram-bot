import {uploadImage} from './utils';
import MemeEgine from './utils/memegine/getMeme';

const {getMeme} = new MemeEgine('', 1, 0);

(async function () {
	const d = await getMeme();
	const url = d.hits[0].img_srcs[d.hits[0].img_srcs.length - 1].url;
	await uploadImage(url);
})();

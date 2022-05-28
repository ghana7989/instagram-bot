import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import Jimp from 'jimp/es';
import {SECRETS} from '../config/secrets';
import {ICloudinaryImageUploadResponse} from '../types/cloudinary.types';

import {sleep} from './';

cloudinary.config({
	cloud_name: SECRETS.cloud_name,
	api_key: SECRETS.api_key,
	api_secret: SECRETS.api_secret,
});

// get last file with extension when relative folder path is given
const getLastFile = (folderPath: string) => {
	const files = fs.readdirSync(folderPath);
	const lastFile = files.sort().reverse()[0];
	return folderPath + '/' + lastFile;
};

const jpgToPng = async (imageUrl: string) => {
	const image = await Jimp.read(imageUrl);
	try {
		image.write(`temp/meme-${Date.now()}.png`);
	} catch (error) {
		console.log('FAILED TO CONVERT JPG TO PNG: ', error);
	}
};

const uploadImage = async (imageUrl: string) => {
	try {
		await jpgToPng(imageUrl);
		await sleep(500);
		const res: ICloudinaryImageUploadResponse =
			await cloudinary.uploader.upload(getLastFile('temp'), {
				filename_override: `meme-${Date.now()}.png`,
			});
		fs.rmdirSync('temp', {recursive: true});
		return res;
	} catch (error) {
		console.log('FAILED TO UPLOAD IMAGE: ', error);
	}
};

export {uploadImage};

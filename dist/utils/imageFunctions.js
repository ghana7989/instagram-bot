"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
const es_1 = __importDefault(require("jimp/es"));
const secrets_1 = require("../config/secrets");
const _1 = require("./");
cloudinary_1.v2.config({
    cloud_name: secrets_1.SECRETS.cloud_name,
    api_key: secrets_1.SECRETS.api_key,
    api_secret: secrets_1.SECRETS.api_secret,
});
// get last file with extension when relative folder path is given
const getLastFile = (folderPath) => {
    const files = fs_1.default.readdirSync(folderPath);
    const lastFile = files.sort().reverse()[0];
    return folderPath + '/' + lastFile;
};
const jpgToPng = async (imageUrl) => {
    const image = await es_1.default.read(imageUrl);
    try {
        image.write(`temp/meme-${Date.now()}.png`);
    }
    catch (error) {
        console.log('FAILED TO CONVERT JPG TO PNG: ', error);
    }
};
const uploadImage = async (imageUrl) => {
    try {
        await jpgToPng(imageUrl);
        await (0, _1.sleep)(500);
        const res = await cloudinary_1.v2.uploader.upload(getLastFile('temp'), {
            filename_override: `meme-${Date.now()}.png`,
        });
        fs_1.default.rmdirSync('temp', { recursive: true });
        return res;
    }
    catch (error) {
        console.log('FAILED TO UPLOAD IMAGE: ', error);
    }
};
exports.uploadImage = uploadImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VGdW5jdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW1hZ2VGdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkNBQTRDO0FBQzVDLDRDQUFvQjtBQUNwQixpREFBMkI7QUFDM0IsK0NBQTBDO0FBRzFDLHlCQUF5QjtBQUV6QixlQUFVLENBQUMsTUFBTSxDQUFDO0lBQ2pCLFVBQVUsRUFBRSxpQkFBTyxDQUFDLFVBQVU7SUFDOUIsT0FBTyxFQUFFLGlCQUFPLENBQUMsT0FBTztJQUN4QixVQUFVLEVBQUUsaUJBQU8sQ0FBQyxVQUFVO0NBQzlCLENBQUMsQ0FBQztBQUVILGtFQUFrRTtBQUNsRSxNQUFNLFdBQVcsR0FBRyxDQUFDLFVBQWtCLEVBQUUsRUFBRTtJQUMxQyxNQUFNLEtBQUssR0FBRyxZQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxPQUFPLFVBQVUsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHLEtBQUssRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFDM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxZQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLElBQUk7UUFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMzQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNyRDtBQUNGLENBQUMsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLEtBQUssRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFDOUMsSUFBSTtRQUNILE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sSUFBQSxRQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxHQUFHLEdBQ1IsTUFBTSxlQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckQsaUJBQWlCLEVBQUUsUUFBUSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU07U0FDM0MsQ0FBQyxDQUFDO1FBQ0osWUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN4QyxPQUFPLEdBQUcsQ0FBQztLQUNYO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQy9DO0FBQ0YsQ0FBQyxDQUFDO0FBRU0sa0NBQVcifQ==
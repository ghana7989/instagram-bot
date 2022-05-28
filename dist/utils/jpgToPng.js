"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jpgToPng = void 0;
const jimp_1 = __importDefault(require("jimp"));
const jpgToPng = async (imageUrl) => {
    const image = await jimp_1.default.read(imageUrl);
    try {
        image.write(`temp/meme-${Date.now()}.png`);
    }
    catch (error) {
        console.log('FAILED TO CONVERT JPG TO PNG: ', error);
    }
};
exports.jpgToPng = jpgToPng;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianBnVG9QbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvanBnVG9QbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXdCO0FBRXhCLE1BQU0sUUFBUSxHQUFHLEtBQUssRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFDM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLElBQUk7UUFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMzQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNyRDtBQUNGLENBQUMsQ0FBQztBQUVNLDRCQUFRIn0=
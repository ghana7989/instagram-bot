"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const getMeme_1 = __importDefault(require("./utils/memegine/getMeme"));
const { getMeme } = new getMeme_1.default('', 1, 0);
(async function () {
    const d = await getMeme();
    const url = d.hits[0].img_srcs[d.hits[0].img_srcs.length - 1].url;
    await (0, utils_1.uploadImage)(url);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsdUVBQWlEO0FBRWpELE1BQU0sRUFBQyxPQUFPLEVBQUMsR0FBRyxJQUFJLGlCQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUxQyxDQUFDLEtBQUs7SUFDTCxNQUFNLENBQUMsR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO0lBQzFCLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDbEUsTUFBTSxJQUFBLG1CQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9
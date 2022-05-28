"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config");
class MemeEgine {
    constructor(queryString, limit, offset) {
        this.limit = 1;
        this.queryString = '';
        this.offset = 0;
        this.getMeme = async () => {
            const { limit, queryString: q, offset } = this;
            const { data } = await axios_1.default.post(config_1.URL_CONFIG.MEME_EGINE.url, {
                limit,
                offset,
                q,
                matches: true,
            }, {
                headers: {
                    [config_1.URL_CONFIG.MEME_EGINE.headers[0].name]: config_1.URL_CONFIG.MEME_EGINE.headers[0].value,
                },
            });
            return data;
        };
        this.limit = limit;
        this.queryString = queryString;
        this.offset = offset;
    }
}
exports.default = MemeEgine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9tZW1lZ2luZS9nZXRNZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLHlDQUF3QztBQUd4QyxNQUFNLFNBQVM7SUFJZCxZQUFZLFdBQW1CLEVBQUUsS0FBYyxFQUFFLE1BQWU7UUFIaEUsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFPWCxZQUFPLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDcEIsTUFBTSxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBQyxHQUFHLElBQUksQ0FBQztZQUM3QyxNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUM5QixtQkFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQ3pCO2dCQUNDLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixDQUFDO2dCQUNELE9BQU8sRUFBRSxJQUFJO2FBQ2IsRUFDRDtnQkFDQyxPQUFPLEVBQUU7b0JBQ1IsQ0FBQyxtQkFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ3RDLG1CQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO2lCQUN2QzthQUNELENBQ0QsQ0FBQztZQUNGLE9BQU8sSUFBMEIsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUF2QkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztDQXFCRDtBQUVELGtCQUFlLFNBQVMsQ0FBQyJ9
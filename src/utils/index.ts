export * from './memegine';
export * from './imageFunctions';
export function sleep(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

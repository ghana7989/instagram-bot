export interface IMemeEgineResponse {
	hits: Hit[];
	offset: number;
	limit: number;
	nbHits: number;
	exhaustiveNbHits: boolean;
	processingTimeMs: number;
	query: string;
}

export interface Hit {
	id: string;
	sub: string;
	created_at: number;
	score: number;
	original_url: string;
	author: string;
	title: string;
	annotation_text: string;
	img_annotation: ImgAnnotation;
	img_srcs: ImgSrc[];
	_matchesInfo: MatchesInfo;
}

export interface ImgAnnotation {
	annotations: Annotation[];
	height: number;
	width: number;
}

export interface Annotation {
	b: B[];
	e: number;
	s: number;
	w: string;
}

export interface B {
	x: number;
	y: number;
}

export interface ImgSrc {
	h: number;
	url: string;
	w: number;
}

export interface MatchesInfo {}

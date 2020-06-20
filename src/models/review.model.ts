export class Review {
    static idReviewer: number = 0;
    id: number = ++Review.idReviewer;
    
    constructor (
        public text: string,
        public pic: string,
        public reviewer: string,
        ){}
}

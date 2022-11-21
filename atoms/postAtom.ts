export type Post = {
    id           : number;
    desc         : string;
    photo        : string;
    date         : string;
    userId       : number;
    like         : number;
    comment      : number;
    profileImage : string;
    imageUrl?    : string;
}
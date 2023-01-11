import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface CommunityData {
    id              : string ;
    createdAt?      : Timestamp ;
    creatorId       : string ;
    numberOfMembers : number ;
    privacyType     : 'public' | 'private' | 'close' ;
    imageUrl?       : string ;
}
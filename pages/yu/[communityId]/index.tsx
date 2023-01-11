import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react"
import { CommunityData } from "../../../atoms/communityAtom";
import { firestore } from "../../../FIREBASE/Client";
import safeJsonStringify from "safe-json-stringify";

type communityDataProps = {
    communityData: CommunityData,
}

const communityPage:React.FC<communityDataProps> = ({ communityData }) => {
    console.log("here",communityData);
    if(!communityData) {
        return <div>ページが見つかりません</div>
    }

    return <div>ようこそ！ {communityData.id}</div>
};

export async function getServerSideProps(context:GetServerSidePropsContext) {
        try {
            const communityDocRef = doc(
                firestore,
                "communities",
                context.query.communityId as string
            );
            const communityDoc = await getDoc(communityDocRef);

            return {
                props: {
                    communityData: communityDoc.exists() ? JSON.parse(safeJsonStringify({ id: communityDoc.id, ...communityDoc.data()} )) : "",
                },
            };

        } catch (error) {

            console.log("getServerSideError",error);

    }
}
    
export default communityPage

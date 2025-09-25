import {
    collection,
    getDocs,
    getFirestore,
    QueryDocumentSnapshot,
} from "firebase/firestore";
import getApp from "./getApp";

async function getCollection<T>(collectionId: string): Promise<T[]> {
    try {
        const app = getApp();
        const db = getFirestore(app);
        const snapshot = await getDocs(collection(db, collectionId));
        console.log(snapshot.docs);
        const data: T[] = snapshot.docs.map(
            (doc: QueryDocumentSnapshot) => doc.data() as T
        );
        console.log("success");
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default getCollection;

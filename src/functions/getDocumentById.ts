import { doc, getDoc, getFirestore } from "firebase/firestore";
import getApp from "./getApp";

async function getDocumentById<T>(
    collectionId: string,
    documentId: string
): Promise<T | null> {
    try {
        const app = getApp();
        const db = getFirestore(app);
        const docRef = doc(db, collectionId, documentId);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
            return snapshot.data() as T;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export default getDocumentById;

import { db } from "../Configuration/Firbase.config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { ProductEntity } from "../lib/Firebase.entities";

export const getAllProducts = async () => {

    const q = query(collection(db, ProductEntity));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            return change.doc.data()
            // if (change.type === "added") {
            //     console.log("Products: ", change.doc.data());
            //     const data = change.doc.data();
            //     return Object.values(data);
            // }
            // if (change.type === "modified") {
            //     console.log("Modified city: ", change.doc.data());
            // }
            // if (change.type === "removed") {
            //     console.log("Removed city: ", change.doc.data());
            // }
        });
    });
}
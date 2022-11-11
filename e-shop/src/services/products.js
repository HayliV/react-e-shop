import {
    collection,
    getDoc,
    getDocs,
    doc,
    updateDoc,
    runTransaction,
} from "firebase/firestore";
import db from "../config/firebase";

export const getProducts = async () => {
    const collectionRef = collection(db, "ceramics");

    const querySnapshot = await getDocs(collectionRef);

    const cleanedData = querySnapshot.docs.map((rawDocument) => {
        const id = rawDocument.id;
        const restofData = rawDocument.data();
        return { id, ...restofData };
    });

    return cleanedData;
};

export const getFeatured = async () => {
    const collectionRef = collection(db, "featured");
    const querySnapshot = await getDocs(collectionRef);

    const cleanedData = querySnapshot.docs.map((rawDocument) => {
        const id = rawDocument.id;
        const restofData = rawDocument.data();
        return { id, ...restofData };
    });

    return cleanedData;
};

export const getProductById = async (id) => {
    const docRef = doc(db, "ceramics", id);
    const querySnapshot = await getDoc(docRef);
    if (!querySnapshot.exists()) {
        throw new Error("Product cannot be found");
    }

    return { id: querySnapshot.id, ...querySnapshot.data() };
};

export const favouriteProduct = async (id) => {
    const favouritedProduct = await getProductById(id);
    console.log(favouriteProduct);
    const favouritedRef = doc(db, "ceramics", id);

    if (!favouritedProduct.favourited) {
        await updateDoc(favouritedRef, {
            favourited: true,
        });
    } else {
        await updateDoc(favouritedRef, {
            favourited: false,
        });
    }

    console.log(favouritedRef);

    // try {
    //     const collectionRef = collection(db, "ceramics");
    //     const querySnapshot = await getDocs(collectionRef);

    //     await runTransaction(db, async (transaction) => {
    //         const favouritedDoc = await transaction.get(collectionRef);
    //         if (!favouritedDoc.exists()) {
    //             throw "Document does not exist";
    //         }
    //         const isFavourited = !favouritedDoc.data().favourited;
    //         transaction.update(collectionRef, { favourited: isFavourited });
    //     });
    // } catch (e) {
    //     console.log("Transaction failed: ", e);
    // }

    // const favouritedRef = doc(db, "ceramics", "favourited");

    // await updateDoc(favouritedRef, {
    //     favourited: true,
    // });
    // console.log(favouritedRef);
};

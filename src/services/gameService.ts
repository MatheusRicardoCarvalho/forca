import { addDoc, collection, getFirestore, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { firebase } from './firebase';

const db = getFirestore(firebase);

export async function registerGame(score: number, userEmail: string) {
  try {
    const gameData = {
      createdAt: new Date(),
      score,
      userEmail
    };
    const docRef = await addDoc(collection(db, 'games'), gameData);
    console.log("Jogo registrado com ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Erro ao registrar o jogo: ", e);
    throw e;
  }
}

export async function getTopScores() {
  try {
    const q = query(collection(db, 'games'), orderBy('score', 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Erro ao buscar as pontuações: ", e);
    throw e;
  }
}

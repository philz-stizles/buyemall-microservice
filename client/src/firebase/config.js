// yarn install firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// App's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBz3bsNmPC5gTVKY2plQ5I6vBk9effuFq8',
  authDomain: 'vue-cloud-service.firebaseapp.com',
  projectId: 'vue-cloud-service',
  storageBucket: 'vue-cloud-service.appspot.com',
  messagingSenderId: '479833853715',
  appId: '1:479833853715:web:55a001ab14d893269cd4e6',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Firebase auth
const auth = firebase.auth()

// Initialize Firestore DB
const firestore = firebase.firestore()

// Initialize Firestore DB
const database = firebase.database()

// Returns a sentinel used with set() or update() to include
// a server-generated timestamp in the written data.
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// Collection references
// - Ecommerce
const usersCollection = firestore.collection('users')
const categoryCollection = firestore.collection('categories')
const subCategoryCollection = firestore.collection('subCategories')
const productCollection = firestore.collection('products')
const couponCollection = firestore.collection('coupons')
const cartCollection = firestore.collection('cart')
const orderCollection = firestore.collection('orders')

// export utils/refs
export {
  firestore,
  database,
  auth,
  timestamp,
  // - Ecommerce collections
  categoryCollection,
  subCategoryCollection,
  productCollection,
  couponCollection,
  cartCollection,
  orderCollection,
}

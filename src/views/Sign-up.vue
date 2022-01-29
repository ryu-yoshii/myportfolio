<template lang="ja">
<div>
    <div id="sign-up-wrapper">
    <header id="header">
        <h1 id="title">
        Learning  records
        </h1>
        <ul id="header-list">
            <li><router-link to="/home">mypage</router-link></li>
            <li><router-link to="/graph">graph</router-link></li>
            <li><router-link to="/">logaut</router-link></li>
        </ul>
    </header>
        <div id="sign-up">
        <h2 class="sign-up-title">新規登録</h2>
        <form class="mail-form form">
            <label for="email">メールアドレス</label>
            <input type="email" id="email" v-model="emailAddress">
        </form>
        <form class="pass-form form">
            <label for="password">パスワード</label>
            <input type="password"  id="password" v-model="password">
        </form>
        <button id="sign-up-btn" @click="signUp">登録</button>
        </div>
    </div> 
    <footer>
    <p>
        <small>&copy;2021</small>
    </p>
    </footer>
</div>
</template> 
<script>
import { getFirestore } from "firebase/firestore";
const db = getFirestore();
const auth = getAuth()
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export default {
    data () {
        return {
            emailAddress: '',
            password: '',
        }
    },
    methods: {
        signUp() {
            createUserWithEmailAndPassword(auth, this.emailAddress, this.password)
            .then(
                (userCredential) => {
                    const user = userCredential.user;
                    return user;
            })
            .then(
                () => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        const uid = user.uid;
                        user = uid;
                        this.$store.commit("onUserStatusChanged",user)
                        console.log(this.$store.state.isSignIn)
                        return user;
                    } else {
                        // User is signed out
                    }
                });
            })
            .then(
                () => {
                    let user = this.$store.state.isSignIn;
                    setDoc(doc(db, "users", user), {
                    name:user
                    // name:'テスト'
                    });
                    console.log(user);
                    this.$router.push("/Home");
                })
            .catch((error) => {
                alert(error.message)
                console.error("登録失敗")
            })
        }
    }
}

// .then(
            //     () => {
            //         const uid = user.uid;
            //         user = uid;
            //         this.$store.commit("onAuthStateChanged",user)
            //          // データの追加
            //         let id = this.$store.getters.user;
            //         console.log(id);
            //         setDoc(doc(db, "users", id), {
            //         user: id
            //         });
            //         this.$router.push("/Home");
            // })


            // .then(
            //     (userCredential) => {
            //     const user = userCredential.user;
            //     const uid = user.uid;
            //     user = uid;
            //     this.$store.commit("onAuthStateChanged",user)
            //         // データの追加
            //     let id = this.$store.getters.user;
            //     console.log(id);
            //     setDoc(doc(db, "users", id), {
            //     user: id
            //     });
            //     this.$router.push("/Home");
            // })

            // .then(
            //     (user) => {
            //         console.log(user);
            //         setDoc(doc(db, "users", user), {
            //         user: user
            //         });
            //         this.$router.push("/Home");
            //     })
</script>
<style lang="">

</style>

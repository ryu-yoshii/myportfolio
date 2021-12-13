<template lang="ja">
<div>
    <div id="sign-up-wrapper">
    <header id="header">
        <h1 id="title">
        Learning  records
        </h1>
        <ul id="header-list">
            <li><router-link to="/Home">mypage</router-link></li>
            <li><router-link to="/graph">graph</router-link></li>
            <li><router-link to="/">logout</router-link></li>
        </ul>
    </header>
        <div id="sign-up">
        <h2 class="sign-up-title">ログイン</h2>
        <form class="mail-form form">
            <label for="email">メールアドレス</label>
            <input type="email" id="email" v-model="emailAddress">
        </form>
        <form class="pass-form form">
            <label for="password">パスワード</label>
            <input type="password"  id="password" v-model="password">
        </form>
        <button id="sign-up-btn" @click="Login">ログイン</button>
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default {
    data () {
        return {
            emailAddress: '',
            password: '',
        }
    },
    methods: {
        Login () {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.emailAddress, this.password)
            .then(
                () => {
                    // Signed in
                    // const user = userCredential.user;
                    // ...
                    // console.log(user)
                    console.log("ログイン成功")
                    this.$router.push("/Home");
                })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(error)
                console.log("ログイン失敗")
            });
        }
    }
}
</script>
<style lang="">

</style>
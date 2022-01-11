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
        <button id="sign-up-btn" @click="SignUp">登録</button>
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
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import { initializeApp } from "firebase/app";
export default {
    data () {
        return {
            emailAddress: '',
            password: '',
        }
    },
    methods: {
    SignUp () {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, this.emailAddress, this.password)
        .then(
            () => {
            // console.log(userCredential)
            // console.log('user created')
            this.$router.push("/Home");
            
        })
        .catch((error) => {
            alert(error.message)
            console.error("ログイン失敗")
        })
    }
    }
}
</script>
<style lang="">

</style>
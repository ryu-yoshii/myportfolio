<template lang="ja">
<div>
    <div id="sign-up-wrapper">
    <header id="header">
        <h1 id="title">
        Learning  records
        </h1>
        <ul id="header-list">
            <li><router-link to="/">login</router-link></li>
            <li><router-link to="/Post">post</router-link></li>
            <li><router-link to="/graph">graph</router-link></li>
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
            (userCredential) => {
                console.log(userCredential)
            console.log('user created')
        })
        .catch((error) => {
            alert(error.message)
            console.error(error)
        })
    }
    }
}
</script>
<style lang="">

</style>
<template lang="ja">
<div>
    <div id="post-wrapper">
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
        <section class="result">
            <h2 class="result-title">学習の成果</h2>
            <div class="comment">
                <h3 class="comment-title">本日の学習コメント</h3>
                <textarea v-model="posted_text" placeholder="ここに記入"></textarea>
            </div>
            <div class="result-box">
                <div class="study-hours">
                    <h3 class="study-hours-title">学習時間</h3>
                        <select v-model="selected">
                            <option v-for="hour in hours" :key="hour.hour_id">{{hour}}時間</option>
                        </select>
                </div>
                
                    <button class="post-btn" v-on:click="post">投稿する</button>
                    <div class="post-result">{{posted}}</div>
                    <button class="tweet-btn" v-on:click="tweet">ツイートする</button>
            </div>
        </section>
        <section class="past">
            <h2 class="past-title">過去の投稿</h2>
            <ul class="log-list">
                <li v-for="post in posts">
                    {{ post.text }}{{ post.hour }}{{post.time}}
                </li>
            </ul>
        </section>
    </div>
    <footer>
        <p>
            <small>&copy;2021</small>
        </p>
    </footer>
</div>
</template>
<script>
const db = getFirestore();
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
    data() {
        return {
            selected:"",
            hours:[1,2,3,4,5,6,7,8,9,10],
            posted:"",
            posts:[],
            posted_text:"",
            hour:"",
        };
    },
    async created(){
        console.log("ここまでは処理が走っている");
        const auth = getAuth();
        console.log(auth);
        onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    user = uid;
                    console.log(uid);
                    this.$store.commit("onUserStatusChanged",user);
                    console.log(this.$store.state.isSignIn);
                    return user;
                } else {
                    // User is signed out
                }
            });
        console.log('created'); //createdが動いているか確認
        let userid = this.$store.state.isSignIn;  //stateからログイン情報を取得
        console.log(userid);
        //コレクションのすべてのドキュメントを取得する(https://firebase.google.com/docs/firestore/query-data/get-data#get_all_documents_in_a_collection)
        const querySnapshot = await getDocs(collection(db, "users", userid, "post"));  
        querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data().post.time); 
        this.posts.push(doc.data().post);
        // console.log(doc);
        });
    },
    methods:{
        post: async function(){
            this.posted = "投稿しました"
            let date = new Date();  //new演算子でオブジェクトのインスタンスを生成
            //現在時刻の取得 
            this.now = date.getFullYear() + "年"
            + (Number(date.getMonth()) + 1) + "月" +
            date.getDate() + "日" 
            +date.getHours() + "時"
            +date.getMinutes() + "分";
            // post_objectオブジェクトの生成
            const  post_object = {
                text:this.posted_text,
                hour:this.now,
                time:this.selected
            }
            this.posts.push(post_object);
            // データの追加
            let userid = this.$store.state.isSignIn;
            let post = post_object;
            const docRef = await addDoc(collection(db, 'users', userid,"post"), {
            post: post
            });
            console.log("Document written with ID: ", docRef.id);
        },
        tweet: function(){
            this.posted = "ツイートしました"
            console.log("テスト３");
        },
    },
    
}
</script>
<style lang="">

</style>
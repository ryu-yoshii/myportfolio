<template lang="ja">
<div>
    <div id="post-wrapper">
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
export default {
    data() {
        return {
            selected:"",
            hours:[1,2,3,4,5,6,7,8,9,10],
            posted:"",
            posts:[],
            posted_text:"",
            hour:""
        };
    },
    methods:{
        post: function(){
            this.posted = "投稿しました"
            let date = new Date();  //new演算子でオブジェクトのインスタンスを生成
            //現在時刻の取得 **ここからはjavascript**
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
            this.posts.push(post_object)
            
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
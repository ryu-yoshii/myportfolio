
<template lang="ja">
<div>
  <div id="login-wrapper">
    <header id="header">
        <h1 id="title">
        Learning  records
        </h1>
        <ul id="header-list">
            <li><router-link to="/Home">mypage</router-link></li>
            <li><router-link to="/graph">graph</router-link></li>
            <li><router-link to="/Login">logout</router-link></li>
        </ul>
    </header>
    <div class="login-content">
        <ul id="login-btn-box">
            <li id="login-btn"><router-link to="/Login">Login</router-link></li>
            <li id="login-btn"><router-link to="/Sign-up">sign up</router-link></li>
        </ul>
    </div>
    <footer>
      <p>
        <small>&copy;2021</small>
      </p>
    </footer>
  </div>  
</div>
</template> 
<script>
export default {

}
</script>
<style lang="ja">
    
</style>
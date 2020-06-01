<template>
  <div id="app">
    <b-navbar fixed-top type="is-success" shadow> 
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/api_logo.png" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/view-api' }">View APIs</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/view-projects' }">View Projects</b-navbar-item>
        <b-navbar-dropdown label="Create">
          <b-navbar-item tag="router-link" :to="{ path: '/create-api' }">API</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/create-project' }">Project</b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown label="Info">
          <b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>          
          <b-navbar-item tag="router-link" :to="{ path: '/contact' }">Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary" @click="$router.push('register')">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" @click="logout">Log out</a>
            <a class="button is-light" @click="$router.push('Login')">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import router from './router'
export default {
  data(){
    return {
      isLoggedIn: false
    }
  },
  methods :{
    logout(){
      this.$session.destroy()
      router.push('/login')
    }
  },
  watch: {
    isLoggedIn: function() {
      this.$session.start();
      if (this.$session.has("token")) {
        this.isLoggedIn = true
      }
    },
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: aqua;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#content{
  margin: 30px 20px;
}
</style>

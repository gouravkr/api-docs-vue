<template>
  <div id="app">
    <div class="column is-one-third is-offset-one-third has-shadow">
      <p class="title">Login</p>
      <b-field label="Username" label-position="labelPosition"> 
        <b-input type="text" v-model="credentials.username"></b-input>
      </b-field>
      <b-field label="Password" label-position="labelPosition">
        <b-input type="password" password-reveal v-model="credentials.password"></b-input>
      </b-field>
      <b-button type="is-primary" @click="login">Login</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  name: 'Login',
  data(){
    return{
      labelPosition: 'on-border',
      credentials:{
        username: '',
        password: '',
      },
      valid: true,
      loading: false,
      apiURL: process.env.VUE_APP_APIURL
    }
  },

  methods:{
    login(){
      if (this.validate()) {
        console.log(this.apiURL)
        this.loading = true;
        axios.post(this.apiURL+'/auth/', this.credentials)
          .then(res => {
            this.$session.start();
            this.$session.set('token', res.data.token);
            router.push('/create-api');
          }).catch(e => {
            this.loading = false;
            console.log(e)
            alert({
              type: 'warning',
              title: 'Error',
              text: 'Wrong username or password',
              showConfirmButton:false,
              showCloseButton:false,
              timer:3000
          })
        })
      }
    },
    validate(){
      return true
    }
  }
}
</script>

<style scoped>
.has-border {
  border: 1px solid gray;
  border-radius: 3px;
}
.has-shadow {
  box-shadow: 1px 1px 10px #ccc;
}
</style>
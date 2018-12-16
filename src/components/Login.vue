<template>
  <div class="login">
    <div class="row">
        <div class="input-field col s12">
            <center>
                <h5>
                    Authentication
                </h5>
            </center>
            <hr>
        </div>
        <div class="input-field col s12">
            <input id="email" type="email" v-model="email">
            <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
            <input id="password" type="password" v-model="password">
            <label for="password">Password</label>
        </div>
        <div class="input-field col s12">
            <a class="waves-effect waves-light btn" @click="login()">Login</a>
        </div>
        <div class="input-field col s12">
            <a href="#">
                Create an account.
            </a>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'
export default {
  name: 'login',
  data: () => {
      return {
          email:'',
          password:''
      }
  },
  methods: {
      login: function (){
        firebase.singWithEmailAndPassword(this.email, this.password)
            .catch( (error) => {
                console.log(error)
            })
        console.log('Logged')
      }
  }
}
</script>

<style scoped>
    .login{
        width: 300px;
        margin: auto auto;
    }
</style>

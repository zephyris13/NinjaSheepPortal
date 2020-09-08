<template>
  <div id="login">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <div class="logobanner">
      Ninja Sheep Productions
    </div>
    <section>
      <div class="col1">
        <a href="#">
          <img alt="Sign in with Google" src="../assets/img/google.png" width="250" height="50">
        </a>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Login</h1>
          <div>
            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="text" placeholder="fancy@email.com" id="email1" />
          </div>
          <div>
            <label for="password1">Password</label>
            <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
          </div>
          <button @click="login()" class="button">Log In</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Forgot Password</a>
            <a @click="toggleForm()">Create an Account</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Get Started</h1>
          <div>
            <label for="name">Name</label>
            <input v-model.trim="signupForm.name" type="text" placeholder="Fancy Name" id="name" />
          </div>
          <div>
            <label for="email2">Email</label>
            <input v-model.trim="signupForm.email" type="text" placeholder="fancy@email.com" id="email2" />
          </div>
          <div>
            <label for="password2">Password</label>
            <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />
          </div>
          <button @click="signup()" class="button">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm()">Back to Log In</a>
          </div>
        </form>
      </div>
    </section>
    <div class="footer">
      <section>
        <div>
          <a href="https://discord.gg/sTmHTSZ">
            <img alt="Discord" src="../assets/img/discord.png" width="250" height="70">
          </a>
        </div>
      </section>
      <section>
        <div id="copyright">
          <h4>© {{getCurrYear()}} Ninja Sheep Productions.  All rights reserved.</h4>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PasswordReset from '@/components/PasswordReset'

export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
      showPasswordReset: false
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
      })
    },
    getCurrYear() {
      return new Date().getUTCFullYear();
    }
  }
}
</script>

<template>
  <b-container class="login p-2">
    <div>
      <header class="page-header">
        <h1>{{ $t('login.log_in_to_your_account') }}</h1>
      </header>
      <div class="page-content">
        <div class="login-form login-form-mt">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-row>
              <b-col md="6" xm="12">
                <b-form-group id="input-group-1" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Email"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6" xm="12">
                <b-form-group id="input-group-2" label-for="input-2">
                  <b-input-group>
                    <b-form-input
                      :type="password_hidden?'password':'text'"
                      id="input-2"
                      v-model="form.password"
                      required
                      placeholder="Password"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button variant="primary" @click="password_hidden = !password_hidden">Show</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button type="submit" variant="danger" class="submit-login">
             <span class="text-capitalize">{{$t('login.sign_in')}}</span>
            </b-button>
          </b-form>
        </div>
        <hr>
        <b-row>
          <b-col cols="6">
            <router-link :to="$i18nRoute({ name: 'register'})">
              {{$t('login.no_account')}} {{$t('login.create_one_here')}}
            </router-link>
          </b-col>
          <b-col cols="6">
            <router-link :to="$i18nRoute({ name: 'password-recovery'})">
              {{$t('login.forgot_your_password')}}
            </router-link>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true,
      password_hidden: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$store.dispatch('login', this.form)
      this.$router.push('home')
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  .page-content {
    padding-top: 40px;
    padding-bottom: 30px;
    .login-form-mt {
      margin-left: auto;
      margin-right: auto;
      float: none;
      width: 92%;
      .submit-login {
        float: right;
      }
    }
    hr {
      margin-top: 50px;
    }
    a {
      font-weight: 500;
      color: #303030;
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
      font-size: 15px;
    }
  }
}
</style>

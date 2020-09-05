<template>
  <b-container class="password-recovery p-2">
    <header class="page-header">
      <h1>{{$t('password_recovery.title')}}</h1>
    </header>
    <section id="content" class="page-content">
      <b-form @submit="onSubmit" @reset="onReset" class="forgot-password">
        <ul class="ps-alert-error">
        </ul>
        <header>
          <p class="send-renew-password-link">{{$t('password_recovery.description')}}</p>
        </header>
        <section class="form-fields">
            <b-col md="5" class="email">
              <b-form-input v-model="form.email" type="email" name="email" :placeholder="$t('placeholder.email')" value="" required=""></b-form-input>
            </b-col>
            <b-button variant="primary" class="d-none d-md-block" name="submit" type="submit">
              {{$t('password_recovery.send_link')}}
            </b-button>
            <b-button variant="primary" class="d-block d-md-none" name="submit" type="submit">
              {{$t('password_recovery.send')}}
            </b-button>
        </section>
      </b-form>
      <router-link :to="$i18nRoute({ name: 'register'})" class="account-link">
        <b-icon icon="chevron-left"></b-icon>
        <span>{{$t('password_recovery.back_to_login')}}</span>
      </router-link>
    </section>
  </b-container>
</template>

<script>
export default {
  name: 'password-recovery',
  data () {
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      alert(this.form.email)
    },
    onReset (e) {
      e.preventDefault()
    }
  }
}
</script>
<style lang="scss" scoped>
  .page-content {
    padding-top: 40px;
    padding-bottom: 30px;
    box-shadow: none;
    border: none;
    text-align: left;
    .forgot-password {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border: 0;
      border-bottom: 1px solid rgba(0,0,0,.1);
      padding: 4px;
    }
    .form-fields {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      .btn-primary {
        background: #B2162C 0% 0% no-repeat padding-box;
        border: none;
      }
      input {
        height: 50px;
      }
    }
    .email {
      padding-left: 0;
      padding-right: 0;
      width: 430px;
      float: left;
    }
    .send-renew-password-link {
        padding-left: 10px;
        padding-right: 10px;
        font-size: .9375rem;
        color: #7a7a7a;
        font-weight: 400;
    }
    .account-link {
      font-weight: 500;
      color: #303030;
      transition: all .3s ease;
      font-size: 14px;
    }
  }

</style>

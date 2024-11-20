<template>
  <div id="login-form">
    <form>  
      <div class="form-group w-75 p-2">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="email"
        :class="v$.email.$error === true ? 'text-fields-error' : 'text-fields'"
        placeholder="Enter email"
      />
      <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }} </span>
      <span v-if="this.emailError">{{ this.emailError }}</span>
    </div>

    <div class="form-group w-75 p-2">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
      />
      <span v-if="v$.password.$error"
        >{{ v$.password.$errors[0].$message }}
      </span>
      <span v-if="this.passwordError"> {{ this.passwordError }}</span>
    </div>

    <div class="form-group d-flex flex-row justify-content-center w-75 p-4">
      <input
        type="button"
        class="form-control w-25"
        id="submit"
        value="Submit"
        @click="login"
      />
    </div>
  </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Email is not valid", email),
        $autoDirty: true,
      },
      password: {
        required: helpers.withMessage("Password is required", required),
        $autoDirty: true,
      },
    };
  },
  methods: {
    login() {
      this.v$.$validate();
    },
  },
};
</script>

<style lang="scss">
@import "@colors";
body {
  color: $white-smoke;

  #login-form {
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
      width: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      label {
        color: $white-smoke;
        font-size: 20px;
      }

      span {
        color: $imperial-red;
      }
    }
  }

  #submit {
    color: $white-smoke;
    background-color: $cornell-red-2;
    border: none;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
  }
}
</style>

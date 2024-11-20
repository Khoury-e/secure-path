<template>
  <div id="signup-form">
    <form>
      <div class="form-group w-75 p-2">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          :class="
            v$.email.$error === true ? 'text-fields-error' : 'text-fields'
          "
          placeholder="Email"
        />
        <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }} </span>
        <span v-if="this.emailError">{{ this.emailError }}</span>
      </div>

      <div class="form-group w-75 p-2">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
          :class="
            v$.username.$error === true ? 'text-fields-error' : 'text-fields'
          "
          placeholder="Username"
        />
        <span v-if="v$.username.$error"
          >{{ v$.username.$errors[0].$message }}
        </span>
        <span v-if="this.usernameError">{{ this.usernameError }}</span>
      </div>

      <div class="form-group w-75 p-2">
        <label for="full-name">Full Name</label>
        <input
          type="text"
          class="form-control"
          id="full-name"
          v-model="fullname"
          :class="
            v$.fullname.$error === true ? 'text-fields-error' : 'text-fields'
          "
          placeholder="Full Name"
        />
        <span v-if="v$.fullname.$error"
          >{{ v$.fullname.$errors[0].$message }}
        </span>
        <span v-if="this.fullnameError">{{ this.fullnameError }}</span>
      </div>

      <div class="form-group w-75 p-2">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          :class="
            v$.password.$error === true ? 'text-fields-error' : 'text-fields'
          "
        />
        <span v-if="v$.password.$error"
          >{{ v$.password.$errors[0].$message }}
        </span>
        <span v-if="this.passwordError">{{ this.passwordError }}</span>
      </div>

      <div class="form-group w-75 p-2">
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirm-password"
          v-model="confirmPassword"
          :class="
            v$.confirmPassword.$error === true
              ? 'text-fields-error'
              : 'text-fileds'
          "
        />
        <span v-if="v$.confirmPassword.$error"
          >{{ v$.confirmPassword.$errors[0].$message }}
        </span>
        <span v-if="this.confirmPasswordError">{{
          this.confirmPasswordError
        }}</span>
      </div>

      <!-- <div class="form-group d-flex flex-row w-75 p-2 justify-content-evenly">
        <div class="w-25">
          <label for="level">Level</label>
        </div>

        <div class="w-75 d-flex flex-row justify-content-center">
          <input type="radio" id="cybersec-level" value="beginner" />
          <label>Beginner</label>

          <input type="radio" id="cybersec-level" value="intermediate" />
          <label>Intermediate</label>

          <input type="radio" id="cybersec-level" value="expert" />
          <label>Expert</label>
        </div>
      </div> -->

      <!--Replace Radio button with dropdown menu with bootstrap vue-->

      <div
        class="form-group w-75 d-flex flex-column justify-content-center align-items-center p-4"
      >
        <input
          type="button"
          class="form-control w-25"
          id="submit"
          value="Submit"
          @click="signup()"
        />
      </div>
    </form>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  sameAs,
  minLength,
} from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: "",
      confirmPassword: "",
      fullname: "",
      username: "",
      level: "",
      organization: "",
      emailError: "",
      passwordError: "",
      usernameError: "",
      fullnameError: "",
      confirmPasswordError: "",
      allOrganizations: [],
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Email is not valid", email),
        $autoDirty: true,
      },
      fullname: {
        required: helpers.withMessage("Full Name is required", required),
        $autoDirty: true,
      },
      username: {
        required: helpers.withMessage("Username is required", required),
        $autoDirty: true,
      },
      password: {
        minLength: minLength(8),
        required: helpers.withMessage("Password is required", required),
        $autoDirty: true,
      },
      confirmPassword: {
        sameAs: sameAs(this.password),
      },
    };
  },

  methods: {
    signup() {
      this.v$.$validate();
    },
  },
};
</script>
<style lang="scss">
@import "@colors";

body {
  background-color: $eerie-black;
  #signup-form {
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

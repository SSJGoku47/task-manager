<template>
  <div class="bg-cover bg-center bg-[url('/storage/images/bg.jpg')]">
    <div class="flex items-center justify-center min-h-screen bg-opacity-75 bg-center bg-cover">
      <div class="flex flex-col justify-center px-6 py-12 bg-white rounded-lg shadow-lg lg:px-8 sm:w-full sm:max-w-sm">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="h-20 mx-auto" src="/storage/images/logo.png" alt="Your Company" />
          <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Sign in to your
            account</h2>
        </div>

        <div v-if="$page.props.flash.success" class="success">
          {{ $page.props.flash.success }}
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" @submit.prevent="submit">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input v-model="loginForm.email" id="email" autocomplete="off" name="email" type="email" required
                  class="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="text-sm">
                  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>
              <div class="mt-2">
                <input v-model="loginForm.password" id="password" name="password" type="password" required
                  class="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'

export default {
  noLayout: true,
  message : String,
  error : String,

  setup() {
    const loginForm = reactive({
      email: '',
      password: '',
      remember: false,
    });
    
    function submit() {
      // Inertia.post('/login', loginForm);
      router.post('/login', loginForm, {
        onBefore: (visit) => { },
        onStart: (visit) => { },
        onProgress: (progress) => { },
        onSuccess: (page) => {  
          console.log("ap",page);
        },
        onError: (errors) => { 
          console.log('er',errors);
        },
        onCancel: () => { },
        onFinish: visit => { },
      })
    }

    return { loginForm, submit }
  },
}
</script>




<style scoped>

</style>

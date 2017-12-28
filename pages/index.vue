<template>
   <section class="main-section">
    <div class="container">
      <div class="txt-center">
        <div class="title">
          ชีวิตที่มีภาระ คือ ชีวิตที่มีคุณค่า เพราทำให้รู้ว่าเราจะทำอะไร เพื่อใคร
        </div>
      </div>
      <div class="search-form">
        <div class="search">
          <div class="control">
            <input class="input" type="text" placeholder="Text input" v-model="q">
          </div>
        </div>
        <div class="search-btn-section">
          <div class="control" style="margin-left: 10px;">
            <button style="width: 70%;" class="button is-primary" @click="search">Search</button>
          </div>
        </div>
        <div></div>
      </div>
      <div class="result-section">
      <div class="txt-center">
        <h3 style="color: white;">Search Result for {{query}} (total {{count}})</h3>
      </div>
      <div class="container"> 
        <div class="columns" style="margin-top: 20px;">
          <div class="column"  v-for="r in result">
            <div class="card">
              <div class="card-content">
                {{r.full_name}}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import * as Api from '~/utility/api'

export default {
  async asyncData({ req }) {
    /*const data = await axios.request({
      baseURL: 'https://api.github.com/',
      method: 'GET',
      url: 'search/repositories',
      params: {
        q: 'vue',
      }
    })*/
    const data = await Api.get({
      url: 'search/repositories',
      params: {
        q: 'vue',
      }
    })
    console.log(data)
    return { result: data.axiosData.items || [] , count: data.axiosData.total_count || 0}
  },
  data: function() {
    return {
      query: 'vue',
      q: 'vue',
    }
  },
  methods: {
    search: async function() {
      let vm = this
      /*const data = await axios.request({
      baseURL: 'https://api.github.com/',
      method: 'GET',
      url: 'search/repositories',
        params: {
          q: vm.q,
        }
      })*/
      const data = await Api.get({
        url: 'search/repositories',
        params: {
          q: vm.q,
        }
      })
        vm.result = data.axiosData.items  
        vm.count = data.axiosData.total_count
        vm.query = vm.q
    } 
  }
}
</script>

<template>
  <div id="app">
    <div id="box">
      <p v-if="showBox">you are logged in</p>
      <p v-else>You are not logged in</p>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <b-field>
          <p class="control">
            <span class="button is-static">Name</span>
          </p>
          <b-input placeholder="API Name" expanded 
            v-model="APIDetails.api_name"
          ></b-input>
        </b-field>
        <b-field>            
          <p class="control">
            <span class="button is-static">Endpoint</span>
          </p>
          <b-input v-model="APIDetails.api_endpoint" 
            placeholder="API Endpoint" expanded
          ></b-input>
          <b-select placeholder="Method"
              v-model="APIDetails.api_method">
            <option
              v-for="option in data"
              :value="option.name"
              :key="option.id">
              {{ option.name }}
            </option>
          </b-select>
        </b-field>
        <b-field>
          <p class="control">
            <span class="button is-static">URL</span>
          </p>
          <b-input placeholder="Sample URL (Optional)" expanded 
            v-model="APIDetails.api_sample_url"
          ></b-input>
        </b-field>
          
        <b-field>
          <b-input 
            maxlength="500" type="textarea" 
            has-counter placeholder="API description"
            rows="6" v-model="APIDetails.api_description"
          ></b-input>
        </b-field>
        <b-button type="is-primary" @click="saveAPI">Save</b-button>

      </div>

      <div class="column">
        <b-field label="Sample input" :label-position="labelPosition">
          <b-input type="textarea" rows="12"
            v-model="APIDetails.input"
          ></b-input>
        </b-field>
        <b-button type="is-primary" @click="validateJSON">Validate JSON</b-button>
      </div>

      <div class="column is-one-third">
        <b-field>
          <p class="control">
            <span class="button is-static">Status</span>
          </p>
          <b-input placeholder="Status code" expanded 
            v-model="APIDetails.status"
          ></b-input>
        </b-field>
        <b-field label="Sample Output" 
          :label-position="labelPosition"  
        >
          <b-input type="textarea" rows="10"
            v-model="APIDetails.output"
          ></b-input>
        </b-field>
      </div>
    </div>
    <div class="tile is-6">
      <json-viewer
        v-if="showTree"
        :value="jsonTree"
        :expand-depth=5
        copyable
        boxed
        sort
      ></json-viewer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      APIDetails:{
        api_name: '',
        api_endpoint: '',
        api_sample_url: '',
        api_port: 5000,
        api_method: '',
        api_description:'',
        project: 2,
        status: 200,
        input: '',
        output: '',
      },
      data: [
        {id: 1, name: 'GET'},
        {id: 2, name: 'POST'},
        {id: 3, name: 'PUT'},
        {id: 4, name: 'PATCH'},
        {id: 5, name: 'DELETE'},
      ],
      labelPosition: 'on-border',
      showTree: false,
      jsonTree: '',
      showBox: false,
      apiURL: process.env.VUE_APP_APIURL
    }
  },
  methods:{
    saveAPI(){
      console.log(this.APIDetails)
      console.log(this.apiURL)
      axios.post(this.apiURL+'/api/', this.APIDetails)
      .then(res =>{
        console.log(res);
      }, (error) =>{
        console.log(error)
      })
    },
    validateJSON(){
      try{
        let jsonValue = ''
        jsonValue = JSON.parse(this.APIDetails.input)
        this.jsonTree = jsonValue
        this.showTree = true
        jsonValue = JSON.stringify(jsonValue, null, 4)
        this.APIDetails.input = jsonValue

        return true
      } catch(e){
        console.log("Invalid JOSN\n" + e)
        return false
      }
    },
    convertJson(string){
      return JSON.parse(string)
    },
    checkLoggedIn() {
      this.$session.start();
      if (this.$session.has("token")) {
        this.showBox = true
      }
    }
  },
  mounted() {
    this.checkLoggedIn();
  },
}
</script>

<style scoped>

</style>
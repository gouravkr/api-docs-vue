<template>
  <div id="app">
    <p class="title">Create a project</p> 
    <div class="columns">
      <div class="column is-half is-vertical">
        <b-field>
          <p class="control">
            <span class="button is-static">Name</span>
          </p>
          <b-input placeholder="Project Name" expanded 
            v-model="projectDetails.project_name"
          ></b-input>
        </b-field>
        <b-field>
          <p class="control">
            <span class="button is-static">URL</span>
          </p>
          <b-input placeholder="Base URL" expanded 
            v-model="projectDetails.project_base_url"
          ></b-input>
          <b-input placeholder="Port" 
            v-model="projectDetails.project_base_port"
          ></b-input>
        </b-field>

        <b-field label="description" :label-position="labelPosition">
          <b-input 
            maxlength="500" type="textarea" 
            has-counter placeholder="Project description"
            rows="8" v-model="projectDetails.project_description"
          ></b-input>
        </b-field>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      projectDetails:{
        project_name: '',
        project_description: '',
        project_base_url: '',
        // project_base_port: 0
      },
      labelPosition: 'on-border',
    }
  }
}
</script>
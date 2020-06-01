<template>
  <div id="app">
    <b-table 
      :data="projects" 
      ref="table"
      detailed
      detail-key="project_id"
      :show-detail-icon="true"
      :columns="headers"
      :mobile-cards="true"
    >
      <template slot="detail" slot-scope="props">
        <div class="content">
          <p>
            <strong>{{ props.row.project_name }}</strong>
            <br>
            {{props.row.project_description}}
          </p>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      projects: [],
      headers: [
        {
            field: 'project_name',
            label: 'Name'
        },
        {
            field: 'project_description',
            label: 'Description',
            width: 400
        },
        {
            field: 'project_base_url',
            label: 'URL',
        }
      ],
      apiURL: process.env.VUE_APP_APIURL
    }
  },
  methods: {
    getProjects(){
      axios.get(`${this.apiURL}/projects`)
      .then(res =>{
        this.projects = res.data
        console.log(this.projects)
      }, (error) => {
        console.log(error)
      })
    },
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    }
  },
  mounted() {
    this.getProjects()
  }
}
</script>
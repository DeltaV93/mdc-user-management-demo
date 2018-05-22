<template>
  <div class="demo-home">
    <div class="col-12 col-md-9">
      <div class="row">
        <!--USER TABLE-->
        <table id="example" class="table table-striped table-bordered"
               style="width:100%">
          <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Extn.</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
          </thead>
          <tfoot>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Extn.</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
          </tfoot>
        </table>
      </div><!--/span-->
    </div>
  </div>
</template>

<script>
  import './utils/tableData'
  export default {
    components: {
      about: () => import('../docs/about.md')
    },
    data() {
      return {
        title: 'User Dropdown',
        fields: [
          [ "Tiger Nixon", "System Architect", "$3,120", "2011/04/25", "Edinburgh", 5421 ],
          [ "Garrett Winters", "Director", "$8,422", "2011/07/25", "Edinburgh", 8422 ],
          // ...
        ]
      }
    },
    mounted(){
      $("#example").dataTable({
        "data": this.fields
      });

    }
  }
</script>

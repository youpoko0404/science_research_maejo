<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
      <div style="font-size: 30px">จัดการสิทธิ</div>
      <v-divider></v-divider>
      <v-row>
        <v-data-table
          :headers="headers"
          :items="user_permission"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:[`item.index`]="{ index }">
            {{ index + 1 }}
          </template>
          <template v-slot:[`item.name`]="{ item }">
            {{ `${item.first_name} ${item.last_name}` }}
          </template>
          <template v-slot:[`item.permission`]="{ item }">
            <v-btn
              depressed
              :color="item.is_create == 0 ? 'primary' : 'error'"
              @click="updateUserPermission(item)"
            >
              {{ item.is_create == 0 ? "เพิ่มสิทธิ" : "ลบสิทธิ" }}
            </v-btn>
          </template>
          <template v-slot:no-data> ไม่พบผลการค้นหา </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Loading from "../../Components/Loading/Loading";
import { mapState } from "vuex";
export default {
  components: {
    Loading,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      {
        text: "ลำดับ",
        align: "center",
        sortable: false,
        width: "100px",
        value: "index",
      },
      {
        text: "ชื่อ-สกุล",
        align: "start",
        sortable: false,
        value: "name",
      },
      {
        text: "",
        align: "center",
        sortable: false,
        width: "200px",
        value: "permission",
      },
    ],
  }),
  created() {
    this.fetchUserPermission();
  },
  computed: {
    ...mapState({
      loading: (state) => state.permission.loading,
      user_permission: (state) => state.permission.user_permission || [],
    }),
  },
  methods: {
    fetchUserPermission() {
      this.$store.dispatch("permission/fetchUserPermission");
    },
    updateUserPermission(item) {
      item.is_create = !item.is_create;
      item.is_update = !item.is_update;
      this.$store.dispatch("permission/updateUserPermission", item);
    },
  },
};
</script>
  
  
  
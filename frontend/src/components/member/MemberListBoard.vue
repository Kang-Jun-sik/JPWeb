<template>
  <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :single-select="singleSelect"
      item-key="idx"
      show-select
      class="elevation-1"
  >
    <template v-slot:top>
      <v-switch
          v-model="singleSelect"
          label="Single select"
          class="pa-3">
      </v-switch>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "MemberListBoard",
  mounted() {

  },
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {text: '순번', value: 'idx'},
        {
          text: '이름',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {text: '포지션', value: 'position'},
      ],
      desserts: [
        {
          name: '김지성',
          idx: 1,
          position: 'F',
        },
        {
          name: '이승한',
          idx: 2,
          position: 'F',
        },
        {
          name: '강준식',
          idx: 3,
          position: 'G',
        },
        {
          name: '조성원',
          idx: 4,
          position: 'G',
        }, {
          name: '정석재',
          idx: 5,
          position: 'C',
        }, {
          name: '최종호',
          idx: 6,
          position: 'C',
        }, {
          name: '이정훈',
          idx: 7,
          position: 'F',
        }, {
          name: '최정훈',
          idx: 9,
          position: 'F',
        }, {
          name: '장우식',
          idx: 10,
          position: 'F',
        }, {
          name: '안연수',
          idx: 11,
          position: 'G',
        }, {
          name: '주철승',
          idx: 12,
          position: 'F',
        }, {
          name: '오세혁',
          idx: 13,
          position: 'G',
        }, {
          name: '김성태',
          idx: 14,
          position: 'F',
        }, {
          name: '조재희',
          idx: 15,
          position: 'G',
        }, {
          name: '어웅선',
          idx: 16,
          position: 'F',
        }, {
          name: '김동욱',
          idx: 17,
          position: 'C',
        }, {
          name: '진경모',
          idx: 18,
          position: 'G',
        }, {
          name: '이현빈',
          idx: 19,
          position: 'G',
        }, {
          name: '이유빈',
          idx: 20,
          position: 'F',
        }
      ],
    }
  },
}

</script>

<style scoped>

</style>

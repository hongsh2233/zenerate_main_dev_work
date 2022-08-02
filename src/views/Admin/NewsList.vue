<template>
  <section class="section-news-list">
    <div class="news-create">
      <button @click="router.push('/kr/main/admin/edit')">
        <span>NEW</span>
      </button>
    </div>
    <table class="news-list-wrapper">
      <tr class="news-list-header">
        <th class="news-list-column id">Id</th>
        <th class="news-list-column created">Created</th>
        <th class="news-list-column title">TITLE_KR</th>
        <th class="news-list-column title">TITLE_EN</th>
        <th class="news-list-column action">Action</th>
      </tr>
      <tr class="news-list-item" v-for="news in newsList" :key="news.id">
        <td class="news-list-column id">{{ news.id }}</td>
        <td class="news-list-column created">{{ $d(news.date, 'short') }}</td>
        <td class="news-list-column title">{{ news.content_kr.title }}</td>
        <td class="news-list-column title">{{ news.content_en.title }}</td>
        <td class="news-list-column action">
          <button
            class="edit"
            @click="router.push(`/kr/main/admin/edit/${news.id}`)"
          >
            <i class="material-icons">edit</i>
          </button>
          <button class="delete" @click="openDeleteModal(news.id)">
            <i class="material-icons">close</i>
          </button>
        </td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import ApiService from '/Services/api'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
const router = useRouter()

const newsList = ref([])
const getNewsList = async () => {
  const getNewsListRes = await ApiService.GET_NEWS_LIST()
  newsList.value = getNewsListRes.data.body.data
}

const openDeleteModal = (id) => {
  Swal.fire({
    titleText: `Confirm delete news id ${id}`,
    // text: 'Will be marked as deleted and disappear from list, can be restored later',
    text: 'Will be deleted permanently',
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel',
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      ApiService.DELETE_NEWS(id).then(() => {
        getNewsList()
      })
    } else {
      console.log('cancelled!')
    }
  })
}

onMounted(async () => {
  await getNewsList()
})
</script>

<style lang="scss" scoped>
.section-news-list {
  width: 100%;
  padding: 56px 24px;
  .news-create {
    width: 100%;
    margin: 24px 0px;
    text-align: right;
    span {
      @include bold(18);
      &:hover {
        color: $main;
      }
    }
  }
  .news-list-wrapper {
    width: 100%;
    border-collapse: collapse;

    .news-list-header {
      th {
        padding: 12px 12px;
        border-bottom: solid 2px black;
      }
    }
    td {
      padding: 12px 12px;
      border-bottom: solid 1px black;
    }

    .news-list-column {
      @include medium(14);
      &.id {
        text-align: center;
        width: 40px;
      }
      &.created {
        text-align: center;
        width: 140px;
      }
      &.action {
        text-align: center;
        width: 120px;
        button {
          &.edit:hover {
            i {
              color: $main;
            }
          }
          &.delete:hover {
            i {
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>

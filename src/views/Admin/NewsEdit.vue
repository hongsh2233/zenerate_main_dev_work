<template>
  <section class="section-news-edit">
    <div class="news-edit-wrapper">
      <div class="news-edit-title">{{ titleText }}</div>
      <div class="news-edit-date">
        <span>작성일</span>
        <input type="date" class="date" v-model="newsContentForm.date" />
      </div>
      <div class="news-edit-content">
        <div class="content-kr content-item">
          <div class="content-language">KOR</div>
          <div class="content-title">
            <span>뉴스 제목</span>
            <input
              type="text"
              placeholder="뉴스 제목"
              v-model="newsContentForm.content_kr.title"
            />
          </div>
          <div class="content-text">
            <p>뉴스 본문</p>
            <textarea
              rows="10"
              v-model="newsContentForm.content_kr.content"
            ></textarea>
          </div>
          <div class="content-links">
            <p>링크</p>
            <div
              class="link"
              v-for="(link, idx) in newsContentForm.content_kr.links"
              :key="idx"
            >
              <input
                type="text"
                v-model="newsContentForm.content_kr.links[idx]"
              />
              <i
                class="material-icons close"
                @click="removeLink('content_kr', idx)"
                >close</i
              >
            </div>
            <div class="link hover-pointer" @click="addLink('content_kr')">
              <i class="material-icons">add</i>
            </div>
          </div>
        </div>
        <div class="content-en content-item">
          <div class="content-language">ENG</div>
          <div class="content-title">
            <span>Title</span>
            <input
              type="text"
              placeholder="Article title"
              v-model="newsContentForm.content_en.title"
            />
          </div>
          <div class="content-text">
            <p>Content</p>
            <textarea
              rows="10"
              v-model="newsContentForm.content_en.content"
            ></textarea>
          </div>
          <div class="content-links">
            <p>Links</p>
            <div
              class="link"
              v-for="(link, idx) in newsContentForm.content_en.links"
              :key="idx"
            >
              <input
                type="text"
                v-model="newsContentForm.content_en.links[idx]"
              />
              <i
                class="material-icons close"
                @click="removeLink('content_en', idx)"
                >close</i
              >
            </div>
            <div class="link" @click="addLink('content_en')">
              <i class="material-icons">add</i>
            </div>
          </div>
        </div>
      </div>
      <div class="news-edit-action">
        <div class="news-edit-cancel" @click="openCancelModal">Back</div>
        <div class="news-edit-confirm" @click="postNews(props.id)">Save</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import ApiService from '/Services/api'
import { defineProps, onMounted, ref } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  id: {
    type: String,
    required: false,
  },
})
const newsContentForm = ref({
  content_kr: {
    title: '',
    content: '',
    links: [],
  },
  content_en: {
    title: '',
    content: '',
    links: [],
  },
  date: new Date().toISOString().slice(0, 10),
})

const titleText = ref('New Article')

const addLink = (type) => {
  if (!newsContentForm.value[type].links) {
    newsContentForm.value[type].links = ['']
  } else newsContentForm.value[type].links.push('')
}

const removeLink = (type, idx) => {
  newsContentForm.value[type].links.splice(idx, 1)
}

const postNews = async (id) => {
  const SerializedForm = {
    ...newsContentForm.value,
    date: new Date(newsContentForm.value.date),
  }

  if (!id) {
    console.log('new article')
    await ApiService.CREATE_NEWS(SerializedForm)
    Swal.fire('New article posted').then(() => {
      router.push('/main/admin')
    })
  } else {
    console.log(SerializedForm)
    await ApiService.MODIFY_NEWS(id, SerializedForm)
    Swal.fire(`Article ${id} modified`).then(() => {
      router.push('/main/admin')
    })
  }
}

const openCancelModal = () => {
  Swal.fire({
    title: 'Go back to list',
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    text: "작성한 내용은 저장되지 않습니다",
    showConfirmButton: true,
    showCancelButton: true,
  }).then((res) => {
    if (res.isConfirmed) router.push('/main/admin')
    else {
      // do nothing
    }
  })
}

onMounted(async () => {
  if (props.id) {
    const getSingleNewsRes = await ApiService.GET_SINGLE_NEWS(props.id)
    console.log(getSingleNewsRes)
    const formData = {
      ...getSingleNewsRes.data.body.data,
      date: new Date(getSingleNewsRes.data.body.data.date)
        .toISOString()
        .slice(0, 10),
    }
    console.log(formData)
    newsContentForm.value = formData
    titleText.value = `Modify Article ${props.id}`
  }
})
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.section-news-edit {
  width: 100%;
  margin: 32px 0px;
  .news-edit-wrapper {
    .news-edit-title {
      width: 100%;
      margin: 32px 0px;
      @include bold(24);
    }
    .news-edit-date {
      width: 100%;
      margin-bottom: 24px;
      input {
        margin-left: 24px;
      }
    }
    .news-edit-content {
      @include flex;
      .content-item {
        @include desktop {
          flex: 1;
        }
        @include tablet {
          flex: 1;
        }
        @include mobile {
          width: 100%;
          margin-bottom: 24px;
        }
        margin: 0px 12px;
        padding: 24px 16px;
        @include border-set(1px, $grey-2, 8px);
        .content-title {
          margin: 8px 0px;
          @include flex;
          span {
            margin-right: 16px;
          }
          input {
            flex: 1;
          }
        }
        .content-text {
          p {
            margin-bottom: 8px;
          }
          textarea {
            width: 100%;
            background-color: rgba($grey-2, 0.1);
          }
        }
        .content-links {
          p {
            margin-bottom: 8px;
          }
          input {
            width: 80%;
            margin-bottom: 4px;
          }
          i {
            vertical-align: middle;
            &:hover {
              cursor: pointer;
              color: $main;
            }
            &.close {
              margin-left: 12px;
              &:hover {
                color: red;
              }
            }
          }
        }
      }
    }
    .news-edit-action {
      @include flex($justify: flex-end);
      .news-edit-cancel {
        margin: 24px 12px;
        text-align: right;
        @include bold(18);
        &:hover {
          color: red;
          cursor: pointer;
        }
      }
      .news-edit-confirm {
        margin: 24px 12px;
        text-align: right;
        @include bold(18);
        &:hover {
          color: $main;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

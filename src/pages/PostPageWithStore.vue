<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск.." v-focus />
    <div class="app__btns">
      <my-button @click="showDialog"> Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"> </my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"> </post-form>
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    ></post-list>

    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>

    <!-- <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import MyButton from '../components/UI/MyButton.vue';
import MySelect from '../components/UI/MySelect.vue';
import MyInput from '../components/UI/MyInput.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    PostForm,
    PostList,
    MyButton,
    MyInput,
    MySelect,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
  },
};
// watch: {
//   page() {
//     this.fetchPosts();
//   },
// },
</script>

<style scoped>
.app__btns {
  margin: 15px;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  cursor: pointer;
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 3px solid green;
}
</style>

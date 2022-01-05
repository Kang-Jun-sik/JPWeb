// 학습 노트 조작과 관련된 CRUD API 함수 파일
import {posts} from "@/api/index";

/**
 * 데이터 조회 API
 * @returns {*}
 */
function fetchPosts() {
    return posts.get("/");
}


//특정 학습 노트를 조회하는 API
function fechPost(postId) {
    return posts.get(postId);
}

/**
 * 학습 노트 생성 API
 * @param postData
 * @returns {*}
 */
function createPost(postData) {
    return posts.post("/", postData);
}

/**
 * 학습 노트 데이터 삭제 API
 */
function deletePost(postId) {
    return posts.delete(postId);
}

/**
 * 학습 노트 데이터를 수정하는 API
 * @param postId
 * @returns {*}
 */
function editPost(postId, postData) {
    return posts.put(postId, postData);
}

export {fetchPosts, fechPost, createPost, deletePost, editPost}
import { request } from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

// /api/articles/feed
// 获取关注的用户的文章列表
export const getFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    // headers: {
    //   // 注意数据格式：Token空格数据 Token
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTIyNzA1LCJ1c2VybmFtZSI6ImRhcnJlbndlaSIsImV4cCI6MTYwOTY0MjY4MH0.6fEqAJdE5UZL8rfCf6uQ7xqIu26HbPf5HTsL_tejPHc`
    // },
    params
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 添加文章评论
export const addComment = (slug, data) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  })
}

// 删除文章评论
export const deleteComment = (slug, id) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  })
}

// 添加文章
export const addArticle = data => {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data
  })
}

// 删除文章
export const deleteArticle = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  })
}

// 编辑文章
export const editArticle = (slug, data) => {
  return request({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  })
}


import { posts, latestPosts } from './posts'
import { postsEnBySlug } from './posts.en'

export function localizePost(post, isEnglish) {
  if (!isEnglish) {
    return post
  }

  const translated = postsEnBySlug[post.slug]
  if (!translated) {
    return post
  }

  return {
    ...post,
    ...translated,
  }
}

export function getLocalizedPosts(isEnglish) {
  return posts.map((post) => localizePost(post, isEnglish))
}

export function getLocalizedLatestPosts(isEnglish) {
  return latestPosts.map((post) => localizePost(post, isEnglish))
}

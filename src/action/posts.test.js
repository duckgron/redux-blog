import { fetchPost, fetchPosts, updatePostSearchTerm } from './posts';

jest.mock('../services/blogApi');

describe('posts actions', () => {
  it('can fetch a post', () => {
    const fetchedPost = fetchPost();
    expect(fetchedPost).toEqual({
      type: 'FETCH_POST',
      payload: Promise.resolve(
        {
          'userId': 1,
          'id': 1,
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        })
    });
  });

  it('can fetch posts', () => {
    const fetchedPosts = fetchPosts();
    expect(fetchedPosts).toEqual({
      type: 'FETCH_POSTS',
      payload: Promise.resolve(
        {
          'userId': 1,
          'id': 1,
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          'userId': 1,
          'id': 2,
          'title': 'qui est esse',
          'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        }
      )
    });
  });
  it('can update a search term', () => {
    const updatedPostSearchTerm = updatePostSearchTerm('term');
    expect(updatedPostSearchTerm).toEqual({
      type: 'UPDATE_POST_SEARCH_TERM',
      payload: 'term'
    });
  });
});
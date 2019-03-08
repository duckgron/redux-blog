import { 
  fetchUser, 
  fetchUsers, 
  fetchPostByUserId, 
  LOAD_POST_BY_USER_END, 
  LOAD_USERS_END, 
  LOAD_USER_START, 
  LOAD_USERS_START,
  LOAD_USER_END,
  LOAD_POST_BY_USER_START 
} from './users';

jest.mock('../services/blogApi');

describe('users actions', () => {
  it('can fetch a user', () => {
    const fetchedUser = fetchUser();
    expect(fetchedUser).toEqual({
      type: 'FETCH_USER',
      loadStart: LOAD_USER_START,
      loadEnd: LOAD_USER_END,
      payload: Promise.resolve(
        {
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
          'address': {
            'street': 'Kulas Light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874',
            'geo': {
              'lat': '-37.3159',
              'lng': '81.1496'
            }
          },
          'phone': '1-770-736-8031 x56442',
          'website': 'hildegard.org',
          'company': {
            'name': 'Romaguera-Crona',
            'catchPhrase': 'Multi-layered client-server neural-net',
            'bs': 'harness real-time e-markets'
          }
        })
    });
  });

  it('can fetch users', () => {
    const fetchedUsers = fetchUsers();
    expect(fetchedUsers).toEqual({
      type: 'FETCH_USERS',
      loadStart: LOAD_USERS_START,
      loadEnd: LOAD_USERS_END,
      payload: Promise.resolve(
        {
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
          'address': {
            'street': 'Kulas Light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874',
            'geo': {
              'lat': '-37.3159',
              'lng': '81.1496'
            }
          },
          'phone': '1-770-736-8031 x56442',
          'website': 'hildegard.org',
          'company': {
            'name': 'Romaguera-Crona',
            'catchPhrase': 'Multi-layered client-server neural-net',
            'bs': 'harness real-time e-markets'
          }
        },
        {
          'id': 2,
          'name': 'Ervin Howell',
          'username': 'Antonette',
          'email': 'Shanna@melissa.tv',
          'address': {
            'street': 'Victor Plains',
            'suite': 'Suite 879',
            'city': 'Wisokyburgh',
            'zipcode': '90566-7771',
            'geo': {
              'lat': '-43.9509',
              'lng': '-34.4618'
            }
          },
          'phone': '010-692-6593 x09125',
          'website': 'anastasia.net',
          'company': {
            'name': 'Deckow-Crist',
            'catchPhrase': 'Proactive didactic contingency',
            'bs': 'synergize scalable supply-chains'
          }
        })
    });
  });

  it('can fetch a post by user id', () => {
    const fetchedPostByUserId = fetchPostByUserId();
    expect(fetchedPostByUserId).toEqual({
      type: 'FETCH_POST_BY_USER_ID',
      loadStart: LOAD_POST_BY_USER_START,
      loadEnd: LOAD_POST_BY_USER_END,
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
        },
        {
          'userId': 1,
          'id': 3,
          'title': 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          'body': 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
        },
        {
          'userId': 1,
          'id': 4,
          'title': 'eum et est occaecati',
          'body': 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
        },
        {
          'userId': 1,
          'id': 5,
          'title': 'nesciunt quas odio',
          'body': 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
        }
      )
    });
  });

});



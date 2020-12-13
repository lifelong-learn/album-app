import moxios from 'moxios';
import { getAlbumList, getAuthorList, getPhotoList } from './hooks';

describe('callback tests', () => {
  let response;
  let mockCallback;

  beforeEach(() => {
    moxios.install();
    mockCallback = jest.fn();
  });

  afterEach(() => {
    moxios.uninstall();
    mockCallback.mockClear();
  });

  test('getAlbumList mock tests', async () => {
    response = [
      {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
      },
      {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response,
      });
    });

    await getAlbumList(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(response);
  });

  test('getAuthorList mock tests', async () => {
    response = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response,
      })
    });

    await getAuthorList(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(response);
  });

  test('getPhotoList mock tests', async () => {
    response = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response,
      })
    });

    await getPhotoList(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(response);
  });
});
import profileReducer, { addPostActionCreator } from './profile-reducer';

let state = {post:[
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "it's my first post", likesCount: 11 },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ]}

it('length will be increment', () => {
  
    let action = addPostActionCreator('Serega is like')
    let newState = profileReducer(state, action)
  expect(newState.post.length).toBe(7);
});

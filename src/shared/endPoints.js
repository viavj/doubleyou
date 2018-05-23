const endPoints = Object.freeze({
    USER_AUTH: (email) =>
        `https://testproj-10e4a.firebaseio.com/doubleyou/users/.json?orderBy="email"&equalTo="${email}"`,
    USER_REGISTER: (email, pass) => `https://testproj-10e4a.firebaseio.com/doubleyou/users/.json`,
    GET_FUL_DISH_LIST: 'https://testproj-10e4a.firebaseio.com/doubleyou/dishes.json',
    GET_SAMPLE_DISHES: 'https://testproj-10e4a.firebaseio.com/doubleyou/dishes.json?orderBy="id"&limitToLast=5',
})

export default endPoints
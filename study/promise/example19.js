/*
Promise.reject 를 사용하면, catch 로 연결된 rejected 상태로 변경됩니다.
*/

Promise.reject(/* value */);

Promise.reject(new Error("reason"))
  .then(error => {
    console.log(error);
  })
  .catch(error => {
    console.log(error);
  });

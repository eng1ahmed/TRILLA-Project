const myObjectFromServer = '{"Username":"Osama","Age":30}';
console.log(typeof myObjectFromServer);
console.log(myObjectFromServer)

const myobj = JSON.parse(myObjectFromServer);
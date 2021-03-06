const posts = [{title: 'Post One', body:'This is post one',createdAt:new Date().getTime()},
{title: 'Post two', body:'This is post two',createdAt:new Date().getTime()}];


// createPost({ title: 'Post Three', body: 'This is post three'})
// .then(() => {
//     getPosts()
    
//     deletePost().then(() => {createPost({ title: 'Post Three', body: 'This is post three'})
//         getPosts();
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err))

//Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'GoodBye')
// );

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));



// Promise.all([createPost({ title: 'Post Three', body: 'This is post three'}),updateLastActivityTime]).then(values => console.log(values));

async function printPosts(){
    function getPosts() {
    

        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output +=`<li> ${post.title} created ${(new Date().getTime() - post.createdAt)/1000} secs ago</li>`;
            });
            
            document.body.innerHTML = output;
        },1000)
    }
    
    function createPost(post){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                posts.push({...post,createdAt:new Date().getTime()});
                const error = false;
    
                if(!error){
                    resolve();
                }else{
                    reject('Error: Something went wrong');
                }
            },2000);
        });
        
    }
    
    function deletePost(){
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                
                if(posts.values!==0){
                    resolve(posts.pop());
                }else{
                    reject('Error: Array is empty now');
                }
                
            },1000);
        });
    }
    
    let updateLastActivityTime = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if(!error){
                posts.createdAt = new Date().getTime();
                resolve((new Date().getTime() - posts.createdAt)/1000);
            }else{
                reject("Couldn't reach server");
            }
        },1000)
    })
    
    let [post, LastActivityTime] = await Promise.all([createPost({ title: 'Post Three', body: 'This is post three',createdAt:new Date().getTime()}),updateLastActivityTime])
    getPosts();
    await deletePost();
    await getPosts();
    console.log(`${post} ${LastActivityTime}`);
}

printPosts();
new Promise((resolve,reject)=>{
    api.call('fetch-data',(err,data)=>{
        if(err)return reject(err);
        resolve(data);
    })
})

(new Promise(()=>{
    throw new Error('test');
})).catch(err=>console.error(err));


const arr=[async(1),async(2),async(3),async(4),async(5)];
Promise.all(arr)
.then((value)=>{
    // 成功后
})
.catch(err=>console.log(err));// 任意一个出错
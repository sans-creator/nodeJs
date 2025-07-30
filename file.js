const fs=require('fs')
//sync
// fs.writeFileSync('./test.txt','hello world')

//async  does not return anything. always takes a callback 
fs.writeFile('./test.txt','hello world async',(err,result)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(result)
    }
} )


//blocking operation::: sync task(thread pool used)thread: assigns a worker and make them work.. returns a result by default only 4 threads . so server can take a lot of time for proceesing requests
//non blocking::: async task


const os=require('os')
console.log(os.cpus().length)
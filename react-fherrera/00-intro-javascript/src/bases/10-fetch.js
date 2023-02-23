const request = fetch(`http://api.giphy.com/v1/gifs/random`);


request.then( res => res.json() )
.then( ({data })=> { 
    // console.log(data.images.original.url)
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
})
.catch( err => console.warn(err) )
.finally( console.log('Se termino'))


//possible callback hell

// request.then( res => { 
//     console.log(res)
//     res.json().then(data => console.log(data))
//  } )
// .catch( console.warn )
// const getImagenPromesa = () => new Promise( resolve => resolve('https://'))

const getImagen = async () => {

    try {
        const apiKey = 'tuapikey'
        const request = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await request.json();
        const {url} = data.images.original
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        console.log(error);
    }
}

getImagen();
// getImagen.then( console.log )

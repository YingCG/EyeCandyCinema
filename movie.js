const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': '9c0e409619mshb88c6e828955ec1p19b823jsne027399df7dd'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=free', options)
	.then(response => response.json())
	.then(data => {
        // console.log(data)
        const list = data.d;

        list.map((item) => {
            // console.log(item)
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;
            document.querySelector('.movies').innerHTML += movie;
        })
    })
	.catch(err => console.error(err));
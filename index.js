const artistName = "coldplay";

async function searchArtist(artistName) {
    try {
        const URL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artistName}`;
        const response = await fetch(URL);
        const data = await response.json();
        const dataArtist = {
            nome: data.artists[0].strArtist,
            anoFormacao: data.artists[0].intFormedYear,
            origem: data.artists[0].strCountry,
            estilo: data.artists[0].strStyle,
            genero: data.artists[0].strGenre,
            biografia: data.artists[0].strBiographyPT,
        };

    return dataArtist;
    } catch (error) {
        console.log("Não foi possível retornar os dados.");
    }
}

const result = await searchArtist(artistName); 
console.log(result);
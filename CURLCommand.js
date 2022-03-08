var Easy = require( 'node-libcurl' ).Easy,
    Curl = require( 'node-libcurl' ).Curl,
    url =  'https://pt.khanacademy.org/api/internal/graphql/FetchContentData?fastly_cacheable=persist_until_publish&hash=1604303425&variables=%7B%22path%22%3A%22math%2Fgeometry-home%2Fanalytic-geometry-topic%22%2C%22queryParams%22%3A%22lang%3Dpt%26open%3D1%22%2C%22isModal%22%3Afalse%2C%22followRedirects%22%3Atrue%7D&lang=pt',
    ret, ch;

ch = new Easy();

ch.setOpt( Curl.option.URL, url );

ch.setOpt( Curl.option.HEADERFUNCTION, function( buf, size, nmemb ) {

    console.log( buf );

    return size * nmemb;
});

ch.setOpt( Curl.option.WRITEFUNCTION, function( buf, size, nmemb ) {

    console.log( arguments );

    return size * nmemb;
});

// this call is sync!
ret = ch.perform();

ch.close();

console.log( ret, ret == Curl.code.CURLE_OK, Easy.strError( ret ) );



var request = require('request');

var headers = {
    '$Host': 'pt.khanacademy.org',
    '$Sec-Ch-Ua': '\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\"',
    '$Sec-Ch-Ua-Mobile': '?0',
    '$X-Ka-Fkey': '1.0_3c23d3k397dnoicu1gku10gen9t1pqmaui8i2dpn304pj8o3die6hf29o0c0g1o8r7bv_1621611672367',
    '$User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
    '$Accept': '*/*',
    '$Sec-Fetch-Site': 'same-origin',
    '$Sec-Fetch-Mode': 'cors',
    '$Sec-Fetch-Dest': 'empty',
    '$Referer': 'https://pt.khanacademy.org/math/geometry-home/analytic-geometry-topic?open=1',
    '$Accept-Encoding': 'gzip, deflate',
    '$Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    '$Connection': 'close',
    'Cookie': '$KAVID=a64fe133-42e7-4ca3-bbf4-3560d567aa53; _gcl_au=1.1.1834764664.1619397817; _ga=GA1.2.1618553734.1619397818; G_ENABLED_IDPS=google; KAAS=_dxB_rC9ZISlUcOMn_hAGA; LIS=pt; _gid=GA1.2.1746437848.1621547396; GOOGAPPUID=x; fkey=1.0_3c23d3k397dnoicu1gku10gen9t1pqmaui8i2dpn304pj8o3die6hf29o0c0g1o8r7bv_1621611672367; KAAL=$3vJRYohq-kD9BpMrDNsbI8Gjxgu_iMjG6Zrt4E3IIrk.~qtgrkq$a2FpZF84ODg5MzU0OTg0NTU2NzQ1MzgzMDUwMzA*; KAAC=$1t_bEbo_KZsl-EYw3ksH4dwSWMLDZvDAMJfIZLVLlww.~qtgrkq$a2FpZF84ODg5MzU0OTg0NTU2NzQ1MzgzMDUwMzA*$a2FpZF84ODg5MzU0OTg0NTU2NzQ1MzgzMDUwMzA!0!0!0~2'
};

var options = {
    url: '$https://pt.khanacademy.org/api/internal/graphql/FetchContentData?fastly_cacheable=persist_until_publish&hash=1604303425&variables=%7B%22path%22%3A%22math%2Fgeometry-home%2Fanalytic-geometry-topic%22%2C%22queryParams%22%3A%22lang%3Dpt%26open%3D1%22%2C%22isModal%22%3Afalse%2C%22followRedirects%22%3Atrue%7D&lang=pt',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

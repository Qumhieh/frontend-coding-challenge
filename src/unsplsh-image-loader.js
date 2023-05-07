import axios from 'axios';

const unsplashUrl = 'https://api.unsplash.com/';

export function loadImage (imageUrl) {
    return axios.get(unsplashUrl + imageUrl, {
        headers: {Authorization: 'Client-ID _l2w8Mg9-USchVpBTL78m0NarVwAMpUqlvnThe1IHdo'}
    });
}
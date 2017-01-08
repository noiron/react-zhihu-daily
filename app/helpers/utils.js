export function convertDetailImageUrl(url) {
    if (url) {
        return url.replace(/https?:\/\/(pic.*\.(jpg|png|gif))/g, 'https://images.weserv.nl/?url=$1');
    }
}
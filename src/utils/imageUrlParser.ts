
const imageUrlParser = (id : string, option : string = "") => {
    // option mane hocche .. jei image gula ashtese .. tar upor kichu operation amara chalaite parbo 
    // tar height width komay amra niye ashte parbo 
    const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;


    return `${baseUrl} ${option ? option + '/' : '/'} ${id}`;
}
export default imageUrlParser;
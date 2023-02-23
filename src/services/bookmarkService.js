
// Get data from local storage, set it to the contents if it exists or if not, then null.
// @return string : bookmarkedCoins
const getLocalData = () => {
    const storedString = JSON.parse(localStorage.getItem("bookmarkedCoins"));
    if (storedString){
        return JSON.parse(localStorage.getItem("bookmarkedCoins"))
    } else {
        return JSON.stringify(null);
    }
}

// Determine whether a coin ID is able to be bookmorked.
// @param string value : coin ID
// @return boolean
const validate = (value) => {
    const data = getLocalData();
    
    const coinArray = data?.split('&');
    if(coinArray.indexOf(value) === -1) {
        return true;
    } else {
        return false;
    }
}

const BookmarkService = {

    // Determine if the coin ID is in local storage, so that the page can be set as bookmarked or not.
    // @param string value : coin ID
    // @return boolean
    validateBookMark: (value) => {
        const data = getLocalData();
        const coinArray = data.split('&');
        if(coinArray.indexOf(value) === -1) {
            return false;
        } else {
            return true;
        }
    },

    // Use to determine whether a coin is in local storage (bookmarked or not), then add or remove that bookmark depending.
    // @param string value : coin ID
    // @return boolean
    setBookmark: (value) => {
        const valid = validate(value);
        let data = getLocalData();

        if(valid) {
            if(data === ""){
                data += value;
            } else {
                data += "&" + value;
            }
            localStorage.setItem("bookmarkedCoins", JSON.stringify(data));
            return true;
        } else {
            //remove coin from list of coins in localstorage
            let coinArray = data.split('&');
            coinArray = coinArray.filter(str => str !== value);

            localStorage.removeItem("bookmarkedCoins");

            let str = coinArray.toString();
            str = str.replaceAll(',', '&');
            localStorage.setItem("bookmarkedCoins", JSON.stringify(str));
            return false;
        }
        
    },

    // Retrieve the array of coin ID's in local storage--removing null which will always be the first element
    // @return array splitArray : array of coin ID's
    coinArray: () => {
        const data = getLocalData();
        let splitArray = data.split('&');
        splitArray.shift();
        return splitArray;
    }
}

export default BookmarkService;
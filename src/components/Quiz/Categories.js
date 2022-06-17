
import { faPalette, faTheaterMasks, faLandmark } from '@fortawesome/free-solid-svg-icons'
import "./Quiz.scss";

const CATEGORIES = {
    art: {
        name: "Art",
        icon: faPalette,
        color: "green"
    },

    entertainment: {
        name: "Entertainment",
        icon: faTheaterMasks,
        color: "yellow"
    },


    history: {
        name: "History",
        icon: faLandmark,
        color: "red"
    }

} 

export default CATEGORIES;
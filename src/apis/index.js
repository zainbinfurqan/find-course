import {constants} from '../constants'

export const fetchApis = {

    searchCourse : () => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    },

    addCourse : async (data) => {
        try {
            const body = new FormData();
            body.append("file", data.image);
            delete data.image
            body.append('otherData', JSON.stringify(data));
            const response = await fetch(`${constants.Base_URL+'courses'}`, {
            method: "POST",
            body,
            });
        } catch (error) {
            console.log(error)
        }
    }

}
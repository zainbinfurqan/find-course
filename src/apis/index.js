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
            body.append('data', data);
            console.log(data,"api")
            const response = await fetch(`${constants.Base_URL+'courses'}`, {
            method: "POST",
            body,
            headers: {
                'Content-Type': 'multipart/form-data; ',
              },
            });
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

}
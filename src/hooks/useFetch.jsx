import React from "react";

const useFetch = (form) => {

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
    })
}

export default useFetch
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

const GroupRemove = (props) => {
    const { id } = useParams();
    const [apiData, setApidata] = useState([]);

    useEffect(() => {
        const url = "group/delete?id=" + id;
        axios.get(url)
            .then(resp => {
                console.log(resp.data);
                setApidata(resp.data);
                var token = resp.data;
                alert("Deleted Successfully");
            }).catch(err => {
                console.log(err);
            });
    }, []);


    return <Redirect to='/group' />

}
export default GroupRemove;
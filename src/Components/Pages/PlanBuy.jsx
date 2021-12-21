import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import  { Redirect } from 'react-router-dom';

const PlanBuy = (props) => {
    const {id} = useParams();
    const [apiData, setApidata] = useState([]);

    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }

    useEffect(  () => {
        var obj = {UserId: UserId, PlanId: id};
        const url = "payment/add";
        axios.post(url,obj)
            .then(resp => {
                console.log(resp.data);
                setApidata(resp.data);
                var token = resp.data;
                alert("Please Make Payment Now");
            }).catch(err => {
                console.log(err);
            });
    }, []);


    return <Redirect to='/payment'/>

}
export default PlanBuy;
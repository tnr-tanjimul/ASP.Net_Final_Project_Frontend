
import DashItem from "./DashItem";
import axios from "axios";
import React, { useState, useEffect } from "react";
export const DashboardStatus = () => {
    const [apiData, setApidata] = useState([]);

    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
       
    }
    //alert(UserId);

    useEffect(() => {
        const url = "dashboard/get?UserId=" + UserId;
        axios.get(url)
            .then(resp => {
                // console.log(resp.data);
                setApidata(resp.data);

               
            }).catch(err => {
                console.log(err);
            });
    }, []);
    return (


        <>
            <DashItem classColor="info" icon="fe-message-square" text="Total Messages" count={apiData.SendMessages}></DashItem>
            <DashItem classColor="success" icon="fe-message-square" text="Success" count={apiData.SuccessMessages}></DashItem>
            <DashItem classColor="warning" icon="fe-message-square" text="Failed" count={apiData.FailedMessages}></DashItem>
            <DashItem classColor="success" icon="fe-heart" text="Credit" count={apiData.Credit}></DashItem>
            <DashItem classColor="pink" icon="fe-bar-chart-line" text="Groups" count={apiData.Groups}></DashItem>
            <DashItem classColor="info" icon="mdi mdi-view-dashboard-outline" text="Templates" count={apiData.Templates}></DashItem>
            <DashItem classColor="success" icon="mdi mdi-file-key" text="ApiKeys" count={apiData.ApiKeys}></DashItem>
            <DashItem classColor="pink" icon="mdi mdi-account-cash" text="Payment" count={apiData.Payemnts}></DashItem>


        </>)
}

export default DashboardStatus;


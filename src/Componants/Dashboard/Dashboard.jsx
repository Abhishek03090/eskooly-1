import React from 'react'
import NoImage from '../../Assests/no-image.png'
import Arrow from "../../Assests/arrow-down.png"
import NF from "../../Assests/nf.webp"
import UserMessage from "../../Assests/user-message.png"
import UnNamed from "../../Assests/unnamed.png"
import "./Daashboard.css"
import Hi from "../../Assests/hi.png"
import apploginbg from '../../Assests/apploginbg.jpg';
import { Chart } from "react-google-charts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    const data = [
        ["Attandence", "per Day"],
        ["A", 1],
        ["P", 1],
        ["L", 2],


    ];

    const options = {
        title: "",
    };

    return (

        <><div
            className="col-lg-3 col-md-12 text-center m-round m-b-20 profile"
            style={{ background: "#fff" }}
        >
            <div style={{ paddingTop: 26 }}>
                <img
                    src={NoImage}
                    className="img-circle"
                    style={{
                        width: 140,
                        height: 140,

                        padding: 1
                    }} />
            </div>
            <div style={{ paddingTop: 26, paddingBottom: 26 }}>
                <h4 style={{ margin: 0, color: "#501e9c" }} className="gradient-blue">
                    Anuj Pandey
                </h4>
            </div>
            <div
                className="text-left p-26"
                style={{
                    background: "#f6f7fb",
                    borderRadius: 5,
                    borderTopLeftRadius: 26,
                    borderBottomRightRadius: 25
                }}
            >
                <div
                    style={{ position: "relative", minHeight: 30 }}
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10 "

                    >
                        Registration No
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }}> 4582333</strong>
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10 "

                    >
                        Date of Admission
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }}>
                        19 February, 2024
                    </strong>
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Class
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }}>10</strong>
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Family
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Discount in Fee
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }}>10 %</strong>
                </div>
            </div>
            <div className="text-left p-10">
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Date Of Birth
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Gender
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Any Identification Mark?
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Blood Group
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Disease If Any?
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Student Birth Form ID / NIC
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }}>Aadhar card </strong>
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Cast
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }}>Hindu</strong>
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Previous School
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Previous ID / Board Roll No
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Any Additional Note
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Orphan Student
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        OSC
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Religion
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Total Siblings
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }}>0</strong>
                </div>
            </div>
            <div
                className="text-left p-26 m-b-10"
                style={{
                    background: "#f6f7fb",
                    borderRadius: 5,
                    borderTopLeftRadius: 26,
                    borderBottomRightRadius: 25
                }}
            >
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Father Name
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Mother Name
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
                <div
                    style={{ position: "relative", minHeight: 30 }}
                    className=""
                >
                    <img
                        src={Arrow}
                        style={{ position: "absolute", left: 0, top: 26, height: 16 }} />
                    <span
                        className="f-10 m-gray f10"

                    >
                        Address
                    </span>
                    <br />
                    <strong className="f-12 m-l-20 text-blue" style={{ margin: "18px" }} />
                </div>
            </div>
        </div>
            <div
                className="col-lg-9 col-md-12 m-round"
                style={{ background: "none", marginBottom: 0 }}
            >
                <div className="m-main row">
                    <div
                        className="m-container order-card p-t-10 p-b-0 m-round"
                        style={{
                            backgroundImage: `url(${apploginbg})`,
                            opacity: 1,
                            backgroundSize: "cover",
                            height: "7pc",
                            borderRadius: "30px"
                        }}
                    >

                        <h6
                            className=" m-white m-0 p-10 m-b-0 wlcm"

                        >
                            <strong
                                className="m-b-5 m-white f-10"
                                style={{ marginBottom: 0, paddingBottom: 0 }}
                            >
                                <img
                                    src={Hi}
                                    style={{ width: 14, display: "inline" }} />
                                <span style={{ color: "#fff", fontWeight: "normal", padding: "4px" }}>

                                    Welcome
                                </span>
                                <span
                                    style={{ position: "relative", display: "inline-block", padding: "4px" }}
                                >
                                    Anuj Pandey
                                    <img
                                        src="https://eskooly.com/bb/Desktop/images/shape/line-shape-12.svg"
                                        style={{
                                            left: 0,
                                            bottom: "-2px",
                                            width: 80,
                                            position: "absolute"
                                        }}
                                        alt=""
                                        className="cs-screen" />
                                </span>
                                <span style={{ color: "#fff", fontWeight: "normal", padding: "4px" }}>

                                    at <b className="m-white">Student</b> Portal.
                                </span>
                            </strong>
                        </h6>
                        <div
                            className="row p-0 bg"
                            style={{
                                background: "rgba(33, 13, 166, 0.4)",
                                boxShadow: "5px 5px #273fde",
                                borderRadius: 5,
                                borderTopLeftRadius: 26,
                                borderBottomRightRadius: 25
                            }}
                        >
                            <div className="col-12 p-0">
                                <div className="row" style={{ margin: 0, padding: 10 }}>
                                    <div className="col-2 p-0">
                                        <img
                                            src={UnNamed}
                                            style={{
                                                height: 45,
                                                maxWidth: 45,
                                                border: "3px solid #fffff9",
                                                background: "#fffff7"
                                            }}
                                            className="img-circle" />
                                    </div>
                                    <div
                                        className="col-10 p-0"
                                        style={{ display: "table" }}
                                    >
                                        <strong
                                            className="f-16"
                                            style={{
                                                display: "table-cell",
                                                verticalAlign: "middle",
                                                color: "#fffff9"
                                            }}
                                        >
                                            Your Institute Name Here
                                            <br />
                                            <span
                                                style={{
                                                    color: "#fffff9",
                                                    fontSize: 14,
                                                    fontWeight: "normal"
                                                }}
                                            >
                                                Your targetline goes here
                                            </span>
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src={UserMessage} className="img-1" />
                    </div>
                </div>
            </div>
            <div className="row m-t-10 attand" style={{ color: "#501e9c" }}>
                <div className="col-lg-6 ">
                    <h6 className="w-100">
                        <div
                            className="bg-gradient-blue m-white"
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 10,
                                display: "inline-block",
                                paddingTop: 0,
                                paddingLeft: 6,
                                background: "blue",
                                position: "absolute",
                                left: 7
                            }}
                        >
                            1
                        </div>{" "}
                        <strong className=" f-16" style={{ display: "flex", position: "absolute", left: "2pc", width: "18pc", }}>Attandence Report</strong>
                        <span style={{ fontSize: 12 }} className="f-right" />
                    </h6>
                    <div
                        className="row m-t-10 m-b-20 m-round"
                        style={{

                            background: "#FFF",
                            marginLeft: 5
                        }}
                    >
                        {/* <div className="piechart"> */}
                        {/* <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"16pc"}
                            height={"14pc"}
                            style={{ position: "absolute" }}

                        /> */}
                        {/* </div> */}



                    </div>
                    <div className='reportCard' >
                        <h6 className="w-100 part-2">
                            <div
                                className="bg-gradient-blue m-white"
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                    display: "inline-block",
                                    paddingTop: 0,
                                    paddingLeft: 6,
                                    background: "blue",
                                    position: "absolute",
                                    left: 7
                                }}
                            >
                                2
                            </div>{" "}
                            <strong className="gradient-blue f-16" style={{ display: "flex", position: "absolute", left: "2pc", width: "18pc" }}>Class Tests Report </strong>
                            <span style={{ fontSize: 12 }} className="f-right" />
                        </h6>
                        <div
                            className="row m-t-10 m-b-20 m-round"
                            style={{

                                background: "#FFF",
                                marginLeft: 5,
                                width: "18pc",
                                position: "absolute",
                                top: "22pc",
                                left: "0pc"
                            }}
                        >
                            <div className="col-12 p-0">
                                <div
                                    className="row m-10 p-10 p-b-0 m-round"
                                    style={{ background: "#fff" }}
                                >
                                    <div className="col-8 m-gray p-0 f-10" style={{ marginLeft: "9px", fontSize: "small" }} >
                                        <strong className="m-dblue f-16">
                                            <FontAwesomeIcon icon={faBook} /> Maths
                                        </strong>
                                        <br />
                                        <div style={{ marginTop: 5, marginBottom: 5 }}>
                                            <strong className="f-14 " style={{ display: "inline-block" }}>
                                                0%
                                            </strong>
                                            <div
                                                className="progress"
                                                style={{
                                                    height: 8,
                                                    borderRadius: 5,
                                                    width: 90,
                                                    display: "inline-block"
                                                }}
                                            >
                                                <div
                                                    className="progress-bar  f-left"
                                                    role="progressbar"
                                                    aria-valuenow={0}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "0%", borderRadius: 5 }}
                                                ></div>
                                            </div>
                                        </div>
                                        <span className="bg-m-orange badge" style={{ padding: 5 }} /> TOTAL{" "}
                                        <b>CLASS TESTS</b> (<strong className="m-orange f-12">0</strong>)
                                        <br />
                                        <span
                                            className="bg-m-gray badge"
                                            style={{ padding: 5 }}
                                        /> TOTAL <b>MARKS</b> (<strong className="m-gray f-12">0</strong>)
                                        <br />
                                        <span className="bg-m-blue1 badge" style={{ padding: 5 }} />{" "}
                                        OBTAINED <b>MARKS</b> (<strong className="m-blue1 f-12">0</strong>)
                                    </div>
                                    <div className="col-4 p-0">
                                        <input type="hidden" defaultValue={0} id="perval0" />
                                        <div id="progress0" style={{
                                            position: "relative",
                                            top: " -7pc",
                                            left: "11pc"
                                        }}>
                                            <svg viewBox="0 0 110 100">
                                                <linearGradient id="gradient0" x1={0} y1={0} x2={0} y2="100%">
                                                    <stop offset="0%" stopColor="#f5365c" />
                                                    <stop offset="100%" stopColor="#f56036" />
                                                </linearGradient>
                                                <path
                                                    className="grey"
                                                    d="M30,90 A40,40 0 1,1 80,90"
                                                    fill="none"
                                                />
                                                <path
                                                    id="blue"
                                                    fill="none"
                                                    className="blue"
                                                    d="M30,90 A40,40 0 1,1 80,90"
                                                    style={{ stroke: 'url("#gradient0")', strokeDashoffset: 200 }}
                                                />
                                                <text
                                                    x="50%"
                                                    y="60%"
                                                    dominantBaseline="middle"
                                                    textAnchor="middle"
                                                    style={{ fontSize: 18, fontWeight: 900 }}
                                                >
                                                    0%
                                                </text>
                                                <text
                                                    x="50%"
                                                    y="90%"
                                                    dominantBaseline="middle"
                                                    textAnchor="middle"
                                                    style={{ fontSize: 12 }}
                                                >
                                                    score
                                                </text>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>




    )
}
export default Dashboard;
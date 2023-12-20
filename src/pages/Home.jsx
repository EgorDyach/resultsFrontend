import { serverAddParticipant, serverGetResults } from "../Server/getResults.js";
import { useEffect, useState } from "react";
import "./Home.scss";
import Table from "../components/Table.jsx";
import FullImg from "../components/FullImg.jsx";
import "./Admin.scss"
import { Link } from "react-router-dom";
function Home() {
    let [listOfResults, setListOfResults] = useState([])
    const [isFullImg, setIsFullImg] = useState(false)
    const [fullImgLink, setFullImgLink] = useState('')
    useEffect(() => {
        async function fetchGet() {
            try {
                setListOfResults(await serverGetResults())
            } catch (error) {
                console.log(error);
            }
        }

        fetchGet();
    }, [])

    return (
        <div className="homeContainer">
            <Link to={'/admin'}>

                <img src="src/assets/logo.png" alt={'Лого'} className="homeContainerLogo" />
            </Link>
            {/*<div className="homeWrapperGraphik homeWrapper">*/}
            {/*    <div className="homeGraphik">*/}
            {/*        {listOfResults.map((e) => {*/}
            {/*            return (*/}
            {/*                <div className="homeGraphickItem" id={e.id}>*/}
            {/*                <span className="homeGraphickText">*/}
            {/*                    {e.name}*/}
            {/*                </span>*/}
            {/*                    <span className="homeGraphickLine"></span>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="homeWrapper">
                <h2>Результаты выборов в президенты школы:</h2>
                <Table onOpenImg={(e) => {
                    setFullImgLink(e)
                    setIsFullImg(true)
                }} listOfResults={listOfResults} isAdmined={false} />
                {isFullImg && <FullImg link={fullImgLink} onClose={() => {
                    setIsFullImg(false)
                }} />}
            </div>
        </div>
    )
}

export default Home;
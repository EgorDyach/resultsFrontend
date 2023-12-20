import {useEffect, useState} from "react";
import {serverLogin} from "../Server/serverLogin.js";
import Table from "../components/Table.jsx";
import {serverAddParticipant, serverGetResults} from "../Server/getResults.js";
import "./Home.scss";
import "./Admin.scss"
import DeleteForm from "../components/DeleteForm.jsx";
import {DeleteParticipant} from "../Server/DeleteParticipant.js";
import ChangeForm from "../components/ChangeForm.jsx";
import AddForm from "../components/AddForm.jsx";
import FullImg from "../components/FullImg.jsx";
function Admin() {
    let btn = document.getElementById("submit")
    const [isAdmined, setIsAdmined] = useState(false)
    const [isAddForms, setIsAddForms] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const [isChanged, setIsChanged] = useState(false)
    const [isFullImg, setIsFullImg] = useState(false)
    let data = {login: "", password: ""}
    const [mustBeDeleted, setMustBeDeleted] = useState({})
    const [mustBeChanged, setMustBeChanged] = useState({})
    const [fullImgLink, setFullImgLink] = useState('')
    let [listOfResults, setListOfResults] = useState([])

    useEffect(() => {
        async function fetchGet() {
            try {
                setListOfResults(await serverGetResults())
                console.log("setList")
            } catch (error) {
                console.log(error);
            }
        }

        fetchGet();
    }, [isAddForms, isDeleted, isChanged])

    return (
        <>
            <div className="adminContainer homeContainer">
                {!isAdmined && <div className="loginWrapper homeWrapper">
                    <div className={"loginContent"}>
                        <input
                            className={"input inputLogin"}
                            id={"login"}
                            placeholder={"Логин"}
                            type={"text"}
                            required
                        />
                        <input
                            className={"input inputPassword"}
                            placeholder={"Пароль"}
                            id="password"
                            type={"password"}
                            required
                        />
                        <button className={"submit"} id={"submit"} onClick={() => {
                            console.log(123)
                            data = {login: document.getElementById("login").value, password: document.getElementById("password").value}
                            // let result = serverLogin(data)
                            serverLogin(data).then((res) => {
                                setIsAdmined(res)
                                console.log(res)
                            })
                        }}>
                            Войти
                        </button>
                    </div>
                </div>}
                    {isAdmined && <div className={"adminWrapper homeWrapper"}>
                        <div className={"adminContent"}>
                            <div className={"divContent flex"}>
                                <h2 className={"adminTitle"}>Добро пожаловать в панель администратора!</h2>
                                <button className={"adminAddBtn"} onClick={() => {
                                    setIsAddForms(true)
                                }}>
                                    Добавить участника
                                </button>
                            </div>
                            <Table
                                listOfResults={listOfResults}
                                isAdmined={true}
                                onOpenImg={(e) => {
                                    setFullImgLink(e)
                                    setIsFullImg(true)
                                    setIsAddForms(false)
                                    setIsChanged(false)
                                    setIsDeleted(false)
                                }}
                                onDelete={(e) => {
                                    setMustBeDeleted(e)
                                    setIsDeleted(true)
                                    setIsAddForms(false)
                                    setIsChanged(false)
                                    setIsFullImg(false)
                                }}
                                onChange={(e) => {
                                    setMustBeChanged(e)
                                    setIsChanged(true)
                                    setIsDeleted(false)
                                    setIsAddForms(false)
                                    setIsFullImg(false)
                                }
                                }
                            />
                            {isAddForms && <AddForm setIsAddForms={() => {
                                setIsAddForms(false)
                            }}/>}
                            {isDeleted && <DeleteForm e={mustBeDeleted} onClose={() => {
                                setIsDeleted(false)
                            }}/>}
                            {isChanged && <ChangeForm e={mustBeChanged} onClose={() => {
                                setIsChanged(false)
                            }}/>}
                            {isFullImg && <FullImg link={fullImgLink} onClose={() => {
                                setIsFullImg(false)
                            }} />}
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default Admin;
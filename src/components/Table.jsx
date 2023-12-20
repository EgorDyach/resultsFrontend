import Delete from "../assets/Delete.jsx";
import Edit from "../assets/Edit.jsx";

function Table({onOpenImg, listOfResults, isAdmined, onChange, onDelete }) {
    return (
        <table>
            <thead>
            <tr>
                <th>имя</th>
                <th>программа</th>
                <th>голосов</th>
                {isAdmined && <th>Действия</th>}
            </tr>
            </thead>
            <tbody>
            {listOfResults.sort((a, b) => b.votes - a.votes).map((e) => {
                return (
                    <tr key={e.id} id={e.id}>
                        <td>{e.name}</td>
                        <td><img src={e.program} onClick={() => {onOpenImg(e.program)}} /></td>
                        <td>{e.votes}</td>
                        {isAdmined &&
                        <td>
                            <button onClick={() => {
                                onChange(e)
                                console.log("clicked change")
                            }}>
                                {<Edit />}
                                Изменить
                            </button>
                            <button onClick={() => {
                                console.log("clicked delete")
                                onDelete(e)
                            }}>
                                {<Delete />}
                                Удалить
                            </button>
                        </td>
                        }
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default Table;
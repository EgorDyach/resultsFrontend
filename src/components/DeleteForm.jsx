import {DeleteParticipant} from "../Server/DeleteParticipant.js";

export default function DeleteForm({ e, onClose }) {
    return (
        <div className={"modalForm"}>
            <div className={"deleteFormWrapper"}>
            <h2 className={"modalFormTitle"}>Вы точно хотите удалить участника "{e.name}"?</h2>
                <button className={"addFormBtn"} onClick={() => onClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32" fill="none">
                        <g clip-path="url(#clip0_1_939)">
                            <circle cx="16" cy="16" r="15" stroke="white" stroke-width="2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M11.4287 10.2386L16.7549 15.4239C17.0817 15.7421 17.0817 16.2579 16.7549 16.5761L11.4287 21.7614C11.1019 22.0795 10.572 22.0795 10.2451 21.7614C9.91829 21.4432 9.91829 20.9273 10.2451 20.6091L14.9795 16L10.2451 11.3909C9.91829 11.0727 9.91829 10.5568 10.2451 10.2386C10.572 9.92045 11.1019 9.92045 11.4287 10.2386Z"
                                  fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M20.5713 10.2386L15.2451 15.4239C14.9183 15.7421 14.9183 16.2579 15.2451 16.5761L20.5713 21.7614C20.8981 22.0795 21.428 22.0795 21.7549 21.7614C22.0817 21.4432 22.0817 20.9273 21.7549 20.6091L17.0205 16L21.7549 11.3909C22.0817 11.0727 22.0817 10.5568 21.7549 10.2386C21.428 9.92045 20.8981 9.92045 20.5713 10.2386Z"
                                  fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_939">
                                <rect width="32" height="32" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button className={"actionBtn"} onClick={() => {
                    onClose()
                    DeleteParticipant(e.id)
                }}>Удалить
                </button>
            </div>
        </div>
    )
}
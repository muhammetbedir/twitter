
import { InputText } from "primereact/inputtext";

const TextInput = (props) => {
    return (
        <div className="flex flex-col w-2/12 gap-2 ">
            {
                props.label && <label htmlFor={props.id}>{props.label}</label>
            }
            <InputText
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                className={"bg-white text-black px-2 rounded " + props.className}
                name={props.name}
                style={{ borderRadius: "8px", minHeight: "30px", ...props.style }}
            />
        </div>

    )
}

export default TextInput
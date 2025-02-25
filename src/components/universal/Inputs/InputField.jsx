export const InputField = ({ inputfield }) => {
    return (
        <input
            type={inputfield.type}
            id={inputfield.id}
            value={inputfield.value}
            onChange={inputfield.onChange}
            placeholder={inputfield.placeholder}
            required={inputfield.required}
            className={`${inputfield.inputStyle ? inputfield.inputStyle : ""} rounded-2xl bg-customPurple-100 px-5 py-4 text-lg text-white outline-none`}
        />
    )
}

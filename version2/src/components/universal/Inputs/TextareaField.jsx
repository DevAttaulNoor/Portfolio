export const TextareaField = ({ textareafield }) => {
    return (
        <textarea
            rows={textareafield.rows}
            id={textareafield.id}
            value={textareafield.value}
            placeholder={textareafield.placeholder}
            onChange={textareafield.onChange}
            required={textareafield.required}
            className={`${textareafield.textareaStyle ? textareafield.textareaStyle : ""} rounded-2xl bg-customPurple-100 px-5 py-4 text-lg text-white outline-none`}
        />
    )
}

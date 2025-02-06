import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import { PrimaryBtn } from "../Buttons/PrimaryBtn"
import { InputField } from "../Inputs/InputField"
import { TextareaField } from "../Inputs/TextareaField"

export const ContactForm = () => {
    const formRef = useRef()
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // Check if number contains only numeric characters
        if (!/^[\d\s()+-]*$/.test(number)) {
            alert("Please enter a valid phone number.")
            return
        }

        emailjs
            .sendForm("service_lruy9xa", "template_jro2edo", formRef.current, {
                publicKey: "qAmbbJxm0DfTTKkkU",
            })
            .then(
                () => {
                    alert("Your message has been sucessfully sent!")
                    console.log("SUCCESS!")
                },
                (error) => {
                    alert("Please try again!")
                    console.log("FAILED...", error.text)
                },
            )

        setFname("")
        setLname("")
        setEmail("")
        setNumber("")
        setMessage("")
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
        >
            <div className="grid grid-cols-2 items-center gap-5">
                <InputField
                    inputfield={{
                        type: "text",
                        id: "fname",
                        value: fname,
                        placeholder: "First Name",
                        onChange: (e) => setFname(e.target.value),
                        required: true,
                    }}
                />

                <InputField
                    inputfield={{
                        type: "text",
                        id: "lname",
                        value: lname,
                        placeholder: "Last Name",
                        onChange: (e) => setLname(e.target.value),
                        required: true,
                    }}
                />
            </div>

            <InputField
                inputfield={{
                    type: "email",
                    id: "email",
                    value: email,
                    placeholder: "Email Address",
                    onChange: (e) => setEmail(e.target.value),
                    required: true,
                }}
            />

            <InputField
                inputfield={{
                    type: "tel",
                    id: "number",
                    value: number,
                    placeholder: "Number",
                    onChange: (e) => setNumber(e.target.value),
                    required: true,
                }}
            />

            <TextareaField
                textareafield={{
                    rows: "5",
                    id: "message",
                    value: message,
                    placeholder: "Message",
                    onChange: (e) => setMessage(e.target.value),
                    required: true,
                }}
            />

            <PrimaryBtn btnText={"Send"} />
        </form>
    )
}

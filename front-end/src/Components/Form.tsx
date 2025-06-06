import { useForm, type SubmitHandler } from "react-hook-form";

interface InputProps {
    firstName: string,
    lastName: string,
    email: string
    subject: string
    message: string,
}

const form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputProps>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        }
    })

    const onSubmit: SubmitHandler<InputProps> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input type="text" {...register("firstName", { required: true })} placeholder="First Name" />
                {errors.firstName && <span>Please enter your first name</span>}
            </label>
            <label>
                <input type="text" {...register("lastName", { required: true })} placeholder="Last Name" />
                {errors.lastName && <span>Please enter your last name</span>}
            </label>
            <label>
                <input type="email" {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span>Please enter your email</span>}
            </label>
            <label>
                <input type="text" {...register("subject", { required: true })} placeholder="Subject" />
                {errors.subject && <span>Please enter a subject</span>}
            </label>
            <label>
                <textarea {...register("message", { required: true })} placeholder="message" />
                {errors.message && <span>Please enter a message</span>}
            </label>
            <input type="submit" />
        </form>
    )
}

export default form;

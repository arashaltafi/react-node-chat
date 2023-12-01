
const Form = () => {

    const handleSubmit = (event) => {
        alert('test')
    }

    const handleChange = (event) => {
        if (event.target.type === 'checkbox') {
            console.log(event.target.checked)
        } else if (event.target.type === 'radio') {
            console.log(event.target.value)
        } else {
            console.log(event.target.value)
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-4 mb-16"
                autoComplete="off"
            >
                <input onChange={handleChange} type="text" className="" />
                <input onChange={handleChange} type="password" className="" />
                <div className="inline-flex flex-row gap-4">
                    <input onChange={handleChange} type="radio" name="gender" value="male" className="w-8 h-8" />
                    <input onChange={handleChange} type="radio" name="gender" value="female" className="w-8 h-8" />
                </div>
                <input onChange={handleChange} type="checkbox" name="agree" className="w-8 h-8" />
                <input type="submit" value="Submit" className="py-4 px-8 bg-red-500 border-1 border-sky-500 border-solid rounded-xl shadow-xl" />
            </form>
        </>
    )
}

export default Form;
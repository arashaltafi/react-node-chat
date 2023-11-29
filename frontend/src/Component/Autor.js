const Author = ({ faker }) => {

    return (
        <div className="w-1/2 inline-flex flex-col justify-center items-center gap-y-4 bg-pink-400 mt-8 px-4 py-6 rounded-lg shadow-xl mb-8">
            <img src={faker.image.avatar()} alt='' className="w-44 h-44 rounded-full shadow-lg" />
            <p className="text-white text-center font-bold text-xl">نام نویسنده: {faker.name.firstName() + ' ' + faker.name.lastName()}</p>
            <p className="text-white text-center text-lg">تاریخ عضویت: {faker.date.future().toDateString()}</p>
        </div>
    )
}

export default Author;
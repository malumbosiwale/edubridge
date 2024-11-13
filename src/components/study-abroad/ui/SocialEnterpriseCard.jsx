export default function SocialEnterpriseCard ({title, description, image}) {
    return (
        <div
            className="relative grid h-[40rem] w-full lg:max-w-[48rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
                className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: 'center'
                    }}
                >
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-xl md:text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                {description}
                </h2>
                <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                {title}
                </h5>
               
            </div>
</div>   
    )
}

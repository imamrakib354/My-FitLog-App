import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#080a0d] border-t border-gray-800 px-4 lg:px-0">

            <div className='flex justify-between max-w-360 mx-auto py-8'>
                <div className='flex'>

                    <Image
                        src="/logo.png"
                        alt="FitLog Logo"
                        width={30}
                        height={30}
                        className="object-contain"
                        priority
                    />

                    <span className="font-oswald text-xl font-semibold text-white ml-3">
                        FITLOG
                    </span>

                </div>
                <p className="text-gray-400 text-[14px] lg:text-[16px]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
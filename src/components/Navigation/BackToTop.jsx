import { useState, useEffect } from 'react';
import { HiOutlineChevronUp } from 'react-icons/hi';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`fixed bottom-24 right-8 lg:bottom-10 lg:right-10 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="glass-card p-4 rounded-full text-primary hover:bg-primary hover:text-slate-900 transition-all duration-300 shadow-lg scale-110 active:scale-95 border-white/10"
            >
                <HiOutlineChevronUp size={24} />
            </button>
        </div>
    );
};

export default BackToTop;

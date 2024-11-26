import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ConactContent from '@/components/contactContent/ContactContent';

import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen flex flex-col p-4 font-semibold">
            <Header />
            <ConactContent />
            <Footer />
        </div>
    );
}

export default ContactUs;
import { useState } from 'react';
import './FirstSection.css';
import Contents from '../assets/ContentsandLinks.json';
import BrandingDesciption from './BrandingDescription';
import Carousel from './Carousel';

const FirstSection = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const BrandItems = Contents;

    return (
        <div className='firstSectionContainer' id='FirstSectionContainer'>
            <h2 className='H2Container'>SAMPLE WORKS</h2>

            <Carousel items={BrandItems} handleItemClick={handleItemClick} />

            {selectedItem && (
                <BrandingDesciption
                    onClickDisplayBrand={() => setSelectedItem(null)}
                    selectedItem={selectedItem}
                />
            )}
        </div>
    );
};

export default FirstSection;



import Gallery from './Gallery.jsx'
import ImageOne from '../assets/icon1.png'
import ImageTwo from '../assets/icon2.png'
import Imagethree from '../assets/icon3.png'
import ImageFour from '../assets/icon4.png'



function GalleryList() {

    const items = [
        {
            img: ImageOne,
            title: "Declarative",
            text: 'React make it painless to create interactive ULs',
        },
        {
            img: ImageTwo,
            title: "Components",
            text: 'Build encapsulated components that manager their state.',
        },
        {
            img: Imagethree,
            title: "Single-Way",
            text: 'A set of immutable values are passed to the component.',
        },
        {
            img: ImageFour,
            title: "JSX",
            text: 'Statically-typed designed to run on modern browsers.',
        }

    ]
    return (
        <div>
            {items.map((item,index) => (

                <Gallery img={item.img} title={item.title} text={item.text} key={index}/>

            ))}
        </div>
    );


}

export default GalleryList;

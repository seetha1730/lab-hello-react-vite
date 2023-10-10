function Gallery (pros) {

    const { title, text, img } = pros;
    return (
            <div className='Gallery-thumbnail'>
            <img src= { img } alt= { title } />
            <h3> { title} </h3>
            <p> { text } </p>

            </div>
    )

}

export default Gallery;
function CreateAlbum ({img, className}){

    return (
        <div className={`${className} image-container`}>
            <img src={img.url} alt={img.alt} className="image-grid"/>
        </div>
    )
}

export default CreateAlbum
import './components.css';
function HeadingOfPage({ text }){
    return(
        <div className="bgc text-white p-4 w-100 text-center">
            <h1>{text}</h1>
        </div>
    )
}

export default HeadingOfPage;
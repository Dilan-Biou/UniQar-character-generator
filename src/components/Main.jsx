import React from "react";

export default function Main(props){
    
    const [char, setChar] = React.useState(
        {
            textInput:"1",
            option:""
        })

    const [image, setImage]= React.useState("A")

    function handleChange(event){
        const {name, value, } = event.target

        setChar(prevData => {
            return {...prevData, [name]:  value}
        })
    }


    function generate(){
        setImage(char.textInput)
    }

    console.log(char)


    
    return(
        <div>
            <div className="main-bar">
                <h1>UniQar</h1>
                
                <p className="main-par">By entering any word or name, you can generate an Unique Character for yourself. Enjoy it 😊.</p>
                <img className="main-img" src={`https://robohash.org/${image}${char.option}`}/>
                
                <img />
                
                <div className="main-input">
                    
                    <input 
                        name="textInput" 
                        className="input-box" 
                        type="text" 
                        placeholder="Enter Something"
                        onChange={handleChange}
                    ></input>

                    <button 
                        className="gen-button"
                        onClick={generate}
                    >Generate</button>
                </div>

                <div className="radios">
                    
                    <label className="radio-btn">
                        <input 
                            className="radio-input" 
                            type="radio" 
                            name="option"
                            value=""
                            checked={char.option === ""}
                            onChange={handleChange}   
                            ></input>
                        <div className="radio-content">
                            <img src="https://robohash.org/A"/>
                            <span>Robot</span>
                        </div>
                    </label>
                    
                    <label className="radio-btn">
                        <input 
                            className="radio-input" 
                            type="radio" 
                            name="option"
                            value="?set=set2"
                            checked={char.option === "?set=set2"}
                            onChange={handleChange}   
                            ></input>
                        <div className="radio-content">
                            <img src="https://robohash.org/qwertu?set=set2"/>
                            <span>Ugly Monster</span>
                        </div>
                    </label>

                    <label className="radio-btn">
                        <input 
                            className="radio-input" 
                            type="radio" 
                            name="option"
                            value="?set=set4"
                            checked={char.option === "?set=set4"}
                            onChange={handleChange}   
                            ></input>
                        <div className=" radio-content">
                            <img className="kitti" src="https://robohash.org/qwertyu?set=set4"/>
                            <span>Cute kitten</span>
                        </div>
                    </label>

                </div>

            </div>
        </div>
    )
}
import React from "react";

export default function Load(){

    const [showLoad, setShowLoad] = React.useState(1)
    setTimeout( ()=> setShowLoad(0), 3000)
    

    return(
        <div style={{opacity : showLoad}} className="load-page">
            <div class="master-container">
                <div class="container">
                    <div class="crescent">
                        <span></span><span></span>
                    </div>
                    <div class="star s1">
                        <span></span><span></span>
                    </div>
                    <div class="star s2">
                        <span></span><span></span>
                    </div>
                    <div class="star s3">
                        <span></span><span></span>
                    </div>
                    <div class="star s4">
                        <span></span><span></span>
                    </div>
                    <div class="star s5">
                        <span></span><span></span>
                    </div>
                    <div class="small-star ss1">
                        <span></span><span></span>
                    </div>
                    <div class="small-star ss2">
                        <span></span><span></span>
                    </div>
                    <div class="small-star ss3">
                        <span></span><span></span>
                    </div>
                    <div class="small-star ss4">
                        <span></span><span></span>
                    </div>
                    <div class="small-star ss5">
                        <span></span><span></span>
                    </div>
                    <div class="small-star ss6">
                        <span></span><span></span>
                    </div>
                    <div class="small-star ss7">
                        <span></span><span></span>
                    </div>
                    <div class="small-star ss8">
                        <span></span><span></span>
                    </div>
                    <div class="hut">
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <div class="doorway">
                        <hr class="split"/>
                        </div>
                    </div>
                    <div class="fire-pit">
                        <div class="fire">
                            <div class="inner-fire">
                            </div>
                        </div>
                            <hr class="log1"/>
                            <hr class="log2"/>
                    </div>
                    <div class="tree one">
                        <hr class="trunc"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                    </div>
                    <div class="tree two">
                        <hr class="trunc"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                    </div>
                    <div class="tree three">
                        <hr class="trunc"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                    </div>
                    <div class="tree four">
                        <hr class="trunc"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                        <hr class="leaves"/>
                    </div>
                    <div class="hill"></div>
                </div>
                <span class="loading-text">Mr.db</span>
            </div>
        </div>
    )
}
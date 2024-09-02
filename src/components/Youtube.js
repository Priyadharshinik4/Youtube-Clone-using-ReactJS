import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import { MdInbox } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { LiaHospitalSymbolSolid } from "react-icons/lia";
import { BiShapeTriangle } from "react-icons/bi";

function Youtube(){
    return(
        <div>
            <div className="header">
                <h5><IoMenu /></h5>
                <h2><span><FaYoutube /></span>Youtube</h2>
                <div className="search">
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                        <FaSearch className="search-icon" />
                    </div>
                </div>
            </div>
            <div className="sidemenu">
                <h4><MdHome /></h4>
                <h4><IoMusicalNotesOutline /></h4>
                <h4><IoLink /></h4>
                <h4><MdInbox /></h4>
                <h4><IoDiamond /></h4>
                <h4><BiShapeTriangle /></h4>
                <h4><LiaHospitalSymbolSolid /></h4>
                <h4><FaCircleUser /></h4>
            </div>
            <div className="videos">
                <div className="one">
                    <iframe width="240" height="150" src="https://www.youtube.com/embed/Iy8lSoRzElo?si=SY_nIbTdC1Ukb7GS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>Men's 4x100m Final | Paris Champions</h3>
                    <h4>Olympics</h4>
                    <h5>2 weeks ago</h5>
                </div>
                <div className="one">
                    <iframe width="240" height="150" src="https://www.youtube.com/embed/Ip3AxuzU9Rs?si=_q_28W5ua3xCPL0q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                   
                    <h3>Cooking with ONLY natural kitchenware</h3>
                    <h4>Longmeimei</h4>
                    <h5>2 years ago</h5>
                </div>
                <div className="one">
                    <iframe width="240" height="150" src="https://www.youtube.com/embed/K87aFjB7Ff0?si=r9B1pBCtwwmizT4h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>Beautiful sunrise and flower's</h3>
                    <h4>Natural Stories</h4>
                    <h5>1 year ago</h5>
                </div>
                <div className="one">
                    <iframe width="240" height="150" src="https://www.youtube.com/embed/Zv11L-ZfrSg?si=GoO5qKAKfA73lw3J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>Ultimate wildlife animals</h3>
                    <h4>8K videos</h4>
                    <h5>2 months ago</h5>
                </div>
                <div className="one">
                    <iframe width="240" height="150" src="https://www.youtube.com/embed/668nUCeBHyY?si=yy6JJ5aortB6Uue-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>Natural Beautiful shorts</h3>
                    <h4>Ashwanth Mohan</h4>
                    <h5>11 years ago</h5>
                </div>
                <div className="one">
                    <iframe width="240" height="150" src="https://www.youtube.com/embed/T_HElxAskxg?si=9jx88Nqey8NazzLX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>Cute Babies</h3>
                    <h4>5-Minutes Funny videos</h4>
                    <h5>7 weeks ago</h5>
                </div>
                <div className="one">
                    <iframe width="240" height="150" src="https://www.youtube.com/embed/hxOApe1P9dM?si=gd9kHdm5XGDIEYj6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>Humpty Dumpty</h3>
                    <h4>Cocomelon</h4>
                    <h5>1 year ago</h5>
                </div>
                <div className="one">
                    <iframe width="240" height="150" src="https://www.youtube.com/embed/Rp1UCUq9kDs?si=P2wFimEbL1s3_fOa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h3>Fire Game</h3>
                    <h4>Zabi FF</h4>
                    <h5>2 days ago</h5>
                </div>
            </div>
        </div>
    )
}

export default Youtube;

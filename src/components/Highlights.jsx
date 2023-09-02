import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "../components/ui/Highlight.jsx";

const Highlights = () => {
    return (
        <section id="Highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                     
                        <Highlight 
                        icon={<FontAwesomeIcon 
                        icon="bolt" />} 
                        title= {'Easy and Quick'} para= {'Get access to the book you purchased online instantly.'} >
                            
                        </Highlight>
                        <Highlight 
                        icon={<FontAwesomeIcon 
                        icon="book-open" />} 
                        title= {'10,000+ Books'} para= {'Library has books in all your favorite categories.'} >
                            
                        </Highlight>
                        <Highlight
                         icon={<FontAwesomeIcon 
                        icon="tags" />} 
                        title= {'Affordable'} para= {'Get you hands on popular books for as little as $10.'} >
                            
                        </Highlight>

            


                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
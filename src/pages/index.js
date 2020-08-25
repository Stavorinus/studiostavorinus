import React from "react"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

   		<div id="hero" className="hidden">
            <div id="hero-styles" className="parallax-hero">
            
            
                <div id="showcase-slider" className="first-load">
            
              
                    <div className="section">
                    
                    	<div className="img-container">
                        	<div className="section-image" style={{backgroundImage: "url(/images/1.jpg)"}}>
                            	<div className="overlay"></div>
                            </div>
                            <div className="responsive-section-image" style={{backgroundImage: "url(/images/1.jpg)"}}>
                            	<div className="overlay"></div>
                            </div>
                        </div>
                    	
                        <div className="gradient"></div>
                        
                        <div className="caption">
                        	<div className="content-caption light-content">
                        	
                            		<div className="open-project-link">
                                        <a className="open-project-head" href="project.html">BRANDING</a><br/><br/>
                                		<a className="open-project" href="project.html">The Mr. Porter Guide to a Better Day</a>
                                </div>
                                
                                	<p className="section-info">A celebration of photographer and filmmaker Tyler Mitchell’s distinctive vision of a Black utopia.</p>
                        
                        	</div>                        
                        </div>
                        
                        <div className="disable-section"></div>
                        
                    </div>
                  
                    <div className="section">
                    
                    	<div className="img-container">
                        	<div className="section-image" style={{backgroundImage: "url(/images/2.jpg)"}}>
                            	<div className="overlay"></div>
                            </div>
                            <div className="responsive-section-image" style={{backgroundImage: "url(/images/2.jpg)"}}>
                            	<div className="overlay"></div>
                            </div>
                        </div>
                    	
                        <div className="gradient"></div>
                        
                        <div className="caption">
                        	<div className="content-caption light-content">
                        	
                            		<div className="open-project-link">
                                		<a className="open-project" href="project1.html">Hellen Reeves</a>
                                	</div>
                                
                                	<p className="section-info">The owner’s affection for a stone outcropping on her property inspired the design of this house. </p>
                        
                        	</div>                        
                        </div>
                        
                        <div className="disable-section"></div>
                        
                    </div>
               
                    <div className="section">
                    
                    	<div className="img-container">
                        	<div className="section-image" style={{backgroundImage: "url(/images/3.jpg)"}}>
                            	<div className="overlay"></div>
                            </div>
                            <div className="responsive-section-image" style={{backgroundImage: "url(/images/3.jpg)"}}>
                            	<div className="overlay"></div>
                            </div>
                        </div>
                    	
                        <div className="gradient"></div>
                        
                        <div className="caption">
                        	<div className="content-caption light-content">
                        	
                            		<div className="open-project-link">
                                		<a className="open-project" href="project2.html">Camaro SS</a>
                                	</div>
                                
                                	<p className="section-info">The owner’s affection for a stone outcropping on her property inspired the design of this house. </p>
                        
                        	</div>                        
                        </div>
                        
                        <div className="disable-section"></div>
                        
                    </div>
             
                    <div className="section">
                    
                    	<div className="img-container">
                        	<div className="section-image" style={{backgroundImage: "url(/images/4.jpg)"}}>
                            	<div className="overlay"></div>
                            </div>
                            <div className="responsive-section-image" style={{backgroundImage: "url(/images/4.jpg)"}}>
                            	<div className="overlay"></div>
                            </div>
                        </div>
                    	
                        <div className="gradient"></div>
                        
                        <div className="caption">
                        	<div className="content-caption light-content">
                        	
                            		<div className="open-project-link">
                                		<a className="open-project" href="project3.html">Casa Rhodes</a>
                                	</div>
                                
                                	<p className="section-info">Casa Rhodes is a 90-room hotel located on the mighty Greek island of Rhodes.</p>
                        
                        	</div>                        
                        </div>
                        
                        <div className="disable-section"></div>
                        
                    </div>
                            
                    
                </div>
                
                
               
                <ul id="showcase-nav">                    
                    <li className="showcase-prev">
                    	<div className="arrow-left"></div>
                        <div className="arrow-left-line"></div>
                    </li>                    
                    <li className="showcase-next">
                    	<div className="arrow-right"></div>
                        <div className="arrow-right-line"></div>
                    </li>                    
                </ul>
              
                                
                
              
                <div className="bg-lines">                    
                    <div className="bg-line left"></div>        
                    <div className="bg-line center"></div>        
                    <div className="bg-line right"></div>    
                </div>
            
            
            
            </div>        
        </div>
      
  </Layout>
)

export default IndexPage

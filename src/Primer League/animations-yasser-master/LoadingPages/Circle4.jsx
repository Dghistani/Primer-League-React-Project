
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react'
import * as doneData from "../jsonF/11045-buildin-a-web-page.json"
import * as legoData from "../jsonF/11045-buildin-a-web-page.json"


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
  }
  }
  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 };
export default class Circle4 extends Component {
  state = {
    done: this.props.done,
    loading:this.props.loading
 }

 componentDidMount(){
 
 }
  render() {


    return (
      <div>
        <div className="yasser">
         {!this.state.done ? (
           <FadeIn>
           <div class="d-flex justify-content-center align-items-center">
             <h1>{this.props.text}</h1>
             {!this.state.loading ? (
               <Lottie options={defaultOptions} height={120} width={120} />
             ) : (
             <Lottie options={defaultOptions2} height={120} width={120} /> 
             )}
           </div>
         </FadeIn>
         ) : (
            <h1>hello world</h1>
         )}
         </div>
      </div>
    )
  }
}

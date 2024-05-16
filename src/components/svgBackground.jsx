
import { Component } from 'react';
import './svgBackground.css';

export class SvgBackground extends Component {

    state = { 
        height: 0,
        viewBox: '0 0 800 3000',
    }

    componentDidMount () {
        let svg = document.getElementById('svg-background');
    
        let height = Math.max( svg.scrollHeight, svg.offsetHeight, svg.clientHeight, svg.scrollHeight, svg.offsetHeight);
        let width = Math.max( svg.scrollWidth, svg.offsetWidth, svg.clientWidth, svg.scrollWidth, svg.offsetWidth);
        
        let vB = "0 0 " + width + ' ' + height;
        svg.setAttribute("viewBox", "0 0 " + width + " " + height); 

        this.setState({
            viewBox: vB
        })                 

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('circle-animation');
                }else{
                    entry.target.classList.remove('circle-animation');
                }
            });
        });

          
        // Tell the observer which elements to track
        observer.observe(document.querySelector('.circleAnim'));
    }

    render() {

        return (
  
            <div id="svg-background" className='svgBackground-container' >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox={this.state.viewBox} width="100%" height="100%">
                    <g>
                        <circle id='circle-1' className='circleAnim' r="50" cx="80%" cy="20%"></circle>
                    </g>
                    <g>
                      <line x1="80%" x2="80%" y1="20%" y2="125%" className='svg-line'></line>  
                    </g>
                </svg>           
            </div>

        )
    }
}


export default SvgBackground;

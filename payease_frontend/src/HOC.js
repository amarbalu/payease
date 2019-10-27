import React from 'react';
import BlockPage from "./blockPage";


const higherOrderComponent = (WrappedComponent) => {
   
  return class HOC extends React.Component {
    constructor(props){
        super(props);
        this.state={
            width:window.innerWidth,
            height:window.innerHeight
        }
    }
    componentDidMount(){
     
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
     handleWindowSizeChange = () => {
        this.setState({width:window.innerWidth, height:window.innerHeight})
      };
    render() {
        const isMobile = this.state.width<=500 || this.state.height<= 500;
        return (

          isMobile?<WrappedComponent />:<BlockPage/>
      )
    }
  }
    
};

export default higherOrderComponent;
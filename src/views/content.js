/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-07 15:35:27
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-08 13:58:24
 */
import React,{Component} from 'react'
class ContentName extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      content:''
     }
  }
  componentDidMount(){
   
    console.log('22222222222222222222222')
  }
  componentDidUpdate(){
    console.log(this.props.match.params.id)
    // if(this.props.match.params.id){
    //   this.setState({content:'hello' });
    // }

  }
  render() { 
    return ( 
      <div>
        <h1>
          1111
          {this.props.match.params.id}
        </h1>
        
      </div>
     );
  }
}
 
export default ContentName;
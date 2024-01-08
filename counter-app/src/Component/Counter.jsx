// import PropTypes from 'prop-types'
import React from 'react'

export default class Counter extends React.Component {
    constructor(){
        super()
        this.state={count:0}
    }
    handleclick =(val)=>{
        this.setState({
            count:this.state.count+val
        })
    }
    render() {
    //   const [count, setCount] = useState(0)
    return (
      <>
         <h1>Counter App</h1>
         <h2>{this.state.count}</h2>
         <button onClick={()=>{this.handleclick(1)}}>+</button>
         <button onClick={()=>{this.handleclick(-1)}}>-</button>
         <button onClick={()=>{this.handleclick(-this.state.count)}}>Reset</button>
       {/* <h2>{count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <button onClick={() => setCount((count) => count -count)}>Reset</button>  */}
      </>
    )
  }
}

// export default Counter
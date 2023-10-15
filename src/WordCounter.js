import React from 'react'
import "./Paragraph.css"

function WordCounter() {
    const [state, setState] = React.useState({
      wordCount: 0, 
      charCount: 0
    });
    
    const handleKeyPress = (e) => {
      const count = e.target.value;
      
      const countWords = (count) => {
        if (count.length === 0) {
          return 0;
        } else {
          count = count.replace(/(^\s*)|(\s*$)/gi,"");
          count = count.replace(/[ ]{2,}/gi," ");
          count = count.replace(/\n /,"\n");
          return count.split(' ').length; 
        }
      }
      
      setState({
        wordCount: countWords(count),
        charCount: count.length
      });
    }
    
    return(
        <center>

        <div   id='container' className='mainpara'>
            <h2>Responsive Paragraph Word Counter</h2>
          <textarea   onChange={handleKeyPress}  className='area'  cols='50' rows='10'></textarea>
          <div className="word-count">Word count: <span className='num'> {state.wordCount}</span></div>
    
        </div>
        </center>
    )
  }

export default WordCounter
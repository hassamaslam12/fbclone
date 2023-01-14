import react from 'react';
import  ReactDOM  from 'react-dom';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
function Header(){
  return <><div className='header'>
  <h1>Facebook</h1>
  <input placeholder='Searh Facebook' className="searchBar"></input>
  <div><button className='picButton'><img src='https://picsum.photos/404' alt='' width='45px' className='topRightPic'></img></button></div>
  </div>
  </>
}
function Leftside(){
  return <>
  <div className='leftSide'>
    <button>HOME </button>
    <button>ANDRE AUSTIN</button><hr/>
    <button>FRIENDS </button>
    <button>WATCH </button>
    <button>SAVED </button>
    <button>MEMORIES </button>
    <button>SEE ALL </button><hr/>
    <button>Soul Brothers</button>
    <button>TWO RINGS</button>
    <button>SOFTWARE JOBS</button>
    <button>SEE ALL GROPUS</button><hr/>
    <button>8 BALL POOL</button>
    <button>MINECRAFT</button>
    <button>CHESS</button>
    <button>SEE ALL SHORTCUTS</button><br/>
    <div className='attributes'>
    <a href="#">privacy</a>
    <a href="#">terms</a>
    <a href="#">advices</a>
    <a href="#">ad choices</a>
    <a href="#">cookies</a>
    </div>
  </div>
  </>
}
function Posts(props){
  return <><div className='pageManage'>
  <div className='post'>
  <div className='headOfPost'>
    <img src={props.headPic} alt='' width="60 px" className='pic' />
        <div className='detailsOfThePost '>
    <p className='name'>{props.name}</p>
    <p className='date'>{props.date}.</p>
    </div>
      </div>
      <p>
      {props.description}
      </p>
      <br/>
      <img src={props.image} alt='' width='400'></img>
      <br/><div className='anotherButton'>
      <button className='buttonDown'>Like</button>
      <button className='buttonDown'>Comment</button>
      <button className='buttonDown'>Share</button>
    </div></div></div>
    </>

}

ReactDOM.render(<><Header/>
<Leftside/>
<Posts
    name="Dolores Graham"
    headPic="https://picsum.photos/204"
    date="1/1/2023,20:10"
    description="If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph."
    image="https://picsum.photos/200" /><Posts
      name="Raquel Vega"
      headPic="https://picsum.photos/230"
      date="17/2/2022,12:18"
      description="We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see."
      image="https://picsum.photos/2050" /><Posts
      name="Andre Austin"
      headPic="https://picsum.photos/2320"
      date="17/2/2022,12:18"
      description="While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs."
      image="https://picsum.photos/244" /><Posts
      name="Ian Lamb"
      headPic="https://picsum.photos/144"
      date="17/2/2022,12:18"
      description="Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day."
      image="https://picsum.photos/246" /><Posts
      name="Alison Harper"
      headPic="https://picsum.photos/232"
      date="17/2/2022,12:18"
      description="A second option is to use the random paragraph somewhere in a short story they create."
      image="https://picsum.photos/547" /><Posts
      name="Matt Woods"
      headPic="https://picsum.photos/252"
      date="17/2/2022,12:18"
      description="A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place."
      image="https://picsum.photos/447" /></>
,document.querySelector('#root'));

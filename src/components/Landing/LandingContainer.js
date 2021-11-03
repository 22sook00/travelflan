import React,{useState,useEffect} from 'react'
import {Container,FlexBox,SubTitle,Title,Wrapper} from '../../GlobalStyle'
import {Context ,PageUl , PageLi} from './styledLanding';
// import Pagenation from '../hoc/Pagenation';
import axios from 'axios';

function LandingContainer() {

  const [viewDatas,setViewDatas] = useState([]);
  const [curPage , setCurPage] = useState(1);

  const limitPosts = 5;
  const indexOfLast = curPage * limitPosts;
  const indexOfFirst = indexOfLast - limitPosts;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then((res)=>{
      setViewDatas(res.data)
    })
  }, [])

  const curPosts = (tmp) => {
    let curPosts = [];
    curPosts = tmp.slice(indexOfFirst,indexOfLast);
    
    return curPosts;
  }

  const posts = curPosts(viewDatas);

  const pageNumbers = [];
  for(let i = 1; i<=Math.ceil(viewDatas.length / limitPosts); i++){
    pageNumbers.push(i);
  }

  return (
    <Container>
      <Wrapper>
        <Title>LandingContainer</Title>
        {posts && posts.map((el)=>{
          return (
            <article key ={el.id}>
              <FlexBox>
              <a href = 'https://placeholder.com'>
                <img 
                src = 
                'https://via.placeholder.com/150/91EAE4/86A8E7?Text=IPaddress.net'
                alt = {el.id + '번째 img'}
                />
              </a>
              <Context>
                <SubTitle>Title</SubTitle>
                <p>{el.title}</p>
              </Context>
              </FlexBox>
            </article>
          )
        })}

        <PageUl>
        {pageNumbers.map((num)=>{
          return (
            <PageLi
            key = {num}
            onClick = {()=>{setCurPage(num)}}
            >{num}
            </PageLi>
          )
        })}
        </PageUl>
        
      </Wrapper>
    </Container>
  )
}

export default LandingContainer

import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 500px;
    margin: 0 auto;
    box-sizing: border-box;
`
const ContentItem = styled.p `
    color: #fff;
    text-align: center;
    font-family: 'Read';
    background-color: #559;
    box-sizing: border-box;
    padding: 20px;
    margin: 40px;
`

function components() {
  return (
      <React.Fragment>
        <Content>
            <ContentItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nibh nec urna hendrerit pulvinar. Phasellus aliquam, nisi dapibus ultricies lacinia, ligula risus cursus leo, quis tincidunt tellus urna eget sem. Suspendisse sed justo at justo rutrum accumsan. Pellentesque blandit lacus vel dui hendrerit, et lacinia libero posuere. Sed molestie, lorem ut feugiat lobortis, elit nisi interdum lorem, at sollicitudin felis nibh a sapien. Nunc imperdiet turpis est, sit amet rutrum purus viverra maximus. Nullam urna nisi, viverra ut nunc ac, hendrerit tempus metus. Nunc massa sem, eleifend quis consequat ut, tincidunt ut tortor. Duis vel tellus ut magna finibus lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat est sit amet nunc lacinia vehicula.
            </ContentItem>
            <ContentItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nibh nec urna hendrerit pulvinar. Phasellus aliquam, nisi dapibus ultricies lacinia, ligula risus cursus leo, quis tincidunt tellus urna eget sem. Suspendisse sed justo at justo rutrum accumsan. Pellentesque blandit lacus vel dui hendrerit, et lacinia libero posuere. Sed molestie, lorem ut feugiat lobortis, elit nisi interdum lorem, at sollicitudin felis nibh a sapien. Nunc imperdiet turpis est, sit amet rutrum purus viverra maximus. Nullam urna nisi, viverra ut nunc ac, hendrerit tempus metus. Nunc massa sem, eleifend quis consequat ut, tincidunt ut tortor. Duis vel tellus ut magna finibus lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat est sit amet nunc lacinia vehicula.
            </ContentItem>
        </Content>
      </React.Fragment>
    )
}

export default components;
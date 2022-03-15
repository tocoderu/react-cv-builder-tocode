import React from 'react'
import styled from 'styled-components'

// components:
import { Header, Footer, Avatar, Title, Descr } from './components'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`

const App = () => {
  const handleAvatarClick = () => console.log('avatar clicked')
  const handlePrintClick = () => console.log('print button clicked')

  return (
    <div className='ui-wrapper'>
      <Header onClick={handlePrintClick} />
      <div className='ui-content-wrapper'>
        <Wrapper>
          <div className='ui-container'>
            <Row itemsCenter>
              <Avatar onClick={handleAvatarClick} />
              <div>
                <Title>Nick Gerner</Title>
                <Descr>
                  Experienced Software & Machine Learning Engineer with a
                  demonstrated history.
                </Descr>
              </div>
            </Row>

            <Row>
              <Sidebar>
                <Title size='3' isUppercase>
                  About me:
                </Title>
                <Descr>Software Engineer</Descr>
                <Descr isSecondary>Washington, DC | tocode.ru</Descr>

                <Descr isPrimary style={{ marginTop: '2rem' }}>
                  nick@gmail.com
                </Descr>
                <Descr isPrimary>+1 588-6500</Descr>
              </Sidebar>

              <Content>
                <Title size='3' isUppercase>
                  Education:
                </Title>
                <Descr>Stanford University - BS Electrical Engineering</Descr>

                <Title size='3' isUppercase style={{ marginTop: '3.6rem' }}>
                  Work experience:
                </Title>
                <Descr>Solutions Architect, Stripe.</Descr>

                <Title size='3' isUppercase style={{ marginTop: '3rem' }}>
                  Skills:
                </Title>
              </Content>
            </Row>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  )
}

export default App

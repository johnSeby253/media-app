import { MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit"

const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
         
         
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon="caret-right" className='me-3' />
                 
                  Media Player
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit.
                </p>
              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                  Loading Pages
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                   Home Page
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                   Watch HIstory
                  </a>
                </p>
               
              </MDBCol>

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    React Bootstrap
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Bootsatch
                  </a>
                </p>
               
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

                <form action=''>
                  <MDBRow className='d-flex justify-content-center'>
                    <MDBCol md='8' start>
                      <MDBInput contrast type='email' placeholder="Email Id" className='m' />
                    </MDBCol>

                    <MDBCol size="auto">
                      <MDBBtn color='warning' type='submit' className='mb-4'>
                        Subscribe
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </form>

                <div>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='facebook-f' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='twitter' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='google' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='instagram' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='linkedin' />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon color='secondary' fab icon='github' />
                  </a>
                </div>
              </MDBCol>

            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:Media-Player-Build with react
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer

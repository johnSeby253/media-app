import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const LandingPages = () => {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className="m-5 align-items-center justify-content-between w-100 bg-black">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>Welcome To
            <span className="text-warning">Media-Player</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni perferendis cupiditate,
            corporis eveniet eos ducimus! In quas a magnam totam facere temporibus
            repudiandae amet. Accusamus consequatur cumque eius inventore unde!</p>
          <Button onClick={() => navigateByUrl('/home')} className="btn btn-info">Get Started</Button>
        </Col>

        <Col lg={5}>
          <Image roundedCircle src="https://media.tenor.com/-gGH-GYH6vsAAAAC/moving-art.gif"></Image>

        </Col>
        <Col></Col>
      </Row>
      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
        <h5 className="text-warning" style={{ fontSize: '40px' }}>Features</h5>

        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'300px'} width={'300px'}
              src="https://static.vecteezy.com/system/resources/previews/023/968/083/non_2x/rainbow-colors-alien-is-a-resident-dj-in-the-club-background-of-rainbow-colors-illustration-generative-ai-photo.jpg" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>

            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'300px'} width={'300px'}
              src="https://thumb.ac-illust.com/70/7082f9320a3add4c84ada4dde5e7d9fa_t.jpeg" />
            <Card.Body>
              <Card.Title>Watched Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>

            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'300px'} width={'300px'}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRJXzcHO44fUaInnSLbMsBUAdiET1EVKI94yHaFk7sn0j-Hf2wciRCIjvpd-hTu3U8HY&usqp=CAU0" />
            <Card.Body>
              <Card.Title>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>

            </Card.Body>
          </Card>


        </div>

        <div className="container border rounded p-4 border-light mt-5 d-flex align-items-center justify-content-center">
          <div className="col-lg-5">
            <h4 className="text-warning">Simple,PowerFull & Fast</h4>
            <h6><span className="text-warning">Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium provident asperiores expedita debitis quos modi esse labore repellendus totam omnis ipsa,
              maiores minima, possimus atque non inventore quidem deleniti.</h6>
            <h6><span className="text-warning">Categorized Video</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium provident asperiores expedita debitis quos modi esse labore repellendus totam omnis ipsa,
              maiores minima, possimus atque non inventore quidem deleniti.</h6>
            <h6><span className="text-warning">Managing Video</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium provident asperiores expedita debitis quos modi esse labore repellendus totam omnis ipsa,
              maiores minima, possimus atque non inventore quidem deleniti.</h6>
          </div>

          <div className="col-lg-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7HNO7fi295M?si=z4Wcpld-Xh4hoQg8"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>



  )
}

export default LandingPages

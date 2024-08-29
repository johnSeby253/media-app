import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { deleteVideoHistoryApi, getVideoHistoryApi } from "../../Services/allAPI"

const Watchhistory = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const result = await getVideoHistoryApi();
    if (result.status == 200) {
      setHistory(result.data);
    } else {
      console.log("Api failed");
      console.log(result.message);
    }
  }

  const removeVideoHistory = async (id) => {
    await deleteVideoHistoryApi(id)
    alert("Delete the watch History")
    getHistory()
  }
  // console.log(history);


  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>
        <Link style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '30px' }} to={'/home'}>Back to Home
          <i className="fa-solid fa-rotate-right fa-spin"></i>
        </Link>
      </div>
      <table className="table mb-5 container shadow w-100 table-responsive ">
        <thead>
          <th>#</th>
          <th>Title</th>
          <th>URL</th>
          <th>TimeStamp</th>
          <th>Action</th>
        </thead>

        <tbody>

          {
            history?.length > 0 ? history?.map((video, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{video?.name}</td>
                <td><a href="">{video?.link}</a></td>
                <td>{video.timestamp}</td>
                <td><Button onClick={() => removeVideoHistory((video?.id))} className="btn bg-transparent border-0"><i className="fa-solid fa-trash"></i></Button></td>
              </tr>
            )) : <p>Mothing to display</p>


          }


        </tbody>

      </table>



    </>
  )
}

export default Watchhistory

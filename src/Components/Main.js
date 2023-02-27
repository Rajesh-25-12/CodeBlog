import React, { useState, useEffect } from 'react'
import Widget from './widget'
import Categories from './Categories';
import Adjustpost from './Adjustpost';
import Comments from './Comments';
import CommentsForm from './Commentsform';
import Author from './Author';
import Axios from 'axios';
import moment from 'moment';
import Postdetail from './Postdetail';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import Alert from '@material-ui/lab/Alert';
import App from '../App';
import FeaturedPosts from '../Realated';
import '../globals.scss'
const Main = ({ open, close, id }) => {

  const [data, setData] = useState([])
  const Getname = () => {
    Axios.get('http://localhost:3001/read')
      .then((res) => {
        console.log(res, "response")
        setData(res.data)
        // setRowdata(res.data)
      })
      .catch((err) => {
        console.log(err, "response")

      })
  }
  useEffect(() => {
    Getname()
  }, [])
  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        fullScreen
        aria-describedby="alert-dialog-description"
      >
        <div className='dialog'>
          <App />

          {data.map((item) => (
            <>
              <div className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="col-span-1 lg:col-span-8">
                    <Postdetail post={item} />
                    <Adjustpost id={item.id} createdAt={item.createdAt} data={data} />
                    <Author author={item.author} />
                    <CommentsForm id={item.id} />
                    <Comments id={item.id} />
                  </div>

                  <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                      <Widget categories={item.categories.type} data={data} id={id} />
                      <Categories data={data} />
                    </div>
                  </div>
                </div>
                <br />
                <br />


              </div>

            </>
          ))}
        </div>
      </Dialog>
    </>
  )
}

export default Main

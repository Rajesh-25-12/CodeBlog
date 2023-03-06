import React from 'react'
import Widget from './widget'
import Categories from './Categories';
import Adjustpost from './Adjustpost';
import Comments from './Comments';
import CommentsForm from './Commentsform';
import Author from './Author';
import Postdetail from './Postdetail';
import Dialog from '@material-ui/core/Dialog';
import App from '../App';
import '../globals.scss'

const Main = ({ open, close, id,data,cat }) => {
if(data===undefined){
  data=[]
}
 
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
     
          <App close={close} />

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
                      <Widget categories={item.categories.type} data={data} id={id} cat={cat} />
                      <Categories data={data} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </Dialog>
    </>
  )
}

export default Main

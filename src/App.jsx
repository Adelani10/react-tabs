import { useState } from 'react'
import './index.css'
import { useEffect } from 'react'
import Info from './info'


function App() {
  const [loading, setLoading] = useState(true)
  const [jobInfo, setJobInfo] = useState([])
  const [value, setValue] = useState(0)

  useEffect(()=> {
    fetch("https://course-api.com/react-tabs-project")
    .then(res => res.json())
    .then(data => {
      setJobInfo(data)
      setLoading(false)
    })

    
  }, [])



  if (loading){
        return (
        <div className="loading text-center text-2xl pt-24 font-bold tracking-widest">
          Loading...
        </div>
  )
}
    const {id, title, dates, duties, company} = jobInfo[value]
    const buttonElements = jobInfo.map((item, index) => {
        return (<button key={item.order} onClick={()=> setValue(index)}
            className='p-2 md:w-[60%] text-zinc-700 border-b font-bold uppercase rounded-md tracking-wider focus:border-r-2 focus:border-b focus:border-sky-400'>
              {item.company}
        </button>)
 })

  return (
      <section className="w-full h-full py-12 flex flex-col space-y-4 items-center">
        <div className='space-y-1 md:space-y-2'>
            <h1 className="font-bold tracking-wider text-3xl md:text-5xl">
              Experience
            </h1>
            <div className="underline border-2 border-sky-400 w-16 mx-auto"></div>
        </div>

        <div className='flex flex-col md:flex-row p-3 space-y-8 md:space-y-0 md:space-x-3 md:w-3/4'>
          <div className="btn-container flex flex-row justify-center md:flex-col md:space-y-2 md:items-center  md:justify-start space-x-2 md:space-x-0 md:w-[30%]">
              {buttonElements}
          </div>

          <Info key={id}
                  title={title}
                  dates={dates}
                  company={company}
                  duties={duties}

          />
        </div>
      </section>
    )
}

export default App

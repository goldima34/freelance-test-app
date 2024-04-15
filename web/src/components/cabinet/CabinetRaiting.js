import React, { useEffect, useState } from 'react'
import { getUserTest } from '../../services/TestApi'
import { RaitingCart } from '../RaitingCart'

export const CabinetRaiting = () => {
  const [raitingData, setRaitingData] = useState()

  useEffect(() => {
    getUserTest().then(data => setRaitingData(data))
  }, [])

  if(!raitingData){
    return (
        <div>
            loading
        </div>
    )
  }

  return (
    <div>
        {raitingData.map((data) => 
            <div>
                <RaitingCart raitingData={data}/>
            </div>
        )}
    </div>
  )
}

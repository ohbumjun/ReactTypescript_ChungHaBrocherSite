import {useEffect, useState, useRef} from 'react'
import { PictureDatas } from 'assets/data/Pictures'

export default function GetPictureData(pictureNum) {
    const [loading, setLoading]   = useState(true)
    const [pictures, setPictures] = useState([])
    const [curPictNum, setCurPictNum] = useState(0)
    const [hasMore, setHasMore]   = useState(false)
    const PictureDatasLength = PictureDatas.length - 1
    
    useEffect(() => {
        pictureNum = pictureNum > PictureDatasLength ? PictureDatasLength : pictureNum
        // setLoading(true)
        setPictures(prevPicts => {
            return [...prevPicts, ...PictureDatas.slice(curPictNum, pictureNum)]
        })
        setHasMore(PictureDatas.slice(curPictNum,pictureNum).length > 0 )
        setCurPictNum(pictureNum)
        // setLoading(false)
    },[pictureNum])
    
    
    return {loading, pictures, hasMore};
}
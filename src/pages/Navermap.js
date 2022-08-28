
import { useEffect, useState } from 'react';
import '../App.css';




function Navermap() {
    const {naver} =window;
    // var map = new naver.maps.Map('map',{
    //     mapTypeId: naver.maps.MapTypeId.HYBRID
    // });

    console.log(window, naver)
    const [map, setMap] = useState();
    useEffect(() => {
            const map = new naver.maps.Map("map",{
                center: new naver.maps.LatLng(37.3595316,127.1052133),
                zoom : 15,
                mapTypeControl: true
            });
            
            setMap(map);

    }, []);

    var jeju = new naver.maps.LatLng(33.3590628, 126.534361);
    var seoul = new naver.maps.LatLngBounds(
        new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
        new naver.maps.LatLng(37.7010174173061, 127.18379493229875));

    const handleClick = (e) => {
        console.log(e)
        map.fitBounds(seoul)
    }
    return (
        <>
        <button onClick={handleClick}>bound</button>
        <div id="map" style={{width: '100%', height:600}} />
        </>
    )
}

export default Navermap;

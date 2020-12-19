import React from 'react';
import RoomsFilter from "./RoomFilter";
import RoomList from "./RoomList";
import {withRoomConsumer} from '../context';
import Loading from './Loading'

function RoomContainer({context}) {
const {loading, sortedRooms, rooms}= context;
if(loading){
        return <Loading/>;
    }
    return (
        <div>
            <RoomsFilter rooms= {rooms} />
            <RoomList rooms= {sortedRooms}/>
        </div>
    );
}

export default withRoomConsumer(RoomContainer)
// import React from 'react';
// import RoomsFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import {RoomConsumer} from '../context';
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value
//                     
//                     );
//                 }
//             }
//         </RoomConsumer>  
//     );
// }

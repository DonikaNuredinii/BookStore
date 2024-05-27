import React, {useState} from "react";
import AccessoriesData from "./AccessoriesData";
import { BsArrowUpShort } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
import "../App.css";

// function FilteredSearch(){
//     const [search, setSearch] = useState('');
//     console.log(search)

//     return(
//         <div className='filteredSearch'>
//             <Container>
//                 <h1 className='text-center mt-4'>Contact Keeper</h1>
//                 <Form>
//                     <InputGroup className='my-3'>
//                         <Form.Group onChange={(e)=> setSearch(e.target.value)} placeholder='Search Contacts'/>
//                     </InputGroup>
//                 </Form>
//             </Container>
//         </div>
//     )
// }

const Accessories = () => {
    const [detail,setDetail] = useState([]);
    const [close, setClose]= useState(false);
    const AccDetailPage = (Accessories)=>{
        setDetail([{...Accessories}])
        setClose(true)
    };
    const top =() => {
        window.scrollTo(0,0);
    };

    return(
        
        <div className="accessories">
        {
            close ? <div className="Acc-detail-container">
            <div className="Acc-detail-content">
                <button onClick={()=>setClose(false)} className="Acc-close">
                    <MdOutlineCancel/>
                </button>
            {
                detail.map((x)=>
                {
                    return(
                        <>
                        <div className="Acc-detail-info">
                            <div className="Acc-img-box">
                                <img src={x.Image} alt={x.Name}></img>
                            </div>
                            <div className="Accessory_Details">
                                <h4> {x.Name} </h4>
                                <h5>${x.Price}</h5>
                                <p>Marka: {x.Seller}</p>
                                <p>Pershkrimi: {x.Description}</p>
                                <p>Masat: {x.Dimensions}</p>
                                <p>Sasia: {x.Quantity}</p>
                                <p>Data e Shtimit:{x.DateofAddition}</p>
                                <p>{x.Stock} ne Stok.</p>
                                <p> Add to Cart | Add to Wish List </p> 
                                <button><CiShoppingCart /></button>
                                <button><MdFavorite /></button>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </div>
        </div> :null
        }
        <div className="Acc-container">
        {   
            AccessoriesData.map((AData) => 
            {
                return (
                <>
                    <div className="AccData-box" key={AData.AccessoriesID}>
                        <div className="Acc-content">
                            <div className="Acc-img-box">
                                <img src={AData.Image} alt={AData.Name}/>
                            </div>
                            <div className="Acc-detail">
                                <div className="Acc-info">
                                    <h5>{AData.Name}</h5>
                                    <p>${AData.Price}</p>
                                </div>
                                <button onClick={()=>{AccDetailPage(AData); top();}} className="Acc-button">View</button>
                            </div>
                        </div>                            
                    </div>
                </>
                );
                
            })
        }
        </div>
       <p className="Acc-btn-p" >Jump Up<button onClick={top} className="Acc-Topbtn"><BsArrowUpShort /></button></p>
       
    </div>
    );
};

export default Accessories;
import React, {useState, useEffect} from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import AccessoriesBanner from "../Components/AccessoriesBanner";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";


const Accessories = ({addToCart}) => {
    const [detail,setDetail] = useState([]);
    const [close, setClose]= useState(false);
    const AccDetailPage = (Accessories)=>{
        setDetail([{...Accessories}])
        setClose(true)
    };
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
      };

      const scrollToFirstQuarter = () => {
        const firstQuarterY = window.innerHeight / 3;
         window.scrollTo(0, firstQuarterY);
      };
    const [accessories, setAccessories] = useState([]);

      useEffect(() => {
        fetchaccessories();
      }, []);

      const fetchaccessories = async () => {
        try {
          const response = await axios.get(`https://localhost:7061/api/Accessories`);
          console.log("Accessories fetched:", response.data);
          setAccessories(response.data);
        } catch (error) {
          console.error("Error fetching accessories:", error);
        }
      };

      const handleSubmit = (accessories) => {
        addToCart(accessories);
      };
      
const ImazhetEAksesoriev = require.context("../Images/ImazhetAksesorie", false, /\.(png|jpe?g|svg)$/);

const preprocessImagePath = (path) => {
  if (!path) {
    console.error("Path is null or undefined.");
    return null;
  }

  const image = path.split("/").pop();
  try {
    if (path.includes("ImazhetAksesorie")) {
      return ImazhetEAksesoriev(`./${image}`);
    } else {
      console.error("Folder not found for the provided image path.");
      return null;
    }
  } catch (err) {
    console.error(`Image not found: ${image}`);
    return null;
  }
};

    const top =() => {
        window.scrollTo(0,0);
    };

    return(
        
        <div className="accessories">
            <div className="second-section">
            <AccessoriesBanner></AccessoriesBanner>
          </div>
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
                                <p>Data e Shtimit: {x.DateofAddition}</p>
                                <p>{x.Stock} ne Stok.</p>
                                <p> Add to Cart | Add to Wish List </p>
                                <button className="buy-now-btn" onClick={() => handleSubmit(accessories)}> <CiShoppingCart /></button>
                                <button><MdFavorite /></button>
                                <div className="view-cart-container">
                                    <Link to="./cart" className="view-cart-button">
                                        View Cart
                                    </Link>
                                    </div>
                                    <div className="view-cart-container">
                                    <Link to="../Accessories" className="continue-shopping">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </div>
        </div> :null
        }
        <div className="Acc-cards">
        {   
            accessories.map((accessories) => 
            {
                const imagePath = preprocessImagePath(accessories.image);
                return (
                <>
                    <div className="card-item" key={accessories.AccessoriesID}>
                        <div className="acc-card-image">
                            <div className="acc-image">
                                <img src={imagePath || "loading" } alt={accessories.Name} className="accessories-image"/>
                            </div>
                            <div className="icon-container">
                                {isFavorite ? (
                                    <MdFavorite
                                    className="favorite-icon"
                                    onClick={() => handleFavoriteClick(accessories.AccessoriesID)}
                                    />
                                ) : (
                                    <MdFavoriteBorder
                                    className="favorite-icon"
                                    onClick={() => handleFavoriteClick(accessories.AccessoriesID)}
                                    />
                              )}
                        </div>
                            <div className="dropup">
                                <div className="dropup-content">
                                <p className="card-price">Price: €{accessories.Price}</p>
                                <h3 className="card-title">{accessories.Name}</h3>
                                <p className="card-author">Seller: {accessories.Seller}</p>
                                <button onClick={()=>{AccDetailPage(accessories); scrollToFirstQuarter();}} className="Acc-btn">View</button>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-author">{accessories.Name}</h3>
                                <p className="card-title">Seller: {accessories.Seller}</p>
                                <p className="card-price">Price: €{accessories.Price}</p>
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
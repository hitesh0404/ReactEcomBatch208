import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Products = memo(function({link}) {
  let count = 0;
  console.log("rerendered");
  
  let { categoryName } = useParams();
  let [products, setProducts] = useState({ products: [] });
  let [loading, setLoading] = useState(true);
  let loadingBodyStyle = {height:"100vh",position:"absolute",translate:"transform(-50%,-50%)",top:"50%",left:"50%"}
  useEffect(() => {
    link = categoryName ? link + categoryName : link;
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        },4000)
        return data;
      });
  }, [loading])
    
  return loading ? (
    <>
      <div style={loadingBodyStyle}>
        <div
          class="spinner-border"
          style={{ height: "20vh", width: "20vh",borderTop:"10px solid red",borderLeft:"10px solid blue",borderBottom:"10px solid green" }}
           role="status"
        >
          <span
            class="sr-only"
            style={{ height: "20vh", width: "20vh" }}
          ></span>
        </div>
      </div>
    </>
  ) : (
    <>
      
      <div>
        {products.products.map((value, index) => {
          return (
            <div key={index} className="card text-start">
              <img
                className="card-img-top"
                src={value.images[0]}
                alt="Title"
                height={300}
              />
              <div className="card-body">
                <h4 className="card-title">{value.title}</h4>
                <p className="card-text">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
)
export default Products;

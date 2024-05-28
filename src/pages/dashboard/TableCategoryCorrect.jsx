import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import style from "./styleProgress.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Bounce, toast } from 'react-toastify';
import { del } from '../../store/slices/productsSlice';
export default function TableCategoryCorrect({product ,myIndex}) {
    const [newFilterCategory, setNewFilterCategory] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [priceValue, setPriceValue] = useState("");
    const [imageValue, setImageValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [numRemainingValue, setNumRemaining] = useState("");
    const [indexP, setIndexP] = useState(0);
    const [index, setIndex] = useState(0);
    const products = useSelector((state) => state.products.products);
    const [open, setOpen] = React.useState(false);
  return (
    <tr>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td style={{ color: product.numRemaining === 0 && "red" }}>
      {product.numRemaining}
    </td>
    <td>{product.price}</td>
    <td>{product.category}</td>
    <td>

        <EditIcon
    
          onClick={() => {
            setIndex(myIndex);
            setOpen(true);
            setIndexP(myIndex);
            setNameValue(product.name);
            setPriceValue(product.price);
            setImageValue(product.image);
            setCategoryValue(product.category);
            setNumRemaining(product.numRemaining);
          }}
           />
{" "}
      <DeleteIcon
        fontSize="small"
        style={{ cursor: "pointer" }}
        onClick={() => {
          dispatchEvent(del({ index: myIndex }));
          toast.error(products[indexP].name + " deleted", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }}
      />
    </td>
  </tr>
  )
}
